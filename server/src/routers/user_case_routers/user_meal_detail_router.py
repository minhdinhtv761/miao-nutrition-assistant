from src.controllers.user_case_controllers.user_meal_detail_controller import UserMealDetailById, UserMealDetailByUserId

def add_user_meal_detail_resrouce(api):
    api.add_resource(UserMealDetailByUserId, "/user/<userId>/user_meal_detail")
    api.add_resource(UserMealDetailById, "/user/<userId>/user_meal_detail/<_id>")