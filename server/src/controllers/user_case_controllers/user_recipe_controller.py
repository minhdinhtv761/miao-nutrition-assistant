from flask_restful import Resource
from mongoengine import DoesNotExist, ValidationError
from werkzeug import exceptions
from mongoengine.queryset.visitor import Q
from src.controllers.abstract_controllers.recipe_controller import recipe_args_parser
from src.models.implement_models.general_case_models.user_model import User
from src.models.embedded_models.method_step_embedded_model import MethodStep
from src.models.implement_models.sample_case_models.sample_food_model import SampleFood
from src.models.implement_models.user_case_models.user_food_model import UserFood
from src.models.implement_models.user_case_models.user_recipe_model import UserRecipe

# User Recipe function arguments
user_recipe_args_parser = recipe_args_parser.copy()

####################
####################
####################

class UserRecipeById(Resource):
    # Modify user's recipe function
    def patch(self, userId, _id):
        args = user_recipe_args_parser.parse_args()
        recipeName = args["recipeName"]
        servingSizeQuantity = args["servingSizeQuantity"]
        cookingTime = args["cookingTime"]
        level = args["level"]
        shortDescription = args["shortDescription"]
        foodId = args["foodId"]
        method = args["method"]
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
            User.objects().get(Q(id=userId) & Q(userRecipeId=_id))

            data = UserRecipe.objects().get(id=_id)

            data.modify(recipeName=recipeName, servingSizeQuantity=servingSizeQuantity, cookingTime=cookingTime, level=level, shortDescription=shortDescription, calories=calories, totalCarbohydrates=totalCarbohydrates, dietaryFiber=dietaryFiber, sugars=sugars,totalFat=totalFat, saturatedFat=saturatedFat, transFat=transFat, protein=protein, cholesterol=cholesterol, natri=natri, kali=kali, vitaminA=vitaminA, vitaminC=vitaminC, canxi=canxi, fe=fe)

            foods = []

            for item in foodId:
                if item.type:
                    food = SampleFood.objects().get(id=item._id)
                else:
                    food = UserFood.objects().get(id=item._id)
                
                foods.append(food)

            fullMethod = []

            for step in method:
                methodStep = MethodStep(description=step.description)
                methodStep.images.replace(step.images)

                methodStep.save()
                
                fullMethod.append(methodStep)

            data.foodId = foods
            data.method = fullMethod
            
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
            User.objects().get(Q(id=userId) & Q(userRecipeId=_id))

            data = UserRecipe.objects().get(id=_id)

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

class UserRecipeByUserId(Resource):
    # Get all user's Recipes function
    def get(self, userId):
        try:
            user = User.objects().get(id=userId)
                
            if user.userRecipeId:
                data = user.userRecipeId
            else:
                data = []

            return data, 200

        except DoesNotExist as e:
            return {"message": str(e)}, 404

        except (ValidationError, exceptions.BadRequest) as e:
            return {"message": str(e)}, 400

        except Exception as e:
            return {"message": str(e)}, 500

    # Create a new user's Recipe function
    def post(self, userId):
        args = user_recipe_args_parser.parse_args()
        recipeName = args["recipeName"]
        servingSizeQuantity = args["servingSizeQuantity"]
        cookingTime = args["cookingTime"]
        level = args["level"]
        shortDescription = args["shortDescription"]
        foodId = args["foodId"]
        method = args["method"]
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

            data = UserRecipe(recipeName=recipeName, servingSizeQuantity=servingSizeQuantity, cookingTime=cookingTime, level=level, shortDescription=shortDescription, calories=calories, totalCarbohydrates=totalCarbohydrates, dietaryFiber=dietaryFiber, sugars=sugars,totalFat=totalFat, saturatedFat=saturatedFat, transFat=transFat, protein=protein, cholesterol=cholesterol, natri=natri, kali=kali, vitaminA=vitaminA, vitaminC=vitaminC, canxi=canxi, fe=fe)
            
            foods = []

            for item in foodId:
                if item.type:
                    food = SampleFood.objects().get(id=item._id)
                else:
                    food = UserFood.objects().get(id=item._id)
                
                foods.append(food)

            fullMethod = []

            for step in method:
                methodStep = MethodStep(description=step.description)
                methodStep.images.replace(step.images)

                methodStep.save()
                
                fullMethod.append(methodStep)

            data.foodId = foods
            data.method = fullMethod

            data.save()

            if not user.userRecipeId:
                user.modify(userRecipeId=[data])
            else:
                user.userRecipeId.append(data)
                user.save()

            return data, 201

        except DoesNotExist as e:
            return {"message": str(e)}, 404

        except (ValidationError, exceptions.BadRequest) as e:
            return {"message": str(e)}, 400
            
        except Exception as e:
            return {"message": str(e)}, 500