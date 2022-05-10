import { Box, View } from "native-base";

import { Animated } from "react-native";
import { ImageBox } from "../image/ImageBox";
import MainContentLayout from "./MainContentLayout";
import React from "react";
import TopAppBar from "../appbar/TopAppBar";
import { TurnBackButton } from "../buttons/iconButtons/TurnBackButton";
import { getHeaderHeight } from "./../../../constants/sizes";
import { getTopBannerHeight } from "../../../constants/sizes";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const LayoutWithImage = ({
  topAppBar,
  uriImage,
  topBanner,
  children,
  backgroundColor,
}) => {
  const { title, leftIcon, rightChildren } = topAppBar;
  const safeArea = useSafeAreaInsets();
  const scrollA = React.useRef(new Animated.Value(0)).current;
  const heightImage = getTopBannerHeight() + getHeaderHeight() + safeArea.top;

  return (
    <View backgroundColor={backgroundColor || "white"} h="100%">
      {/* {Children.map(topAppBar, (child) => {
        if (!isValidElement(child)) return null;
        return cloneElement(
          child,
          {
            ...child.props,
            scrollA: scrollA,
          },
          null
        );
      })} */}
      <TopAppBar
        title={title}
        backgroundColor={topAppBar.backgroundColor}
        leftIcon={leftIcon}
        rightChildren={rightChildren}
        scrollA={scrollA}
      />
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollA } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        <ImageBox uri={uriImage} aboveChildren={topBanner} />
        <Box safeArea height={heightImage} />
        <MainContentLayout child={children} />
      </Animated.ScrollView>
    </View>
  );
};
export default LayoutWithImage;
