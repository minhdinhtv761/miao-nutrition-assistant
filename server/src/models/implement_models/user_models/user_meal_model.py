from mongoengine import *
from src.models.abstract_models.meal_model import Meal

class UserMeal(Meal):

    meta = {
        "db_alias": "miao",
        "collection": "user_meals"
    }