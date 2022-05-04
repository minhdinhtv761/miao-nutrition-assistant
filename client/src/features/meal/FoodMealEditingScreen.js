import { AntDesign, Entypo } from "@expo/vector-icons";
import { Box, Heading, Icon, Image, View, useSafeArea } from "native-base";
import { headerHeight, topBannerHeight } from "../../constants/sizes";
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { Animated } from "react-native";
import { ImageBox } from "../../components/general/image/ImageBox";
import MainContentLayout from "../../components/general/layout/MainContentLayout";
import React from "react";
import { StarButton } from "../../components/general/buttons/iconButtons/StarButton";
import TopAppBar from "../../components/general/appbar/TopAppBar";
import { TurnBackButton } from "../../components/general/buttons/iconButtons/TurnBackButton";

const FoodMealEditingScreen = () => {
  const safeArea = useSafeAreaInsets();
  const scrollA = React.useRef(new Animated.Value(0)).current;
  const heightImage = topBannerHeight() + headerHeight() + safeArea.top;
  return (
    <View backgroundColor="white" h="100%">
      <TopAppBar
        title="Chỉnh sửa khẩu phần"
        backgroundColor="transparent"
        leftIcon={<TurnBackButton />}
        // rightChildren={<StarButton onPress={() => console.log("hi")} props />}
        scrollA={scrollA}
      />
      <ImageBox uri="https://wallpaperaccess.com/full/317501.jpg" />
      <Box safeArea/>
      <Heading >
        Bơ (quả)
      </Heading>
      {/* <MainContentLayout
        child={<StarButton onPress={() => console.log("hi")} />}
      /> */}
    </View>
  );
};

export default FoodMealEditingScreen;
