from mongoengine import *
from models.nutrition_base_model import NutritionBase

class Food(NutritionBase):
    foodName = StringField(required=True)
    servingSizeWeight = DecimalField(required=True, precision=2, min_value=0.01)
    servingSizeUnit = StringField(required=True)

    meta = {
        "db_alias": "miao",
        "collection": "foods"
    }