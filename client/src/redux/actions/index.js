import { fetchFood, passFoodData } from "./foodActions";
import {
  hideProfileEditingModal,
  hideSnackBarAction,
  showProfileEditingModal,
  showSnackBarAction,
} from "./modalAction";

import { addingMeal } from "./dailyRecordActions";
import { authActions } from "./authActions";
import { fetchUser } from "./userActions";
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
  fetchUser,
  filterActions,
  showProfileEditingModal,
  hideProfileEditingModal,
};
