import { Box, View } from "native-base";

import { Animated } from "react-native";
import { HEADER_HEIGHT } from "./../../../constants/sizes";
import { ImageBox } from "../image/ImageBox";
import MainContentLayout from "./MainContentLayout";
import React from "react";
import { ScrollViewLayout } from "./ScrollViewLayout";
import { TOP_BANNER_HEIGHT } from "../../../constants/sizes";
import TopAppBar from "../appbar/TopAppBar";
import { TurnBackButton } from "../buttons/iconButtons/TurnBackButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const LayoutWithImage = ({
  topAppBar,
  uriImage,
  aboveChildren,
  children,
  backgroundColor,
}) => {
  const { title, leftIcon, rightChildren } = topAppBar;
  const safeArea = useSafeAreaInsets();
  const scrollA = React.useRef(new Animated.Value(0)).current;
  return (
    <View backgroundColor={backgroundColor || "white"} h="100%">
      <TopAppBar
        title={title}
        backgroundColor={topAppBar.backgroundColor}
        leftIcon={leftIcon}
        rightChildren={rightChildren}
        scrollA={scrollA}
      />
      <ScrollViewLayout scrollA={scrollA}>
        <ImageBox uri={uriImage} aboveChildren={aboveChildren} />
        {/* <Box safeArea height={heightImage} /> */}
        <MainContentLayout child={children} />
      </ScrollViewLayout>
    </View>
  );
};
export default LayoutWithImage;
