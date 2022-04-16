import { Box } from 'native-base';
import React from "react";

const MainLayout = ({ child }) => {
  return (
    // <Center w="100%" flex={1}>
      <Box safeArea width="100%" p={4}>
        {child}
      </Box>
    // </Center>
  );
};

export default MainLayout;
