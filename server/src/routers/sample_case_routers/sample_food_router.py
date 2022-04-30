from src.controllers.sample_case_controllers.sample_food_controller import ListSampleFood

def add_sample_food_resource(api):
    api.add_resource(ListSampleFood, "/sample_food")