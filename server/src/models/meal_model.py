from mongoengine import *
from server.src.constants.enums import MealType
from server.src.models.meal_detail_model import MealDetail
from server.src.models.nutrition_base_model import NutritionBase

class Meal(NutritionBase):
    mealType = EnumField(MealType, required=True)
    recommendedTime = DateTimeField(null=True)
    mealDetailId = ListField(ReferenceField(MealDetail), required=True)
    totalQuantity = IntField(required=True, min_value=1)

    meta = {
        "db_alias": "miao",
        "collection": "meals"
    }