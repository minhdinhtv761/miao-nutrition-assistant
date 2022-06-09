import { createSelector } from "reselect";

export const FoodState$ = (state) => state.foodReducers.data;

export const FoodDataState$ = (state) => state.foodDataReducers;

export const SnackBarState$ = (state) => state.snackBarReducers.isShow;

export const AddingMealState$ = (state) => state.addingMealReducers;

export const AuthState$ = (state) => state.authReducers;

export const FilterState$ = (state) => state.filterReducers;

export const FoodsRemaining$ = createSelector(
  FoodState$,
  FilterState$,
  (foodList, filter) => {
    const searchText = filter.searchText.toUpperCase();
    return foodList.filter((food) =>
      food.foodName.toUpperCase().includes(searchText)
    );
  }
);
