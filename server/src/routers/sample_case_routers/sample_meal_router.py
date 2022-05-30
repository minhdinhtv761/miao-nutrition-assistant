from src.controllers.sample_case_controllers.sample_meal_controller import ListSampleMeal

def add_sample_meal_resource(api):
    api.add_resource(ListSampleMeal, "/sample_meal")