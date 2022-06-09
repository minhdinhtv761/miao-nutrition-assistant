import { Actionsheet, Box, Heading } from "native-base";

import React from "react";
import { space } from "../../../styles/layout";

export const BottomActionSheet = ({
  isOpen,
  onClose,
  header,
  content,
  bottom,
}) => {
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content justifyContent="flex-start">
        <Heading size="md" textAlign="center">
          {header}
        </Heading>
        <Box w="100%" px={space.m}>
          {content}
        </Box>
        {bottom}
      </Actionsheet.Content>
    </Actionsheet>
  );
};
