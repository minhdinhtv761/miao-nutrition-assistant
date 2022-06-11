from mongoengine import *
from src.models.abstract_models.meal_detail_model import MealDetail
from src.models.abstract_models.meal_model import Meal

class UserMeal(EmbeddedDocument):
    time = DateTimeField(required=True)
    mealDetail = ListField(EmbeddedDocumentField(MealDetail), required=True)
    # totalQuantity = IntField(required=True, min_value=1)
    energy = IntField(required=True, min_value=0)
    protein = DecimalField(required=True, precision=2, min_value=0)
    fat = DecimalField(required=True, precision=2, min_value=0)
    carbohydrate = DecimalField(required=True, precision=2, min_value=0)

    meta = {
        "db_alias": "miao",
        "collection": "user_meals"
    }