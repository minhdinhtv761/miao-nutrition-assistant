import datetime
from mongoengine import *
from src.models.embedded_models.user_meal_model import UserMeal
from src.models.abstract_models.small_nutrition_base_model import SmallNutritionBase

class DailyRecord(EmbeddedDocument):
    recordDate = DateTimeField(required=True, default=datetime.datetime.utcnow)
    breakfast = EmbeddedDocumentField(UserMeal, null=True)
    lunch = EmbeddedDocumentField(UserMeal, null=True)
    dinner = EmbeddedDocumentField(UserMeal, null=True)
    others = ListField(EmbeddedDocumentField(UserMeal), null=True)
    energy = IntField(required=True, min_value=0)
    protein = DecimalField(required=True, precision=2, min_value=0)
    fat = DecimalField(required=True, precision=2, min_value=0)
    carbohydrate = DecimalField(required=True, precision=2, min_value=0)

    meta = {
        "db_alias": "miao",
        "collection": "daily_records"
    }