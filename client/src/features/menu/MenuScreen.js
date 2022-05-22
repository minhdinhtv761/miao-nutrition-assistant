import { Box, Button, Center, View } from "native-base";

import { Animated } from "react-native";
import { CustomTabView } from "../../components/general/tabView/CustomTabView";
import FoodList from "../../components/newMeal/choosing/FoodList";
import LayoutWithTabview from "../../components/general/layout/LayoutWithTabview";
import MainContentLayout from "../../components/general/layout/MainContentLayout";
import React from "react";
import SearchBar from "../../components/general/input/SearchBar";
import { ThumbnailList } from "../../components/general/listItem/ThumbnailList";
import { TurnBackButton } from "./../../components/general/buttons/iconButtons/TurnBackButton";

const SecondRoute = () => (
  <Center flex={1} my="4">
    This is Tab 2
  </Center>
);

const MenuScreen = () => {
  const scrollA = React.useRef(new Animated.Value(0)).current;

  const tabList = [
    {
      title: "Thực đơn",
      tab: <ThumbnailList />,
    },
    {
      title: "Công thức",
      tab: <SecondRoute />,
    },
  ];

  const topAppBar = {
    title: "Thực đơn",
    backgroundColor: "white",
    leftIcon: <TurnBackButton />,
    rightChildren: (
      <Button variant="ghost" color="primary.500">
        Tiếp
      </Button>
    ),
  };
  return (
    <LayoutWithTabview topAppBar={topAppBar} tabList={tabList} />
    // <View backgroundColor="white" h="100%">
    //   <TopAppBar
    //     title="Thực đơn"
    //     backgroundColor="white"
    //     leftIcon={<TurnBackButton />}
    //     rightChildren={
    //       <Button variant="ghost" onPress={() => {}}>
    //         Tiếp
    //       </Button>
    //     }
    //     scrollA={scrollA}
    //   />

    //   <MainContentLayout child={<Content />} />
    // </View>
  );
};

export default MenuScreen;
