from src.controllers.sample_case_controllers.sample_diet_controller import ListSampleDiet

def add_sample_diet_resource(api):
    api.add_resource(ListSampleDiet, "/sample_diet")