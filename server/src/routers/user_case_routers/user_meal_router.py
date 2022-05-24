from src.controllers.user_case_controllers.user_meal_controller import UserMealById, UserMealByUserId

def add_user_meal_resrouce(api):
    api.add_resource(UserMealByUserId, "/user/<userId>/user_meal")
    api.add_resource(UserMealById, "/user/<userId>/user_meal/<_id>")