import { Box, View } from "native-base";

import { Animated } from "react-native";
import { ImageBox } from "../image/ImageBox";
import MainContentLayout from "./MainContentLayout";
import React from "react";
import TopAppBar from "../appbar/TopAppBar";
import { TurnBackButton } from "../buttons/iconButtons/TurnBackButton";
import { getTopBannerHeight } from "../../../constants/sizes";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const LayoutWithImage = ({ title, iconAppBar, uri, child }) => {
  const safeArea = useSafeAreaInsets();
  const scrollA = React.useRef(new Animated.Value(0)).current;
  const heightImage = getTopBannerHeight();

  return (
    <View backgroundColor="white" h="100%">
      <TopAppBar
        title={title}
        backgroundColor="transparent"
        leftIcon={<TurnBackButton />}
        rightChildren={iconAppBar}
        scrollA={scrollA}
      />
      <ImageBox uri={uri} />
      <Box safeArea height={heightImage} />
      <MainContentLayout child={child} />
    </View>
  );
};
export default LayoutWithImage;
