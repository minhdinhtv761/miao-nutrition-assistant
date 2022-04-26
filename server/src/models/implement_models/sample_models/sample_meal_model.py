from mongoengine import *
from src.models.abstract_models.meal_model import Meal

class SampleMeal(Meal):
    recommendedTime = DateTimeField(null=True)

    meta = {
        "db_alias": "miao",
        "collection": "sample_meals"
    }