import { createSelector } from "reselect";

export const FoodState$ = (state) => state.foodReducers.data;

export const FoodDataState$ = (state) => state.foodDataReducers;

export const AddingMealState$ = (state) => state.addingMealReducers;

export const AuthState$ = (state) => state.authReducers;

export const UserState$ = (state) => state.userReducers.data;

export const FilterState$ = (state) => state.filterReducers;

//#region Modal
export const SnackBarState$ = (state) => state.snackBarReducers.isShow;

export const ProfileEditingModalState$ = (state) => state.modalReducers;
//#endregion

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
