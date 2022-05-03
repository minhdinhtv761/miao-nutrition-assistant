from mongoengine import *
from src.models.abstract_models.food_model import Food

class UserFood(Food):

    meta = {
        "db_alias": "miao",
        "collection": "user_foods"
    }