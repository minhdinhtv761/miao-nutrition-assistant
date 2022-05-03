import { Button, Center, Icon, Text, View } from "native-base";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

import { Animated } from "react-native";
import { CustomTabView } from "./../../components/general/tabView/CustomTabView";
import FoodList from './FoodList';
import MainContentLayout from "../../components/general/layout/MainContentLayout";
import React from "react";
import SearchBar from "./../../components/general/input/SearchBar";
import TopAppBar from "../../components/general/appbar/TopAppBar";

const SecondRoute = () => (
  <Center flex={1} my="4">
    This is Tab 2
  </Center>
);
const NewMealScreen = () => {
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
        backgroundColor="white"
        leftIcon={
          <Icon
            size="sm"
            as={Entypo}
            name="chevron-thin-left"
            onPress={() => {}}
          />
        }
        // leftIcon={
        //   <Icon
        //     size="sm"
        //     as={MaterialCommunityIcons}
        //     name="menu"
        //     onPress={() => {}}
        //   />
        // }
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

export default NewMealScreen;
