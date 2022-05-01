import { Animated, Dimensions, ScrollView } from "react-native";
import { Box, View } from "native-base";

import { BottomHomeScreen } from "./BottomHomeScreen";
import Colors from "./../../styles/colors";
import MainContentLayout from "./../../components/general/layout/MainContentLayout";
import React from "react";
import TopAppBar from "../../components/general/appbar/TopAppBar";
import { TopHomeScreen } from "./TopHomeScreen";

const HomeScreen = () => {
  const scrollA = React.useRef(new Animated.Value(0)).current;

  return (
    <View backgroundColor={Colors.background} h="100%">
      <TopAppBar scrollA={scrollA} backgroundColor="primary.500" />
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
