import {
  createDailyRecord,
  getDailyRecord,
  updateOneMealInDailyRecord,
} from "./dailyRecordActions";
import { fetchFood, passFoodData } from "./foodActions";
import { getUser, updateUser } from "./userActions";
import {
  hideProfileEditingModal,
  hideSnackBarAction,
  showProfileEditingModal,
  showSnackBarAction,
} from "./modalAction";

import { addingMealActions } from './addingMealActions';
import { authActions } from "./authActions";
import { filterActions } from "./filterActions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export {
  fetchFood,
  passFoodData,
  addingMealActions,
  showSnackBarAction,
  hideSnackBarAction,
  authActions,
  getUser,
  updateUser,
  getDailyRecord,
  createDailyRecord,
  updateOneMealInDailyRecord,
  filterActions,
  showProfileEditingModal,
  hideProfileEditingModal,
};
