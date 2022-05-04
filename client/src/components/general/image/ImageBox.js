import { Box, Image } from "native-base";

import React from "react";
import { headerHeight } from "./../../../constants/sizes";
import { topBannerHeight } from "../../../constants/sizes";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const ImageBox = (props) => {
  const safeArea = useSafeAreaInsets();
  const heightImage = topBannerHeight() + headerHeight() + safeArea.top;
  return (
    <Box position="absolute" left={0} h={heightImage} w="100%">
      <Box
        position="absolute"
        left={0}
        background="linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%)"
        opacity={20}
        w="100%"
        height="100%"
      />
      <Image
        source={{
          uri: props.uri,
        }}
        h="100%"
        w="100%"
        zIndex={-1}
      />
    </Box>
  );
};
