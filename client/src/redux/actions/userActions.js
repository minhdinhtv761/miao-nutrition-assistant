import { createActions } from "redux-actions";

export const fetchUser = createActions({
  fetchUserRequest: (payload) => payload,
  fetchUserSuccess: (payload) => payload,
  fetchUserFailure: (err) => err,
});

export const updateUser = createActions({
  updateUserRequest: (payload) => payload,
  updateUserSuccess: (payload) => payload,
  updateUserFailure: (err) => err,
});
