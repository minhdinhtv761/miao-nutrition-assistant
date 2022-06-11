from src.models.abstract_models.small_nutrition_base_model import SmallNutritionBase
from mongoengine import *

class NutritionBase(SmallNutritionBase):
    water = DecimalField(required=True, precision=2, min_value=0)
    fiber = DecimalField(precision=2, min_value=0, null=True)
    sugar = DecimalField(precision=2, min_value=0, null=True)
    saturatedFattyAcid = DecimalField(precision=2, min_value=0.01, null=True)
    transFattyAcid = DecimalField(precision=2, min_value=0, null=True)
    cholesterol = DecimalField(precision=2, min_value=0, null=True)
    vitaminA = IntField(min_value=0, max_value=100, null=True)
    vitaminC = IntField(min_value=0, max_value=100, null=True)
    calcium = IntField(min_value=0, max_value=100, null=True)
    iron = IntField(min_value=0, max_value=100, null=True)
    potassium = DecimalField(precision=2, min_value=0, null=True)
    sodium = DecimalField(precision=2, min_value=0, null=True)

    meta = {
        "abstract": True
    }