import { Animated, Image } from "react-native";
import React, { Children, cloneElement, isValidElement } from "react";
import {
  getHeaderHeight,
  getTopBannerHeight,
} from "./../../../constants/sizes";

import { View } from "native-base";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// import { imgLinearGradient } from "./../../../constants/image";

export const ImageBox = ({ uri, aboveChildren }) => {
  const safeArea = useSafeAreaInsets();
  const heightImage = getTopBannerHeight() + getHeaderHeight() + safeArea.top;
  return (
    <View position="absolute" width="100%" height={heightImage}>
      {Children.map(aboveChildren, (child) => {
        if (!isValidElement(child)) return null;
        return cloneElement(child, child.props, null);
      })}
      <Image
        source={{ uri: uri}}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </View>
  );
};
