import { Box, Image } from "native-base";
import React, { Children, cloneElement, isValidElement } from "react";
import { getHeaderHeight, getTopBannerHeight } from "./../../../constants/sizes";

import { useSafeAreaInsets } from "react-native-safe-area-context";

// import { imgLinearGradient } from "./../../../constants/image";

export const ImageBox = ({ uri, aboveChildren }) => {
  const safeArea = useSafeAreaInsets();
  const heightImage = getTopBannerHeight() + getHeaderHeight() + safeArea.top;
  return (
    <Box position="absolute" left={0} h={heightImage} w="100%">
      {/* <Image
        source={{
          uri: imgLinearGradient,
        }}
        position="absolute"
        left={0}
        // opacity={30}
        h="100%"
        w="100%"
      /> */}
      {Children.map(aboveChildren, (child) => {
        if (!isValidElement(child)) return null;
        return cloneElement(child, child.props, null);
      })}
      <Image
        source={{
          uri: uri,
        }}
        h="100%"
        w="100%"
        zIndex={-1}
      />
    </Box>
  );
};
