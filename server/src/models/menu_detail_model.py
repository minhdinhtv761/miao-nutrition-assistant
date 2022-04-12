from mongoengine import *
from server.src.models.nutrition_base_model import NutritionBase
from server.src.models.meal_model import Meal

class MenuDetail(NutritionBase):
    dateCount = IntField(required=True, min_value=1)
    mealId = ListField(ReferenceField(Meal), required=True)

    meta = {
        "db_alias": "miao",
        "collection": "menu_details"
    }