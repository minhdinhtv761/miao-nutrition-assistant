from mongoengine import *
from src.models.abstract_models.meal_detail_model import MealDetail
# from src.constants.enums import MealType
from src.models.abstract_models.small_nutrition_base_model import SmallNutritionBase

class Meal(SmallNutritionBase):
    # mealType = EnumField(MealType, required=True)
    time = DateTimeField(required=True)
    mealDetailId = ListField(EmbeddedDocumentField(MealDetail), required=True)
    totalQuantity = IntField(required=True, min_value=1)

    meta = {
        "abstract": True
    }