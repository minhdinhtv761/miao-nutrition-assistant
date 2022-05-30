from src.controllers.general_case_controllers.daily_record_controller import DailyRecordById, DailyRecordByUserId

def add_daily_record_resource(api):
    api.add_resource(DailyRecordByUserId, "/user/<userId>/daily_record")
    api.add_resource(DailyRecordById, "/user/<userId>/daily_record/<_id>")