from mongoengine import *
from src.models.abstract_models.meal_detail_model import MealDetail

class SampleMealDetail(MealDetail):

    meta = {
        "db_alias": "miao",
        "collection": "sample_meal_details"
    }