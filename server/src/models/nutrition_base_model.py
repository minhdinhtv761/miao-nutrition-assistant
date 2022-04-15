from mongoengine import *

class NutritionBase(Document):
    calories = IntField(required=True, min_value=1)
    totalCarbohydrates = DecimalField(required=True, precision=2, min_value=0.01)
    dietaryFiber = DecimalField(required=True, precision=2, min_value=0.01)
    sugars = DecimalField(required=True, precision=2, min_value=0.01)
    totalFat = DecimalField(required=True, precision=2, min_value=0.01)
    saturatedFat = DecimalField(required=True, precision=2, min_value=0.01)
    transFat = DecimalField(required=True, precision=2, min_value=0.01)
    protein = DecimalField(required=True, precision=2, min_value=0.01)
    cholesterol = DecimalField(required=True, precision=2, min_value=0.01)
    natri = DecimalField(required=True, precision=2, min_value=0.01)
    kali = DecimalField(required=True, precision=2, min_value=0.01)
    vitaminA = DecimalField(required=True, precision=2, min_value=0.01)
    vitaminC = DecimalField(required=True, precision=2, min_value=0.01)
    canxi = DecimalField(required=True, precision=2, min_value=0.01)
    fe = DecimalField(required=True, precision=2, min_value=0.01)

    meta = {
        "allow_inheritance": True
    }