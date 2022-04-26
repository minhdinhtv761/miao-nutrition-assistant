import { Box } from "native-base";
import React from "react";

const MainContentLayout = ({ child }) => {
  return (
    <Box safeArea width="100%" p={4}>
      {child}
    </Box>
  );
};

export default MainContentLayout;
