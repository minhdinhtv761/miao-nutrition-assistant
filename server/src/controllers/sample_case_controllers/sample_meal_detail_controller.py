from flask_restful import Resource
from mongoengine import DoesNotExist, ValidationError
from werkzeug import exceptions
from src.models.implement_models.sample_case_models.sample_meal_detail_model import SampleMealDetail

####################
####################
####################

class ListSampleMealDetail(Resource):
    # Get all sample meal detail function
    def get(self):
        try:    
            data = SampleMealDetail.objects()

            return data, 200

        except DoesNotExist as e:
            return {"message": str(e)}, 404

        except (ValidationError, exceptions.BadRequest) as e:
            return {"message": str(e)}, 400

        except Exception as e:
            return {"message": str(e)}, 500