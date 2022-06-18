import { addingMeal, createDailyRecord, getDailyRecord } from "./dailyRecordActions";
import { fetchFood, passFoodData } from "./foodActions";
import { getUser, updateUser } from "./userActions";
import {
  hideProfileEditingModal,
  hideSnackBarAction,
  showProfileEditingModal,
  showSnackBarAction,
} from "./modalAction";

import { authActions } from "./authActions";
import { filterActions } from "./filterActions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export {
  fetchFood,
  passFoodData,
  addingMeal,
  showSnackBarAction,
  hideSnackBarAction,
  authActions,
  getUser,
  updateUser,
  getDailyRecord,
  createDailyRecord,
  filterActions,
  showProfileEditingModal,
  hideProfileEditingModal,
};
