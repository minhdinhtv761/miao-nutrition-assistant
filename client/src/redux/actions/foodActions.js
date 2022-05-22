import { createActions } from "redux-actions";

export const fetchFood = createActions({
  fetchFoodRequest: undefined,
  fetchFoodSuccess: (payload) => payload,
  fetchFoodFailure: (err) => err,
});
