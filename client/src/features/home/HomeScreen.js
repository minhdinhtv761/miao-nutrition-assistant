import { Button, View } from "native-base";

import { Animated } from "react-native";
import { BottomHomeScreen } from "./BottomHomeScreen";
import Colors from "./../../styles/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import MainContentLayout from "./../../components/general/layout/MainContentLayout";
import React from "react";
import TopAppBar from "../../components/general/appbar/TopAppBar";
import { TopHomeScreen } from "./TopHomeScreen";

const HomeScreen = () => {
  const scrollA = React.useRef(new Animated.Value(0)).current;
  return (
    <View backgroundColor={Colors.background} h="100%">
      <TopAppBar
        backgroundColor="primary.500"
        leftIcon={<Icon.Button name="menu" />}
        rightChildren={<Icon.Button name="calendar-today" />}
        scrollA={scrollA}
      ></TopAppBar>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollA } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        <TopHomeScreen />
        <MainContentLayout child={<BottomHomeScreen />} />
      </Animated.ScrollView>
    </View>
  );
};

export default HomeScreen;
