from mongoengine import *
from src.models.abstract_models.recipe_model import Recipe

class SampleRecipe(Recipe):

    meta = {
        "db_alias": "miao",
        "collection": "sample_recipes"
    }