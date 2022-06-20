import { AddingMealState$, FoodsRemaining$ } from "../../redux/selectors";
import { Button, Center, Text } from "native-base";
import { addingMealActions, filterActions } from "../../redux/actions";
import { pop, push } from "../../utils/RootNavigation";
import { useDispatch, useSelector } from "react-redux";

import Colors from "../../styles/colors";
import FoodList from "../../components/newMeal/choosing/FoodList";
import LayoutWithTabview from "../../components/general/layout/LayoutWithTabview";
import React from "react";
import SearchBar from "../../components/general/input/SearchBar";
import { TurnBackButton } from "./../../components/general/buttons/iconButtons/TurnBackButton";

const MealChoosingScreen = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const dispatch = useDispatch();
  const { list } = useSelector(AddingMealState$);
  const foodList = useSelector(FoodsRemaining$);

  const onAddingFood = React.useCallback(
    (value, pressed) => {
      pressed
        ? dispatch(addingMealActions.pushFood(value))
        : dispatch(addingMealActions.removeFood(value));
    },
    [dispatch]
  );

  const goBackAction = React.useCallback(() => {
    dispatch(addingMealActions.resetFoodList());
    dispatch(filterActions.searchText(""));
  }, [dispatch]);

  const goNextAction = React.useCallback(() => {
    push("MealAddingScreen");
  }, [dispatch]);

  const handleOpenScanBarcode = React.useCallback(() => {
    push("ScanBarcodeScreen");
  }, [modalVisible]);

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
    leftIcon: <TurnBackButton goBackAction={() => goBackAction()} />,
    rightChildren: (
      <Button
        variant="ghost"
        color="primary.500"
        onPress={() => goNextAction()}
      >
        Tiếp
      </Button>
    ),
  };

  return (
    <LayoutWithTabview
      topAppBar={topAppBar}
      tabList={tabList}
      customHeader={
        <SearchBar scan onPressRightIcon={() => handleOpenScanBarcode()} />
      }
    />
  );
};

export default MealChoosingScreen;
