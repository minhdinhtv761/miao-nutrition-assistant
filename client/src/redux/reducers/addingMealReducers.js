import { addingMeal, getType } from "../actions";

const initState = [];

export default function addingMealReducers(state = initState, action) {
  switch (action.type) {
    case getType(addingMeal.pushFood):
      return [...state, action.payload];
    case getType(addingMeal.removeFood):
      return state.filter((item) => item != action.payload);
    case getType(addingMeal.updateFood):
      return state.map((item) => {
        if (item === action.payload._id) item = action.payload;
      });
    case getType(addingMeal.resetFoodList):
      return [];
    default:
      return state;
  }
}
