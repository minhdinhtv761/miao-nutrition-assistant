import datetime
from mongoengine import *
from models.abstract_models.nutrition_base_model import NutritionBase

class DailyRecord(NutritionBase):
    recordDate = DateTimeField(required=True, default=datetime.datetime.utcnow)
    mealId = ListField(GenericReferenceField(), required=True)

    meta = {
        "db_alias": "miao",
        "collection": "daily_records"
    }