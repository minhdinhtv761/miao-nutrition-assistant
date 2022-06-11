from datetime import datetime
from flask_restful import Resource, reqparse
from mongoengine import DoesNotExist, ValidationError
from werkzeug import exceptions
from src.calcs.body_composition_mapper import bmi_calculator, bmr_calculator, tdee_calculator
from src.constants.enums import Gender
from src.models.embedded_models.body_composition_model import BodyComposition
from src.models.implement_models.general_case_models.account_model import Account
from src.models.implement_models.general_case_models.user_model import User

# User function arguments
user_args_parser = reqparse.RequestParser()
user_args_parser.add_argument("username", type=str, help="Invalid username", required=True)
user_args_parser.add_argument("gender", type=Gender, help="Invalid gender", required=True)
user_args_parser.add_argument("birthday", type=str, help="Invalid datetime", required=True)
# user_args_parser.add_argument("allergenicFoodsId", type=list, help="Invalid allergenicFoodsId", nullable=True)
user_args_parser.add_argument("backgroundDiseases", type=str, help="Invalid backgroundDiseases", nullable=True)
user_args_parser.add_argument("bodyComposition", type=list, help="Invalid bodyComposition", nullable=True, location="json")
# user_args_parser.add_argument("userDietId", type=list, help="Invalid userDietId", nullable=True)
user_args_parser.add_argument("goal", type=list, help="Invalid goal", nullable=True)
user_args_parser.add_argument("dailyRecordId", type=list, help="Invalid dailyRecordId", nullable=True)
# user_args_parser.add_argument("userFoodId", type=list, help="Invalid userFoodId", nullable=True)
# user_args_parser.add_argument("userRecipeId", type=list, help="Invalid userRecipeId", nullable=True)

####################
####################
####################

# Define all functions that query, modify, delete the specific known user
class UserById(Resource):
    # Modify user function
    def patch(self, _id):
        args = user_args_parser.parse_args(strict=True)

        username = args["username"]
        gender = args["gender"]
        birthday = args["birthday"]
        # allergenicFoodsId = args["allergenicFoodsId"]
        backgroundDiseases = args["backgroundDiseases"]
        bodyComposition = args["bodyComposition"]
        # userDietId = args["userDietId"]
        goal = args["goal"]
        dailyRecordId = args["dailyRecordId"]
        # userFoodId = args["userFoodId"]
        # userRecipeId = args["userRecipeId"]
        
        try:
            data = User.objects().get(id=_id)

            # bodyComposition field handler
            fullBodyComposition = []

            for item in bodyComposition:
                age = datetime.utcnow().year - data.birthday.year
                BMI = bmi_calculator(weight=item["weight"], height=item["height"])
                BMR = bmr_calculator(percentBodyFat=item["percentBodyFat"], weight=item["weight"], height=item["height"], gender=data.gender, age=age)
                TDEE = tdee_calculator(bmr=BMR, activity=item["activity"])
                print(TDEE)

                bodyCompositionItem = BodyComposition(recordDate=item["recordDate"], height=item["height"], weight=item["weight"], percentBodyFat=item["percentBodyFat"], activity=item["activity"], BMI=BMI, BMR=BMR, TDEE=TDEE)

                fullBodyComposition.append(bodyCompositionItem)

            # goal field handler

            data.modify(username=username, gender=gender, birthday=birthday, backgroundDiseases=backgroundDiseases, bodyComposition=fullBodyComposition, goal=goal, dailyRecordId=dailyRecordId)

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

# Define all functions that add a new account to list or query, modify, delete one
class UserByAccountId(Resource):
    # Get a user associated with an account function
    def get(self, accountId):
        try:
            data = User.objects().get(accountId=accountId)

            return data

        except DoesNotExist as e:
            return {"message": str(e)}, 404

        except (ValidationError, exceptions.BadRequest) as e:
            return {"message": str(e)}, 400

        except Exception as e:
            return {"message": str(e)}, 500

    # Create a new user function
    def post(self, accountId):
        args = user_args_parser.parse_args()
        username = args["username"]
        gender = args["gender"]
        birthday = args["birthday"]
        # allergenicFoodsId = args["allergenicFoodsId"]
        bodyComposition = args["bodyComposition"]
        backgroundDiseases = args["backgroundDiseases"]
        # userDietId = args["userDietId"]
        goal = args["goal"]
        dailyRecordId = args["dailyRecordId"]
        # userFoodId = args["userFoodId"]
        # userRecipeId = args["userRecipeId"]

        try:
            account = Account.objects().get(id=accountId)

            data = User(accountId=account, username=username, gender=gender, birthday=birthday, backgroundDiseases=backgroundDiseases, goal=goal, dailyRecordId=dailyRecordId).save()

            return data, 200

        except DoesNotExist as e:
            return {"message": str(e)}, 404

        except (ValidationError, exceptions.BadRequest) as e:
            return {"message": str(e)}, 400
            
        except Exception as e:
            return {"message": str(e)}, 500