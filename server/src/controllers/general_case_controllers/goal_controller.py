from flask_restful import Resource, reqparse
from mongoengine import DoesNotExist, ValidationError
from werkzeug import exceptions
from mongoengine.queryset.visitor import Q
from src.models.embedded_models.goal_model import Goal
from src.models.implement_models.general_case_models.user_model import User

# Goal function arguments
goal_args_parser = reqparse.RequestParser()
goal_args_parser.add_argument("startWeight", type=float, help="Invalid startWeight", required=True)
goal_args_parser.add_argument("targetWeight", type=float, help="Invalid targetWeight", required=True)
goal_args_parser.add_argument("startPercentBodyFat", type=int, help="Invalid startPercentBodyFat", required=True)
goal_args_parser.add_argument("targetPercentBodyFat", type=int, help="Invalid targetPercentBodyFat", required=True)
goal_args_parser.add_argument("weightPerWeek", type=float, help="Invalid weightPerWeek", required=True)
goal_args_parser.add_argument("targetEnergy", type=int, help="Invalid targetEnergy", required=True)
goal_args_parser.add_argument("targetProtein", type=float, help="Invalid targetProtein", required=True)
goal_args_parser.add_argument("targetFat", type=float, help="Invalid targetFat", required=True)
goal_args_parser.add_argument("targetCarbohydrate", type=float, help="Invalid targetCarbohydrate", required=True)
goal_args_parser.add_argument("dietId", type=str, help="Invalid dietId", required=True, location="json")

####################
####################
####################

class GoalById(Resource):
    # Modify goal function
    def patch(self, userId, _id):
        args = goal_args_parser.parse_args()
        startWeight = args["startWeight"]
        targetWeight = args["targetWeight"]
        startPercentBodyFat = args["startPercentBodyFat"]
        targetPercentBodyFat = args["targetPercentBodyFat"]
        weightPerWeek = args["weightPerWeek"]
        targetEnergy = args["targetEnergy"]
        targetProtein = args["targetProtein"]
        targetFat = args["targetFat"]
        targetCarbohydrate = args["targetCarbohydrate"]
        dietId = args["dietId"]
        
        try:
            User.objects().get(Q(id=userId) & Q(goalId=_id))

            data = Goal.objects().get(id=_id)

            data.modify(startWeight=startWeight, targetWeight=targetWeight, startPercentBodyFat=startPercentBodyFat, targetPercentBodyFat=targetPercentBodyFat, weightPerWeek=weightPerWeek, targetEnergy=targetEnergy, targetProtein=targetProtein, targetFat=targetFat, targetCarbohydrate=targetCarbohydrate, dietId=dietId)
            
            data.save()

            return data, 200

        except DoesNotExist as e:
            return {"message": str(e)}, 404

        except (ValidationError, exceptions.BadRequest) as e:
            return {"message": str(e)}, 400

        except Exception as e:
            return {"message": str(e)}, 500

    # Delete goal function
    def delete(self, userId, _id):
        try:
            User.objects().get(Q(id=userId) & Q(goalId=_id))

            data = Goal.objects().get(id=_id)

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

class GoalByUserId(Resource):
    # Get all user's goals function
    def get(self, userId):
        try:
            user = User.objects().get(id=userId)
                
            if user.goalId:
                data = user.goalId
            else:
                data = []

            return data, 200

        except DoesNotExist as e:
            return {"message": str(e)}, 404

        except (ValidationError, exceptions.BadRequest) as e:
            return {"message": str(e)}, 400

        except Exception as e:
            return {"message": str(e)}, 500

    # Create a new user's goal function
    def post(self, userId):
        args = goal_args_parser.parse_args()
        startWeight = args["startWeight"]
        targetWeight = args["targetWeight"]
        startPercentBodyFat = args["startPercentBodyFat"]
        targetPercentBodyFat = args["targetPercentBodyFat"]
        weightPerWeek = args["weightPerWeek"]
        targetEnergy = args["targetEnergy"]
        targetProtein = args["targetProtein"]
        targetFat = args["targetFat"]
        targetCarbohydrate = args["targetCarbohydrate"]
        dietId = args["dietId"]
        
        try:
            user = User.objects().get(id=userId)

            data = Goal(startWeight=startWeight, targetWeight=targetWeight, startPercentBodyFat=startPercentBodyFat, targetPercentBodyFat=targetPercentBodyFat, weightPerWeek=weightPerWeek, targetEnergy=targetEnergy, targetProtein=targetProtein, targetFat=targetFat, targetCarbohydrate=targetCarbohydrate, dietId=dietId)

            data.save()

            if not user.goalId:
                user.modify(goalId=[data])
            else:
                user.goalId.append(data)
                user.save()

            return data, 201

        except DoesNotExist as e:
            return {"message": str(e)}, 404

        except (ValidationError, exceptions.BadRequest) as e:
            return {"message": str(e)}, 400
            
        except Exception as e:
            return {"message": str(e)}, 500