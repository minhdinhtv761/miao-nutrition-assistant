export const FoodState$ = (state) => state.foodReducers.data;

export const FoodDataState$ = (state) => {
  return state.foodDataReducers;
};

export const AddingMealState$ = (state) => state.addingMealReducers;
