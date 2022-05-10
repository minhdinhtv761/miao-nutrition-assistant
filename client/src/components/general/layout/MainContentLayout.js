import { Box, Container } from "native-base";

import React from "react";
import { space } from "../../../styles/layout";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const MainContentLayout = ({ child }) => {
  const safeArea = useSafeAreaInsets();
  return (
    <Box mt={space.m + safeArea.top} width="100%" h="100%" px={4}>
      {child}
    </Box>
  );
};

export default MainContentLayout;
