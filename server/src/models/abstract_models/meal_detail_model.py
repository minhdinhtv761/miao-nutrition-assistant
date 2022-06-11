from mongoengine import *
from src.models.abstract_models.small_nutrition_base_model import SmallNutritionBase
from src.models.implement_models.sample_case_models.sample_food_model import SampleFood

class MealDetail(EmbeddedDocument):
    itemId = ReferenceField(SampleFood, required=True)
    servingSizeQuantity = IntField(required=True, min_value=1)
    energy = IntField(required=True, min_value=0)
    protein = DecimalField(required=True, precision=2, min_value=0)
    fat = DecimalField(required=True, precision=2, min_value=0)
    carbohydrate = DecimalField(required=True, precision=2, min_value=0)

    meta = {
        "abstract": True
    }