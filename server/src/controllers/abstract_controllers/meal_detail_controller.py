from flask_restful import reqparse
from src.controllers.abstract_controllers.nutrition_base_controller import nutrition_base_args_parser

# Meal detail arguments
meal_detail_args_parser = nutrition_base_args_parser.copy()
meal_detail_args_parser.add_argument("itemId", type=dict, help="Invalid itemId", required=True)
meal_detail_args_parser.add_argument("servingSizeQuantity", type=int, help="Invalid servingSizeQuantity", required=True)