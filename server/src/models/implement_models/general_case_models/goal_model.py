from mongoengine import *
from src.constants.enums import Activity
from src.models.implement_models.user_case_models.user_diet_model import UserDiet
from src.models.implement_models.sample_case_models.sample_diet_model import SampleDiet

class Goal(Document):
    startWeight = DecimalField(required=True, precision=2, min_value=0)
    targetWeight = DecimalField(required=True, precision=2, min_value=0)
    startPercentBodyFat = IntField(min_value=0, max_value=100)
    targetPercentBodyFat = IntField(min_value=0, max_value=100)
    targetActivity = EnumField(Activity, required=True)
    weightPerWeek = DecimalField(required=True, precision=2, min_value=0)
    targetEnergy = IntField(required=True, min_value=0)
    targetProtein = DecimalField(required=True, precision=2, min_value=0)
    targetFat = DecimalField(required=True, precision=2, min_value=0)
    targetCarbohydrate = DecimalField(required=True, precision=2, min_value=0)
    dietId = GenericReferenceField(choices=[UserDiet, SampleDiet])

    meta = {
        "db_alias": "miao",
        "collection": "goals"
    }