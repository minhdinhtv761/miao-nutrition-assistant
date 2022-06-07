import { createActions } from "redux-actions";

export const authActions = createActions({
  loginRequest: (payload) => payload,
  loginSuccess: (payload) => payload,
  loginFailure: (err) => err,
});
