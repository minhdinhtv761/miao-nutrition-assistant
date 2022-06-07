import addingMealReducers from './addingMealReducers';
import authReducers from './authReducers';
import { combineReducers } from "redux";
import dailyRecordReducers from "./dailyRecordReducers";
import foodDataReducers from './foodDataReducers';
import foodReducers from "./foodReducers";
import snackBarReducers from './snackBarReducers';

export default combineReducers({
  dailyRecordReducers,
  foodReducers,
  foodDataReducers,
  addingMealReducers,
  snackBarReducers,
  authReducers
});
