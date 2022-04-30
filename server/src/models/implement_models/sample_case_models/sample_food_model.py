from mongoengine import *
from src.models.abstract_models.food_model import Food

class SampleFood(Food):

    meta = {
        "db_alias": "miao",
        "collection": "sample_foods"
    }