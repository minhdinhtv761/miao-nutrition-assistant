import {
  createDailyRecord,
  getDailyRecord,
  getType,
  updateDailyRecord,
} from "../actions";

const initState = {
  isLoading: true,
  data: null,
  isAPICalled: false,
};

export default function dailyRecordReducers(state = initState, action) {
  switch (action.type) {
    case getType(getDailyRecord.getDailyRecordRequest):
      return {
        ...state,
        isLoading: true,
        isAPICalled: true,
      };
    case getType(getDailyRecord.getDailyRecordSuccess):
      return {
        isLoading: false,
        isAPICalled: true,
        data: action.payload,
      };
    case getType(getDailyRecord.getDailyRecordFailure):
      return {
        ...state,
        isLoading: false,
        isAPICalled: true,
      };

    case getType(updateDailyRecord.updateDailyRecordRequest):
      return {
        ...state,
        isLoading: true,
        isAPICalled: true,
      };
    case getType(updateDailyRecord.updateDailyRecordSuccess):
      return {
        ...state,
        isLoading: false,
        isAPICalled: true,
        data: action.payload,
      };
    case getType(updateDailyRecord.updateDailyRecordFailure):
      return {
        ...state,
        isLoading: false,
        isAPICalled: true,
      };
    case getType(createDailyRecord.createDailyRecordRequest):
      return {
        ...state,
        isLoading: true,
        isAPICalled: true,
      };
    case getType(createDailyRecord.createDailyRecordSuccess):
      return {
        ...state,
        isLoading: false,
        isAPICalled: true,
        data: action.payload,
      };
    case getType(createDailyRecord.createDailyRecordFailure):
      return {
        ...state,
        isLoading: false,
        isAPICalled: true,
      };
    default:
      return state;
  }
}
