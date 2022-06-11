import { fetchFood, passFoodData } from "./foodActions";
import { fetchUser, updateUser } from "./userActions";
import {
  hideProfileEditingModal,
  hideSnackBarAction,
  showProfileEditingModal,
  showSnackBarAction,
} from "./modalAction";

import { addingMeal } from "./dailyRecordActions";
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
  fetchUser,
  updateUser,
  filterActions,
  showProfileEditingModal,
  hideProfileEditingModal,
};
