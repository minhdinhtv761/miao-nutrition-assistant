import { createAction } from "redux-actions";

export const showSnackBarAction = createAction("SHOW_SNACKBAR");

export const hideSnackBarAction = createAction("HIDE_SNACKBAR");

export const showProfileEditingModal = createAction(
  "SHOW_PROFILE_EDITING_MODAL",
  (payload) => payload
);

export const hideProfileEditingModal = createAction(
  "HIDE_PROFILE_EDITING_MODAL"
);
