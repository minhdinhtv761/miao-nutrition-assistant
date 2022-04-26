from mongoengine import *
from src.constants.enums import RecipeLevel
from src.models.abstract_models.nutrition_base_model import NutritionBase
from src.models.embedded_models.method_step_embedded_model import MethodStep

class Recipe(NutritionBase):
    servingSizeQuantity = IntField(required=True, min_value=1)
    cookingTime = IntField(required=True, min_value=0)
    level = EnumField(RecipeLevel, required=True)
    shortDescription = StringField(required=True, min_length=20, max_length=200)
    foodId = ListField(GenericReferenceField(), required=True)
    method = ListField(EmbeddedDocumentField(MethodStep), required=True)

    meta = {
        "abstract": True
    }