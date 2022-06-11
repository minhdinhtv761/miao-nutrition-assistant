import { AddingMealState$, FoodsRemaining$ } from "../../redux/selectors";
import { Button, Center, Text } from "native-base";
import { addingMeal, filterActions } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import Colors from "../../styles/colors";
import FoodList from "../../components/newMeal/choosing/FoodList";
import LayoutWithTabview from "../../components/general/layout/LayoutWithTabview";
import React from "react";
import { SkeletonItem } from "./../../components/general/listItem/SkeletonItem";
import { TurnBackButton } from "./../../components/general/buttons/iconButtons/TurnBackButton";
import { push } from "../../utils/RootNavigation";

const MealChoosingScreen = () => {
  const dispatch = useDispatch();
  const { list } = useSelector(AddingMealState$);
  const foodList = useSelector(FoodsRemaining$);

  const onAddingFood = React.useCallback(
    (value, pressed) => {
      pressed
        ? dispatch(addingMeal.pushFood(value))
        : dispatch(addingMeal.removeFood(value));
    },
    [list.length]
  );

  const goBackAction = React.useCallback(() => {
    dispatch(addingMeal.resetFoodList());
    dispatch(filterActions.searchText(""));
  }, [dispatch]);

  const goNextAction = React.useCallback(() => {
    push("MealAddingScreen");
  }, [dispatch]);

  const tabList = [
    {
      title: "Thực phẩm",
      tab:
        foodList.length === 0 ? (
          <Text textAlign="center" color={Colors.textLight}>
            Không có kết quả
          </Text>
        ) : (
          <FoodList
            foodList={foodList}
            validationList={list}
            onPressIcon={(value, pressed) => onAddingFood(value, pressed)}
          />
        ),
    },
    {
      title: "Công thức",
      tab: (
        <Center flex={1} my="4">
          This is Tab 2
        </Center>
      ),
    },
    {
      title: "Của tôi",
      tab: (
        <Center flex={1} my="4">
          This is Tab 2
        </Center>
      ),
    },
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
      <LayoutWithTabview
        topAppBar={topAppBar}
        tabList={tabList}
      />
    </>
  );
};

export default MealChoosingScreen;
