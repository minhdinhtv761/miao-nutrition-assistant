from src.controllers.user_case_controllers.user_recipe_controller import UserRecipeById, UserRecipeByUserId

def add_user_recipe_resrouce(api):
    api.add_resource(UserRecipeByUserId, "/user/<userId>/user_recipe")
    api.add_resource(UserRecipeById, "/user/<userId>/user_recipe/<_id>")