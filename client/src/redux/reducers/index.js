import addingMealReducers from "./addingMealReducers";
import authReducers from "./authReducers";
import { combineReducers } from "redux";
import filterReducers from "./filterReducers";
import foodDataReducers from "./foodDataReducers";
import foodReducers from "./foodReducers";
import modalReducers from "./modalReducers";
import snackBarReducers from "./snackBarReducers";
import userReducers from "./userReducers";

// import dailyRecordReducers from "./dailyRecordReducers";

export default combineReducers({
  // dailyRecordReducers,
  foodReducers,
  foodDataReducers,
  addingMealReducers,
  snackBarReducers,
  authReducers,
  userReducers,
  filterReducers,
  modalReducers,
});
