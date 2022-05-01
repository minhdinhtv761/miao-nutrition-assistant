from src.controllers.sample_case_controllers.sample_recipe_controller import ListSampleRecipe

def add_sample_recipe_resource(api):
    api.add_resource(ListSampleRecipe, "/sample_recipe")