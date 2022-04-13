from enum import Enum

class Gender(Enum):
    MALE = "Male"
    FEMALE = "Female"

class Activity(Enum):
    RARELY = "Rarely"
    OCCASIONALLY = "Occasionally"
    SOMETIMES = "Sometimes"
    NORMALLY = "Normally"
    ALWAYS = "Always"

class MealType(Enum):
    BREAKFAST = "Breakfast"
    LUNCH = "Lunch"
    DINNER = "Dinner"
    SNACK = "Snack"

class RecipeLevel(Enum):
    EASY = "Easy"
    NORMAL = "Normal"
    HARD = "Hard"