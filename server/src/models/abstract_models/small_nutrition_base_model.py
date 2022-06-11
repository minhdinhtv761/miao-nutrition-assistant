from mongoengine import *

class SmallNutritionBase(Document):
    energy = IntField(required=True, min_value=0)
    protein = DecimalField(required=True, precision=2, min_value=0)
    fat = DecimalField(required=True, precision=2, min_value=0)
    carbohydrate = DecimalField(required=True, precision=2, min_value=0)

    meta = {
        "abstract": True
    }