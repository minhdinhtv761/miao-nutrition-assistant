from flask_restful import Resource
from mongoengine import DoesNotExist, ValidationError
from werkzeug import exceptions
from mongoengine.queryset.visitor import Q
from src.controllers.abstract_controllers.food_controller import food_args_parser
from src.models.implement_models.general_case_models.user_model import User
from src.models.implement_models.user_case_models.user_food_model import UserFood

# User food function arguments
user_food_args_parser = food_args_parser.copy()

####################
####################
####################

class UserFoodById(Resource):
    # Modify user's food function
    def patch(self, userId, _id):
        args = user_food_args_parser.parse_args()
        foodName = args["foodName"]
        servingSizeWeight = args["servingSizeWeight"]
        servingSizeUnit = args["servingSizeUnit"]
        images = args["images"]
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
            User.objects().get(Q(id=userId) & Q(userFoodId=_id))

            data = UserFood.objects().get(id=_id)

            data.modify(foodName=foodName, servingSizeWeight=servingSizeWeight, servingSizeUnit=servingSizeUnit, images=images, calories=calories, totalCarbohydrates=totalCarbohydrates, dietaryFiber=dietaryFiber, sugars=sugars,totalFat=totalFat, saturatedFat=saturatedFat, transFat=transFat, protein=protein, cholesterol=cholesterol, natri=natri, kali=kali, vitaminA=vitaminA, vitaminC=vitaminC, canxi=canxi, fe=fe)
            data.images.replace(images)
            
            data.save()

            return data, 200

        except DoesNotExist as e:
            return {"message": str(e)}, 404

        except (ValidationError, exceptions.BadRequest) as e:
            return {"message": str(e)}, 400

        except Exception as e:
            return {"message": str(e)}, 500

    def delete(self, userId, _id):
        try:
            User.objects().get(Q(id=userId) & Q(userFoodId=_id))

            data = UserFood.objects().get(id=_id)

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

class UserFoodByUserId(Resource):
    # Get all user's foods function
    def get(self, userId):
        try:
            user = User.objects().get(id=userId)
                
            if user.userFoodId:
                data = user.userFoodId
            else:
                data = []

            return data, 200

        except DoesNotExist as e:
            return {"message": str(e)}, 404

        except (ValidationError, exceptions.BadRequest) as e:
            return {"message": str(e)}, 400

        except Exception as e:
            return {"message": str(e)}, 500

    # Create a new user's food function
    def post(self, userId):
        args = user_food_args_parser.parse_args()
        foodName = args["foodName"]
        servingSizeWeight = args["servingSizeWeight"]
        servingSizeUnit = args["servingSizeUnit"]
        images = args["images"]
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

            data = UserFood(foodName=foodName, servingSizeWeight=servingSizeWeight, servingSizeUnit=servingSizeUnit, calories=calories, totalCarbohydrates=totalCarbohydrates, dietaryFiber=dietaryFiber, sugars=sugars,totalFat=totalFat, saturatedFat=saturatedFat, transFat=transFat, protein=protein, cholesterol=cholesterol, natri=natri, kali=kali, vitaminA=vitaminA, vitaminC=vitaminC, canxi=canxi, fe=fe)
            data.images.put(images)

            data.save()

            if not user.userFoodId:
                user.modify(userFoodId=[data])

                return data, 201
            else:
                user.userFoodId.append(data)
                user.save()

                return data, 201

        except DoesNotExist as e:
            return {"message": str(e)}, 404

        except (ValidationError, exceptions.BadRequest) as e:
            return {"message": str(e)}, 400
            
        except Exception as e:
            return {"message": str(e)}, 500