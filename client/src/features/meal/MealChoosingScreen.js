import { Button, Center } from "native-base";

import { Animated } from "react-native";
import FoodList from "../../components/newMeal/choosing/FoodList";
import LayoutWithTabview from "../../components/general/layout/LayoutWithTabview";
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
      <Button variant="ghost" onPress={() => {}}>
        Tiếp
      </Button>
    ),
  };
  // const Content = () => {
  //   return (
  //     <View h="100%">
  //       <SearchBar />
  //       <CustomTabView tabList={tabList} />
  //     </View>
  //   );
  // };
  // return (
  //   <View backgroundColor="white" h="100%" >
  //     <TopAppBar
  //       title="Thêm bữa ăn"
  //       backgroundColor="white"
  //       leftIcon={<TurnBackButton />}
  //       rightChildren={
  //         <Button variant="ghost" onPress={() => {}}>
  //           Tiếp
  //         </Button>
  //       }
  //       scrollA={scrollA}
  //     />
  //     <MainContentLayout child={<Content />} />
  //   </View>
  // );
  return <LayoutWithTabview topAppBar={topAppBar} tabList={tabList} />;
};

export default MealChoosingScreen;
