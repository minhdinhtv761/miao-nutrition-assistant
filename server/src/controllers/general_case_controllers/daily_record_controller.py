from flask_restful import Resource
from mongoengine import DoesNotExist, ValidationError
from werkzeug import exceptions
from mongoengine.queryset.visitor import Q
from src.controllers.abstract_controllers.nutrition_base_controller import nutrition_base_args_parser
from src.models.implement_models.general_case_models.user_model import User
from src.models.implement_models.general_case_models.daily_record_model import DailyRecord

# Daily record function arguments
daily_record_args_parser = nutrition_base_args_parser.copy()
daily_record_args_parser.add_argument("recordDate", type=str, help="Invalid recordDate", required=True)
daily_record_args_parser.add_argument("mealId", type=list, help="Invalid mealId", required=True, location="json")

####################
####################
####################

class DailyRecordById(Resource):
    # Modify user's daily record function
    def patch(self, userId, _id):
        args = daily_record_args_parser.parse_args()
        recordDate = args["recordDate"]
        mealId = args["mealId"]
        calories = args["calories"]
        totalCarbohydrates = args["totalCarbohydrates"]
        dietaryFiber = args["dietaryFiber"]
        sugars = args["sugars"]
        totalFat = args["totalFat"]
        saturatedFat = args["saturatedFat"]
        transFat = args["transFat"]
        protein = args["protein"]
        cholesterol = args["cholesterol"]
        natri = args["natri"]
        kali = args["kali"]
        vitaminA = args["vitaminA"]
        vitaminC = args["vitaminC"]
        canxi = args["canxi"]
        fe = args["fe"]
        
        try:
            User.objects().get(Q(id=userId) & Q(dailyRecordId=_id))

            data = DailyRecord.objects().get(id=_id)

            data.modify(recordDate=recordDate, mealId=mealId, calories=calories, totalCarbohydrates=totalCarbohydrates, dietaryFiber=dietaryFiber, sugars=sugars,totalFat=totalFat, saturatedFat=saturatedFat, transFat=transFat, protein=protein, cholesterol=cholesterol, natri=natri, kali=kali, vitaminA=vitaminA, vitaminC=vitaminC, canxi=canxi, fe=fe)
            
            data.save()

            return data, 200

        except DoesNotExist as e:
            return {"message": str(e)}, 404

        except (ValidationError, exceptions.BadRequest) as e:
            return {"message": str(e)}, 400

        except Exception as e:
            return {"message": str(e)}, 500

    # Delete user's daily record function
    def delete(self, userId, _id):
        try:
            User.objects().get(Q(id=userId) & Q(dailyRecordId=_id))

            data = DailyRecord.objects().get(id=_id)

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

class DailyRecordByUserId(Resource):
    # Get all user's daily records function
    def get(self, userId):
        try:
            user = User.objects().get(id=userId)
                
            if user.dailyRecordId:
                data = user.dailyRecordId
            else:
                data = []

            return data, 200

        except DoesNotExist as e:
            return {"message": str(e)}, 404

        except (ValidationError, exceptions.BadRequest) as e:
            return {"message": str(e)}, 400

        except Exception as e:
            return {"message": str(e)}, 500

    # Create a new user's daily record function
    def post(self, userId):
        args = daily_record_args_parser.parse_args()
        dateRecord = args["dateRecord"]
        mealId = args["mealId"]
        calories = args["calories"]
        totalCarbohydrates = args["totalCarbohydrates"]
        dietaryFiber = args["dietaryFiber"]
        sugars = args["sugars"]
        totalFat = args["totalFat"]
        saturatedFat = args["saturatedFat"]
        transFat = args["transFat"]
        protein = args["protein"]
        cholesterol = args["cholesterol"]
        natri = args["natri"]
        kali = args["kali"]
        vitaminA = args["vitaminA"]
        vitaminC = args["vitaminC"]
        canxi = args["canxi"]
        fe = args["fe"]
        
        try:
            user = User.objects().get(id=userId)

            data = DailyRecord(dateRecord=dateRecord, mealId=mealId, calories=calories, totalCarbohydrates=totalCarbohydrates, dietaryFiber=dietaryFiber, sugars=sugars,totalFat=totalFat, saturatedFat=saturatedFat, transFat=transFat, protein=protein, cholesterol=cholesterol, natri=natri, kali=kali, vitaminA=vitaminA, vitaminC=vitaminC, canxi=canxi, fe=fe)

            data.save()

            if not user.dailyRecordId:
                user.modify(dailyRecordId=[data])
            else:
                user.dailyRecordId.append(data)
                user.save()

            return data, 201

        except DoesNotExist as e:
            return {"message": str(e)}, 404

        except (ValidationError, exceptions.BadRequest) as e:
            return {"message": str(e)}, 400
            
        except Exception as e:
            return {"message": str(e)}, 500