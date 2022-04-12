from mongoengine import *
from models.recipe_model import Recipe
from models.food_model import Food
from models.nutrition_base_model import NutritionBase

class MealDetail(NutritionBase):
    foodId = ReferenceField(Food, null=True)
    recipeId = ReferenceField(Recipe, null=True)
    servingSizeQuantity = IntField(required=True, min_value=1)

    meta = {
        "db_alias": "miao",
        "collection": "meal_details"
    }