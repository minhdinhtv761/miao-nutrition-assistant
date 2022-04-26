from mongoengine import *
from src.models.abstract_models.nutrition_base_model import NutritionBase

class MealDetail(NutritionBase):
    itemId = GenericReferenceField(required=True)
    servingSizeQuantity = IntField(required=True, min_value=1)

    meta = {
        "abstract": True
    }