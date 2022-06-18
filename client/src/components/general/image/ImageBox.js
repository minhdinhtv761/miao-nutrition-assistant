import { Animated, Image } from "react-native";
import {
  HEADER_HEIGHT,
  TOP_BANNER_HEIGHT,
} from "./../../../constants/sizes";
import React, { Children, cloneElement, isValidElement } from "react";

import { View } from "native-base";
import { imgLinearGradient } from "./../../../constants/image";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const ImageBox = ({ uri, aboveChildren }) => {
  const safeArea = useSafeAreaInsets();
  const heightImage = TOP_BANNER_HEIGHT + HEADER_HEIGHT + safeArea.top;
  return (
    <View width="100%" height={uri ? heightImage : null}>
      {Children.map(aboveChildren, (child) => {
        if (!isValidElement(child)) return null;
        return cloneElement(child, {
          ...child.props,
          zIndex: 1,
        });
      })}
      {uri ? (
        <Image
          source={imgLinearGradient}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",

            opacity: 0.4,
          }}
        />
      ) : null}
      <Image
        source={{ uri: uri }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
    </View>
  );
};
