import {
  createDailyRecord,
  getType,
  getUser,
  updateGoal,
  updateUser,
} from "../actions";

const initState = {
  isLoading: false,
  data: null,
};

export default function userReducers(state = initState, action) {
  switch (action.type) {
    case getType(getUser.getUserRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getUser.getUserSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(updateUser.updateUserRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(updateUser.updateUserSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(createDailyRecord.createDailyRecordRequest):
      return {
        ...state,
        isLoading: false,
      };
    case getType(createDailyRecord.createDailyRecordSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    case getType(updateGoal.updateGoalRequest):
      return {
        ...state,
        isLoading: false,
      };
    case getType(updateGoal.updateGoalSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    default:
      return state;
  }
}
