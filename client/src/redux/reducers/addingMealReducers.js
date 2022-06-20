import { addingMealActions, getType } from "../actions";

import { calcTotalNutrition } from "../../helpers/dataCalc";
import { defaultNutrition } from "../../constants/enums";

const initState = {
  totalNutrition: defaultNutrition,
  list: [],
};

export default function addingMealReducers(state = initState, action) {
  let newList;
  switch (action.type) {
    case getType(addingMealActions.pushFood):
      newList = [
        ...state.list.filter((item) => item._id !== action.payload._id),
        action.payload,
      ];
      return { totalNutrition: calcTotalNutrition(newList), list: newList };

    case getType(addingMealActions.removeFood):
      newList = state.list.filter((item) => item._id !== action.payload._id);
      return { totalNutrition: calcTotalNutrition(newList), list: newList };

    case getType(addingMealActions.resetFoodList):
      return initState;
    default:
      return state;
  }
}
