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
        water = args["water"]
        energy = args["energy"]
        protein = args["protein"]
        fat = args["fat"]
        carbohydrate = args["carbohydrate"]
        fiber = args["fiber"]
        sugar = args["sugar"]
        saturatedFattyAcid = args["saturatedFattyAcid"]
        transFattyAcid = args["transFattyAcid"]
        cholesterol = args["cholesterol"]
        vitaminA = args["vitaminA"]
        vitaminC = args["vitaminC"]
        calcium = args["calcium"]
        iron = args["iron"]
        potassium = args["potassium"]
        sodium = args["sodium"]
        
        try:
            User.objects().get(Q(id=userId) & Q(userFoodId=_id))

            data = UserFood.objects().get(id=_id)

            data.modify(foodName=foodName, servingSizeWeight=servingSizeWeight, servingSizeUnit=servingSizeUnit, images=images, water=water, energy=energy, carbohydrate=carbohydrate, fiber=fiber, sugar=sugar,fat=fat, saturatedFattyAcid=saturatedFattyAcid, transFattyAcid=transFattyAcid, protein=protein, cholesterol=cholesterol, sodium=sodium, potassium=potassium, vitaminA=vitaminA, vitaminC=vitaminC, calcium=calcium, iron=iron)
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
        water = args["water"]
        energy = args["energy"]
        protein = args["protein"]
        fat = args["fat"]
        carbohydrate = args["carbohydrate"]
        fiber = args["fiber"]
        sugar = args["sugar"]
        saturatedFattyAcid = args["saturatedFattyAcid"]
        transFattyAcid = args["transFattyAcid"]
        cholesterol = args["cholesterol"]
        vitaminA = args["vitaminA"]
        vitaminC = args["vitaminC"]
        calcium = args["calcium"]
        iron = args["iron"]
        potassium = args["potassium"]
        sodium = args["sodium"]
        
        try:
            user = User.objects().get(id=userId)

            data = UserFood(foodName=foodName, servingSizeWeight=servingSizeWeight, servingSizeUnit=servingSizeUnit, water=water, energy=energy, carbohydrate=carbohydrate, fiber=fiber, sugar=sugar,fat=fat, saturatedFattyAcid=saturatedFattyAcid, transFattyAcid=transFattyAcid, protein=protein, cholesterol=cholesterol, sodium=sodium, potassium=potassium, vitaminA=vitaminA, vitaminC=vitaminC, calcium=calcium, iron=iron)
            data.images.put(images)

            data.save()

            if not user.userFoodId:
                user.modify(userFoodId=[data])
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