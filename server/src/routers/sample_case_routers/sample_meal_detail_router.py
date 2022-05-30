from src.controllers.sample_case_controllers.sample_meal_detail_controller import ListSampleMealDetail

def add_sample_meal_detail_resource(api):
    api.add_resource(ListSampleMealDetail, "/sample_meal_detail")