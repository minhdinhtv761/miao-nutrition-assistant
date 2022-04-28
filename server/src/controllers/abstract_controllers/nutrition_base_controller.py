from flask_restful import reqparse

# Nutrition base arguments
nutrition_base_args_parser = reqparse.RequestParser()
nutrition_base_args_parser.add_argument("calories", type=int, help="Invalid calories", required=True)
nutrition_base_args_parser.add_argument("totalCarbohydrates", type=float, help="Invalid totalCarbohydrates", required=True)
nutrition_base_args_parser.add_argument("dietaryFiber", type=float, help="Invalid dietaryFiber")
nutrition_base_args_parser.add_argument("sugars", type=float, help="Invalid sugars")
nutrition_base_args_parser.add_argument("totalFat", type=float, help="Invalid totalFat", required=True)
nutrition_base_args_parser.add_argument("saturatedFat", type=float, help="Invalid saturatedFat")
nutrition_base_args_parser.add_argument("transFat", type=float, help="Invalid transFat")
nutrition_base_args_parser.add_argument("protein", type=float, help="Invalid protein", required=True)
nutrition_base_args_parser.add_argument("cholesterol", type=float, help="Invalid cholesterol")
nutrition_base_args_parser.add_argument("natri", type=float, help="Invalid natri")
nutrition_base_args_parser.add_argument("kali", type=float, help="Invalid kali")
nutrition_base_args_parser.add_argument("vitaminA", type=float, help="Invalid vitaminA")
nutrition_base_args_parser.add_argument("vitaminC", type=float, help="Invalid vitaminC")
nutrition_base_args_parser.add_argument("canxi", type=float, help="Invalid canxi")
nutrition_base_args_parser.add_argument("fe", type=float, help="Invalid fe")