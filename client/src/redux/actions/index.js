import { addingMeal, fetchDailyRecord } from "./dailyRecordActions";
import { fetchFood, passFoodData } from "./foodActions";
import { hideSnackBarAction, showSnackBarAction } from "./modalAction";

import { authActions } from './authActions';

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export {
  fetchDailyRecord,
  fetchFood,
  passFoodData,
  addingMeal,
  showSnackBarAction,
  hideSnackBarAction,
  authActions
};
