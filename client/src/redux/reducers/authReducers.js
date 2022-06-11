import { authActions, getType } from "../actions";

import { showToast } from "../../hooks/useToast";

const initState = {
  isLoading: false,
  error: "",
  account: null,
};

export default function authReducers(state = initState, action) {
  switch (action.type) {
    case getType(authActions.loginRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(authActions.loginSuccess):
      return {
        ...state,
        account: action.payload,
        isLoading: false,
      };
    case getType(authActions.loginFailure):
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case getType(authActions.logoutRequest):

      return {
        ...state,
        isLoading: false,
        account: null,
        error: "",
      };
    default:
      return state;
  }
}
