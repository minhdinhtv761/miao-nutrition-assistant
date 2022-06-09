import { Box, Slide, Text } from "native-base";

import React from "react";
import { SnackBarState$ } from "../../redux/selectors";
import { space } from "../../styles/layout";
import { useSelector } from "react-redux";

export const SnackBar = ({ text }) => {
  const isOpen = useSelector(SnackBarState$);
  return (
    <Slide in={isOpen} placement="bottom">
      <Box
        position="absolute"
        left={space.s}
        bottom={0}
        rounded="lg"
        px={2}
        py={1}
        background="#323232"
        width="96%"
      >
        <Text color="white">{text}</Text>
      </Box>
    </Slide>
  );
};
