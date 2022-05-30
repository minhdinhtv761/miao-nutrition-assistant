import { combineReducers } from "redux";
import dailyRecordReducers from "./dailyRecordReducers";
import foodReducers from "./foodReducers";
import mealTypeModalReducer from "./modalReducers";

export default combineReducers({
  dailyRecordReducers,
  foodReducers,
  mealTypeModalReducer,
});
