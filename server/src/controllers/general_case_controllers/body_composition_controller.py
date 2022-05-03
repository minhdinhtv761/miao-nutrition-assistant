from datetime import datetime
from flask_restful import Resource, reqparse
from mongoengine import DoesNotExist, ValidationError
from werkzeug import exceptions
from mongoengine.queryset.visitor import Q
from src.calcs.body_composition_mapper import bmi_calculator, bmr_calculator, tdee_calculator
from src.constants.enums import Activity
from src.models.implement_models.general_case_models.body_composition_model import BodyComposition
from src.models.implement_models.general_case_models.user_model import User

# Body composition function arguments
body_composition_args_parser = reqparse.RequestParser()
body_composition_args_parser.add_argument("recordDate", type=str, help="Invalid recordDate", required=True)
body_composition_args_parser.add_argument("height", type=float, help="Invalid height", required=True)
body_composition_args_parser.add_argument("weight", type=float, help="Invalid weight", required=True)
body_composition_args_parser.add_argument("percentBodyFat", type=int, help="Invalid percentBodyFat", nullable=True)
body_composition_args_parser.add_argument("activity", type=Activity, help="Invalid activity", required=True)

####################
####################
####################

# Define all functions that query, modify, delete the specific known body composition
class BodyCompositionById(Resource):
    # Modify user's body composition function
    def patch(self, userId, _id):
        args = body_composition_args_parser.parse_args()
        recordDate = args["recordDate"]
        height = args["height"]
        weight = args["weight"]
        percentBodyFat = args["percentBodyFat"]
        activity = args["activity"]
        
        try:
            user = User.objects().get(Q(id=userId) & Q(bodyCompositionId=_id))

            data = BodyComposition.objects().get(id=_id)

            age = datetime.utcnow().year - user.birthday.year
            BMI = bmi_calculator(weight=weight, height=height)
            BMR = bmr_calculator(percentBodyFat=percentBodyFat, weight=weight, height=height, gender=user.gender, age=age)
            TDEE = tdee_calculator(bmr=BMR, activity=activity)

            data.modify(recordDate=recordDate, height=height, weight=weight, percentBodyFat=percentBodyFat, activity=activity, BMI=BMI, BMR=BMR, TDEE=TDEE)

            return data, 200

        except DoesNotExist as e:
            return {"message": str(e)}, 404

        except (ValidationError, exceptions.BadRequest) as e:
            return {"message": str(e)}, 400

        except Exception as e:
            return {"message": str(e)}, 500

    def delete(self, userId, _id):
        try:
            User.objects().get(Q(id=userId) & Q(bodyCompositionId=_id))

            data = BodyComposition.objects().get(id=_id)

            data.delete()

            return data, 200

        except DoesNotExist as e:
            return {"message": str(e)}, 404

        except (ValidationError, exceptions.BadRequest) as e:
            return {"message": str(e)}, 400

        except Exception as e:
            return {"message": str(e)}, 500

####################
####################
####################

# Define all functions that add a new body composition to list or query, modify, delete one
class BodyCompositionByUserId(Resource):
    # Get all user's body compositions function
    def get(self, userId):
        try:
            user = User.objects().get(id=userId)
                
            if user.bodyCompositionId:
                data = user.bodyCompositionId
            else:
                data = []

            return data, 200

        except DoesNotExist as e:
            return {"message": str(e)}, 404

        except (ValidationError, exceptions.BadRequest) as e:
            return {"message": str(e)}, 400

        except Exception as e:
            return {"message": str(e)}, 500

    # Create a new user's body composition function
    def post(self, userId):
        args = body_composition_args_parser.parse_args()
        recordDate = args["recordDate"]
        height = args["height"]
        weight = args["weight"]
        percentBodyFat = args["percentBodyFat"]
        activity = args["activity"]
        
        try:
            user = User.objects().get(id=userId)

            age = datetime.utcnow().year - user.birthday.year
            BMI = bmi_calculator(weight=weight, height=height)
            BMR = bmr_calculator(percentBodyFat=percentBodyFat, weight=weight, height=height, gender=user.gender, age=age)
            TDEE = tdee_calculator(bmr=BMR, activity=activity)

            data = BodyComposition(recordDate=recordDate, height=height, weight=weight, percentBodyFat=percentBodyFat, activity=activity, BMI=BMI, BMR=BMR, TDEE=TDEE).save()

            if not user.bodyCompositionId:
                user.modify(bodyCompositionId=[data])
            else:
                user.bodyCompositionId.append(data)
                user.save()

            return data, 201

        except DoesNotExist as e:
            return {"message": str(e)}, 404

        except (ValidationError, exceptions.BadRequest) as e:
            return {"message": str(e)}, 400
            
        except Exception as e:
            return {"message": str(e)}, 500