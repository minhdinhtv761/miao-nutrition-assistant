import { createAction, createActions } from "redux-actions";

export const fetchFood = createActions({
  fetchFoodRequest: undefined,
  fetchFoodSuccess: (payload) => payload,
  fetchFoodFailure: (err) => err,
});

export const passFoodData = createAction(
  "PASS_FOOD_DATA",
  (payload) => payload
);
