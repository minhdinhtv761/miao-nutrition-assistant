import { AddingMealState$, FoodState$ } from "../../redux/selectors";
import { Button, Center } from "native-base";
import {
  hideSnackBarAction,
  showSnackBarAction,
} from "./../../redux/actions/modalAction";
import { useDispatch, useSelector } from "react-redux";

import FoodList from "../../components/newMeal/choosing/FoodList";
import LayoutWithTabview from "../../components/general/layout/LayoutWithTabview";
import React from "react";
import { SnackBar } from "../../components/modals/SnackBar";
import { TurnBackButton } from "./../../components/general/buttons/iconButtons/TurnBackButton";
import { addingMeal } from "../../redux/actions";
import { push } from "../../utils/RootNavigation";

const MealChoosingScreen = () => {
  const dispatch = useDispatch();
  const foodList = useSelector(FoodState$);
  const { list } = useSelector(AddingMealState$);

  const onAddingFood = React.useCallback(
    (value, pressed) => {
      pressed
        ? dispatch(addingMeal.pushFood(value))
        : dispatch(addingMeal.removeFood(value));
      if (list.length === 0 && pressed) {
        dispatch(showSnackBarAction());
      } else if (list.length === 1 && !pressed) {
        dispatch(hideSnackBarAction());
      }
    },
    [list.length]
  );

  const goBackAction = React.useCallback(() => {
    dispatch(addingMeal.resetFoodList());
    dispatch(hideSnackBarAction());
  }, [dispatch]);

  const goNextAction = React.useCallback(() => {
    push("MealAddingScreen");
    dispatch(hideSnackBarAction());
  }, [dispatch]);

  const SecondRoute = () => (
    <Center flex={1} my="4">
      This is Tab 2
    </Center>
  );
  const tabList = [
    {
      title: "Thực phẩm",
      tab: (
        <FoodList
          foodList={foodList}
          validationList={list}
          onPressIcon={(value, pressed) => onAddingFood(value, pressed)}
        />
      ),
    },
    {
      title: "Công thức",
      tab: <SecondRoute />,
    },
    { title: "Của tôi", tab: <SecondRoute /> },
  ];
  const topAppBar = {
    title: "Thêm bữa ăn",
    backgroundColor: "white",
    leftIcon: <TurnBackButton goBackAction={goBackAction} />,
    rightChildren: (
      <Button variant="ghost" color="primary.500" onPress={goNextAction}>
        Tiếp
      </Button>
    ),
  };

  return (
    <>
      <LayoutWithTabview topAppBar={topAppBar} tabList={tabList} />
      <SnackBar text={"Đã chọn " + list.length} />
    </>
  );
};

export default MealChoosingScreen;
