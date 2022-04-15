import datetime
from mongoengine import *
from src.models.meal_model import Meal
from src.models.nutrition_base_model import NutritionBase

class DailyRecord(NutritionBase):
    recordDate = DateTimeField(required=True, default=datetime.datetime.utcnow)
    mealId = ListField(ReferenceField(Meal), required=True)

    meta = {
        "db_alias": "miao",
        "collection": "daily_records"
    }