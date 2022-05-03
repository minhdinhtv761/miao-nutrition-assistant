import { Box, Container } from "native-base";

import React from "react";

const MainContentLayout = ({ child }) => {
  return (
    <Box safeArea width="100%" h="100%" px={4}>
      {child}
    </Box>
  );
};

export default MainContentLayout;
