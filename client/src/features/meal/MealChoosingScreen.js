import { Button, Center, Icon } from "native-base";

import FoodList from "../../components/newMeal/choosing/FoodList";
import LayoutWithTabview from "../../components/general/layout/LayoutWithTabview";
import { Octicons } from "@expo/vector-icons";
import React from "react";
import { TurnBackButton } from "./../../components/general/buttons/iconButtons/TurnBackButton";

const SecondRoute = () => (
  <Center flex={1} my="4">
    This is Tab 2
  </Center>
);
const MealChoosingScreen = () => {
  const tabList = [
    {
      title: "Thực phẩm",
      tab: <FoodList />,
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
    leftIcon: <TurnBackButton />,
    rightChildren: (
      <Button variant="ghost" color="primary.500">
        Tiếp
      </Button>
    ),
  };

  return <LayoutWithTabview topAppBar={topAppBar} tabList={tabList} />;
};

export default MealChoosingScreen;
