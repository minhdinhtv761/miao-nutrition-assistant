import json
from flask_restful import Resource
from src.models.implement_models.general_case_models.user_model import User
from mongoengine import DoesNotExist, ValidationError
from werkzeug import exceptions
from mongoengine.queryset.visitor import Q
from src.controllers.abstract_controllers.meal_detail_controller import meal_detail_args_parser
from src.models.implement_models.user_case_models.user_meal_detail_model import UserMealDetail

user_meal_detail_args_parser = meal_detail_args_parser.copy()

class UserMealDetailById(Resource):
    # Modify user's meal details function
    def patch(self, userId, _id):
        args = user_meal_detail_args_parser.parse_args()
        itemId = args["itemId"]
        servingSizeQuantity = args["servingSizeQuantity"]
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
            User.objects().get(Q(id=userId) & Q(userMealDetailId=_id))

            data = UserMealDetail.objects().get(id=_id)

            data.modify(itemId=itemId, servingSizeQuantity=servingSizeQuantity, water=water, energy=energy, carbohydrate=carbohydrate, fiber=fiber, sugar=sugar,fat=fat, saturatedFattyAcid=saturatedFattyAcid, transFattyAcid=transFattyAcid, protein=protein, cholesterol=cholesterol, sodium=sodium, potassium=potassium, vitaminA=vitaminA, vitaminC=vitaminC, calcium=calcium, iron=iron)
            
            data.save()

            return data, 200

        except DoesNotExist as e:
            return {"message": str(e)}, 404

        except (ValidationError, exceptions.BadRequest) as e:
            return {"message": str(e)}, 400

        except Exception as e:
            return {"message": str(e)}, 500

    # Delete user's meal details function
    def delete(self, userId, _id):
        try:
            User.objects().get(Q(id=userId) & Q(userMealDetailId=_id))

            data = UserMealDetail.objects().get(id=_id)

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

class UserMealDetailByUserId(Resource):
    # Get all user's meal details function
    def get(self, userId):
        try:
            user = User.objects().get(id=userId)

            if user.userMealDetailId:
                data = user.userMealDetailId
            else:
                data = []

            return data, 200

        except DoesNotExist as e:
            return {"message": str(e)}, 404

        except (ValidationError, exceptions.BadRequest) as e:
            return {"message": str(e)}, 400

        except Exception as e:
            return {"message": str(e)}, 500

    # Create a new user's meal details function
    def post(self, userId):
        args = user_meal_detail_args_parser.parse_args()
        itemId = args["itemId"]
        servingSizeQuantity = args["servingSizeQuantity"]
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

            data = UserMealDetail(itemId=itemId, servingSizeQuantity=servingSizeQuantity, water=water, energy=energy, carbohydrate=carbohydrate, fiber=fiber, sugar=sugar,fat=fat, saturatedFattyAcid=saturatedFattyAcid, transFattyAcid=transFattyAcid, protein=protein, cholesterol=cholesterol, sodium=sodium, potassium=potassium, vitaminA=vitaminA, vitaminC=vitaminC, calcium=calcium, iron=iron)

            data.save()

            if not user.userMealDetailId:
                user.modify(userMealDetailId=[data])
            else:
                user.userMealDetailId.append(data)
                user.save()

            return data, 201

        except DoesNotExist as e:
            return {"message": str(e)}, 404

        except (ValidationError, exceptions.BadRequest) as e:
            return {"message": str(e)}, 400
            
        except Exception as e:
            return {"message": str(e)}, 500