from flask_restful import Resource
from mongoengine import DoesNotExist, ValidationError
from werkzeug import exceptions
from mongoengine.queryset.visitor import Q
from src.controllers.abstract_controllers.diet_controller import diet_args_parser
from src.models.implement_models.general_case_models.user_model import User
from src.models.implement_models.user_case_models.user_diet_model import UserDiet

# User diet function arguments
user_diet_args_parser = diet_args_parser.copy()

####################
####################
####################

class UserDietById(Resource):
    # Modify user's diet function
    def patch(self, userId, _id):
        args = user_diet_args_parser.parse_args()
        dietName = args["dietName"]
        percentProtein = args["percentProtein"]
        percentFat = args["percentFat"]
        percentCarbohydrate = args["percentCarbohydrate"]
        allergenicFoodsId = args["allergenicFoodsId"]
        
        try:
            User.objects().get(Q(id=userId) & Q(userDietId=_id))

            data = UserDiet.objects().get(id=_id)

            data.modify(dietName=dietName, percentProtein=percentProtein, percentFat=percentFat, percentCarbohydrate=percentCarbohydrate, allergenicFoodsId=allergenicFoodsId)
            
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
            User.objects().get(Q(id=userId) & Q(userDietId=_id))

            data = UserDiet.objects().get(id=_id)

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

class UserDietByUserId(Resource):
    # Get all user's diets function
    def get(self, userId):
        try:
            user = User.objects().get(id=userId)
                
            if user.userDietId:
                data = user.userDietId
            else:
                data = []

            return data, 200

        except DoesNotExist as e:
            return {"message": str(e)}, 404

        except (ValidationError, exceptions.BadRequest) as e:
            return {"message": str(e)}, 400

        except Exception as e:
            return {"message": str(e)}, 500

    # Create a new user's diet function
    def post(self, userId):
        args = user_diet_args_parser.parse_args()
        dietName = args["dietName"]
        percentProtein = args["percentProtein"]
        percentFat = args["percentFat"]
        percentCarbohydrate = args["percentCarbohydrate"]
        allergenicFoodsId = args["allergenicFoodsId"]
        
        try:
            user = User.objects().get(id=userId)

            data = UserDiet(dietName=dietName, percentProtein=percentProtein, percentFat=percentFat, percentCarbohydrate=percentCarbohydrate, allergenicFoodsId=allergenicFoodsId)

            data.save()

            if not user.userDietId:
                user.modify(userdietId=[data])
            else:
                user.userDietId.append(data)
                user.save()

            return data, 201

        except DoesNotExist as e:
            return {"message": str(e)}, 404

        except (ValidationError, exceptions.BadRequest) as e:
            return {"message": str(e)}, 400
            
        except Exception as e:
            return {"message": str(e)}, 500