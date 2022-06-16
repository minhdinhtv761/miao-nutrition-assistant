import { addingMeal, getType } from "../actions";

const initState = {
  totalNutrition: {
    energy: 0,
    carbohydrate: 0,
    fat: 0,
    protein: 0,
  },
  list: [],
};

export default function addingMealReducers(state = initState, action) {
  let newList;
  switch (action.type) {
    case getType(addingMeal.pushFood):
      // const newObject = state.list.find(
      //   (item) => item._id === action.payload._id
      // );
      // newList = newObject
      //   ? state.list.map((value) =>
      //       value._id === newObject._id ? action.payload : value
      //     )
      //   : [...state.list, action.payload];
      console.log(action.payload)
      newList = [
        ...state.list.filter((item) => item._id !== action.payload._id),
        action.payload,
      ];
      console.log(newList);
      return { totalNutrition: calcTotal(newList), list: newList };
    case getType(addingMeal.removeFood):
      newList = state.list.filter((item) => item._id !== action.payload._id);
      return { totalNutrition: calcTotal(newList), list: newList };
    case getType(addingMeal.resetFoodList):
      return initState;
    default:
      return state;
  }
}

const calcTotal = (list) => {
  let result = { energy: 0, carbohydrate: 0, fat: 0, protein: 0 };
  Object.keys(result).forEach((key) => {
    list.forEach((element) => {
      result[key] += element[key];
      result[key] = Math.round(result[key] * 10) / 10;
    });
  });
  return result;
};
