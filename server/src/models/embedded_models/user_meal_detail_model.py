from mongoengine import *
from src.models.abstract_models.meal_detail_model import MealDetail

class UserMealDetail(EmbeddedDocument):

    meta = {
        "db_alias": "miao",
        "collection": "user_meal_details"
    }