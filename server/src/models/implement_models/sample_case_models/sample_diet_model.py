from mongoengine import *
from src.models.abstract_models.diet_model import Diet

class SampleDiet(Diet):

    meta = {
        "db_alias": "miao",
        "collection": "sample_diets"
    }