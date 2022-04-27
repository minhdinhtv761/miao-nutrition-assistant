from mongoengine import *
from src.models.abstract_models.recipe_model import Recipe

class UserRecipe(Recipe):

    meta = {
        "db_alias": "miao",
        "collection": "user_recipes"
    }