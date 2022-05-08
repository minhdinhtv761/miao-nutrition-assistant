import { Box, Container } from "native-base";

import React from "react";
import { space } from "../../../styles/layout";

const MainContentLayout = ({ child }) => {
  return (
    <Box mt={space.m} width="100%" h="100%" px={4}>
      {child}
    </Box>
  );
};

export default MainContentLayout;
