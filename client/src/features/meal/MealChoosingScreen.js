import { Button, Center, Icon } from "native-base";
import { useDispatch, useSelector } from "react-redux";

import FoodList from "../../components/newMeal/choosing/FoodList";
import LayoutWithTabview from "../../components/general/layout/LayoutWithTabview";
import React from "react";
import { TurnBackButton } from "./../../components/general/buttons/iconButtons/TurnBackButton";
import { fetchFood } from "./../../redux/actions/foodActions";

const MealChoosingScreen = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchFood.fetchFoodRequest());
  }, [dispatch]);

  const SecondRoute = () => (
    <Center flex={1} my="4">
      This is Tab 2
    </Center>
  );
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
