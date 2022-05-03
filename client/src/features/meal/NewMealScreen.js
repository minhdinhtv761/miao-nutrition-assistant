import { Box, Button, Icon, IconButton, View } from "native-base";

import { Animated } from "react-native";
import { CustomTabView } from "./../../components/general/tabView/CustomTabView";
import { Entypo } from "@expo/vector-icons";
import MainContentLayout from "../../components/general/layout/MainContentLayout";
import React from "react";
import SearchBar from "./../../components/general/input/SearchBar";
import TopAppBar from "../../components/general/appbar/TopAppBar";

const NewMealScreen = () => {
  const scrollA = React.useRef(new Animated.Value(0)).current;
  const Content = () => {
    return (
      <View h="100%">
        <SearchBar />
        <CustomTabView />
      </View>
    );
  };
  return (
    <View backgroundColor="white" h="100%">
      <TopAppBar
        backgroundColor="white"
        leftIcon={
          <IconButton
            icon={<Icon size="sm" as={Entypo} name="chevron-thin-left" />}
          />
        }
        rightChildren={
          <Button variant="ghost" onPress={() => {}}>
            Tiếp
          </Button>
        }
        scrollA={scrollA}
      />
      <MainContentLayout child={<Content />} />
      {/* <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollA } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      ></Animated.ScrollView> */}
    </View>
  );
};

export default NewMealScreen;
