from flask_restful import reqparse
from src.controllers.abstract_controllers.nutrition_base_controller import nutrition_base_args_parser

# Meal arguments
meal_args_parser = nutrition_base_args_parser.copy()
meal_args_parser.add_argument("mealDetailId", type=list, help="Invalid mealDetailId", required=True, location="json")
meal_args_parser.add_argument("totalQuantity", type=int, help="Invalid totalQuantity", required=True)