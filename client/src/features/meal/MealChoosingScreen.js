import { Button, Center, View } from "native-base";

import { Animated } from "react-native";
import { CustomTabView } from "../../components/general/tabView/CustomTabView";
import FoodList from "../../components/newMeal/choosing/FoodList";
import MainContentLayout from "../../components/general/layout/MainContentLayout";
import React from "react";
import SearchBar from "../../components/general/input/SearchBar";
import { TurnBackButton } from "./../../components/general/buttons/iconButtons/TurnBackButton";

const SecondRoute = () => (
  <Center flex={1} my="4">
    This is Tab 2
  </Center>
);
const MealChoosingScreen = () => {
  const scrollA = React.useRef(new Animated.Value(0)).current;
  const tabList = [
    {
      title: "Thực phẩm",
      tab: FoodList,
    },
    {
      title: "Công thức",
      tab: SecondRoute,
    },
    { title: "Của tôi", tab: SecondRoute },
  ];

  const Content = () => {
    return (
      <View h="100%">
        <SearchBar />
        <CustomTabView tabList={tabList} />
      </View>
    );
  };
  return (
    <View backgroundColor="white" h="100%">
      <TopAppBar
        title="Thêm bữa ăn"
        backgroundColor="white"
        leftIcon={<TurnBackButton />}
        rightChildren={
          <Button variant="ghost" onPress={() => {}}>
            Tiếp
          </Button>
        }
        scrollA={scrollA}
      />
      <MainContentLayout child={<Content />} />
    </View>
  );
};

export default MealChoosingScreen;
