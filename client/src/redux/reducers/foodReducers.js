import { fetchFood, getType } from "../actions";

const initState = {
  isLoading: false,
  data: [],
};

export default function foodReducers(state = initState, action) {
  switch (action.type) {
    case getType(fetchFood.fetchFoodRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(fetchFood.fetchFoodSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    default:
      return state;
  }
}
