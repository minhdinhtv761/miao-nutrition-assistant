import { getType, hideMealTypeModal, showMealTypeModal } from "../actions";

const initState = {
  isShow: false,
};

export default function mealTypeModalReducer(state = initState, action) {
  switch (action.type) {
    case getType(showMealTypeModal):
      return {
        isShow: true,
      };
    case getType(hideMealTypeModal):
      return {
        isShow: false,
      };
    default:
      return state;
  }
}
