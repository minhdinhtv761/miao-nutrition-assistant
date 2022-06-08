from mongoengine import *
from src.models.abstract_models.diet_model import Diet

class UserDiet(Diet):

    meta = {
        "db_alias": "miao",
        "collection": "user_diets"
    }