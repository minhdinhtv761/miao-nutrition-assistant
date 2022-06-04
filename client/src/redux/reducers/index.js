import addingMealReducers from './addingMealReducers';
import { combineReducers } from "redux";
import dailyRecordReducers from "./dailyRecordReducers";
import foodDataReducers from './foodDataReducers';
import foodReducers from "./foodReducers";

export default combineReducers({
  dailyRecordReducers,
  foodReducers,
  foodDataReducers,
  addingMealReducers
});
