import { getDailyRecord, getType } from "../actions";

const initState = {
  isLoading: false,
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
        ...state,
        isLoading: false,
        isAPICalled: true,
        data: action.payload,
      };
    default:
      return state;
  }
}
