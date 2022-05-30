export const FoodState$ = (state) => state.foodReducers.data;

export const MealTypeModal$ = (state) => {
  return state.mealTypeModalReducer.isShow;
};
