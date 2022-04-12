from mongoengine import *
import datetime
from server.src.models.nutrition_base_model import NutritionBase
from server.src.models.meal_model import Meal

class DailyRecord(NutritionBase):
    recordDate = DateTimeField(required=True, default=datetime.datetime.utcnow)
    mealId = ListField(ReferenceField(Meal), required=True)

    meta = {
        "db_alias": "miao",
        "collection": "daily_records"
    }