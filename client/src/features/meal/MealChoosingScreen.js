import { AddingMealState$, FoodState$ } from "../../redux/selectors";
import { Box, Button, Center, Slide, Text } from "native-base";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import FoodList from "../../components/newMeal/choosing/FoodList";
import LayoutWithTabview from "../../components/general/layout/LayoutWithTabview";
import { TurnBackButton } from "./../../components/general/buttons/iconButtons/TurnBackButton";
import { addingMeal } from "../../redux/actions";
import { space } from "../../styles/layout";

const MealChoosingScreen = () => {
  const dispatch = useDispatch();
  const addedFoodList = useSelector(AddingMealState$);

  const goBackAction = React.useCallback(() => {
    dispatch(addingMeal.resetFoodList());
  }, [dispatch]);

  const SecondRoute = () => (
    <Center flex={1} my="4">
      This is Tab 2
    </Center>
  );
  const tabList = [
    {
      title: "Thực phẩm",
      tab: <FoodList validationList={addedFoodList} />,
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
      <Button variant="ghost" color="primary.500">
        Tiếp
      </Button>
    ),
  };

  return (
    <>
      <LayoutWithTabview topAppBar={topAppBar} tabList={tabList} />
      <Slide in={addedFoodList.length > 0} placement="bottom">
        <Box
          position="absolute"
          left={space.s}
          bottom={0}
          rounded="lg"
          px={2}
          py={1}
          background="#323232"
          width="96%"
        >
          <Text color="white">Đã chọn {addedFoodList.length}</Text>
        </Box>
      </Slide>
    </>
  );
};

export default MealChoosingScreen;
