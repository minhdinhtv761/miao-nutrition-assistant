from mongoengine import *
from src.models.abstract_models.meal_detail_model import MealDetail
from src.constants.enums import MealType
from models.abstract_models.nutrition_base_model import NutritionBase

class Meal(NutritionBase):
    mealType = EnumField(MealType, required=True)
    mealDetailId = ListField(GenericReferenceField(), required=True)
    totalQuantity = IntField(required=True, min_value=1)

    meta = {
        "abstract": True
    }