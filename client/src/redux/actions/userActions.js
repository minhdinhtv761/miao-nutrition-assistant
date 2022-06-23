import { createActions } from "redux-actions";

export const getUser = createActions({
  getUserRequest: (payload) => payload,
  getUserSuccess: (payload) => payload,
  getUserFailure: (err) => err,
});

export const updateUser = createActions({
  updateUserRequest: (payload) => payload,
  updateUserSuccess: (payload) => payload,
  updateUserFailure: (err) => err,
});

export const updateGoal = createActions({
  updateGoalRequest: (payload) => payload,
  updateGoalSuccess: (payload) => payload,
  updateGoalFailure: (err) => err,
});
