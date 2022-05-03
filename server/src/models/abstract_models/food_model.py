from mongoengine import *
from src.models.abstract_models.nutrition_base_model import NutritionBase

class Food(NutritionBase):
    foodName = StringField(required=True)
    servingSizeWeight = DecimalField(required=True, precision=2, min_value=0.01)
    servingSizeUnit = StringField(required=True)
    images = ImageField(db_alias="miao",msize=(250, 250, False), thumbnail_size=(150, 150, False))

    meta = {
        "abstract": True
    }