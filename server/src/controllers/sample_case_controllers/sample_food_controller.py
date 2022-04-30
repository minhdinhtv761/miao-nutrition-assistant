from flask_restful import Resource
from mongoengine import DoesNotExist, ValidationError
from werkzeug import exceptions
from mongoengine.queryset.visitor import Q
from src.controllers.abstract_controllers.food_controller import food_args_parser
from src.models.implement_models.sample_case_models.sample_food_model import SampleFood

# Sample food function arguments
sample_food_args_parser = food_args_parser.copy()

####################
####################
####################

class ListSampleFood(Resource):
    # Get all user's foods function
    def get(self):
        try:    
            data = SampleFood.objects()

            return data, 200

        except DoesNotExist as e:
            return {"message": str(e)}, 404

        except (ValidationError, exceptions.BadRequest) as e:
            return {"message": str(e)}, 400

        except Exception as e:
            return {"message": str(e)}, 500