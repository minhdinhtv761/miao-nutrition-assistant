import { createActions } from "redux-actions";

export const addingMealActions = createActions({
  pushFood: (payload) => payload,
  removeFood: (payload) => payload,
  updateFood: (payload) => payload,
  resetFoodList: undefined,
});
