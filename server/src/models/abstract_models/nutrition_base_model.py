from mongoengine import *

class NutritionBase(Document):
    calories = IntField(required=True, min_value=0)
    totalCarbohydrates = DecimalField(required=True, precision=2, min_value=0)
    dietaryFiber = DecimalField(precision=2, min_value=0, null=True)
    sugars = DecimalField(precision=2, min_value=0, null=True)
    totalFat = DecimalField(required=True, precision=2, min_value=0)
    saturatedFat = DecimalField(precision=2, min_value=0.01, null=True)
    transFat = DecimalField(precision=2, min_value=0, null=True)
    protein = DecimalField(required=True, precision=2, min_value=0)
    cholesterol = DecimalField(precision=2, min_value=0, null=True)
    natri = DecimalField(precision=2, min_value=0, null=True)
    kali = DecimalField(precision=2, min_value=0, null=True)
    vitaminA = IntField(min_value=0, max_value=100, null=True)
    vitaminC = IntField(min_value=0, max_value=100, null=True)
    canxi = IntField(min_value=0, max_value=100, null=True)
    fe = IntField(min_value=0, max_value=100, null=True)

    meta = {
        "abstract": True
    }