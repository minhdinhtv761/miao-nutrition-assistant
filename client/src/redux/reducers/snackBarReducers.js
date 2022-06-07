import { getType, hideSnackBarAction, showSnackBarAction } from "../actions";

const initState = {
  isShow: false,
};

export default function snackBarReducers(state = initState, action) {
  switch (action.type) {
    case getType(showSnackBarAction):
      return { isShow: true };
    case getType(hideSnackBarAction):
      return { isShow: false };
    default:
      return state;
  }
}
