import { Button, HStack, Heading } from "native-base";

import React from "react";
import colors from "./../../../styles/colors";

const MenuTitle = ({ title, action, onPressAction }) => {
  return (
    <HStack w="100%" justifyContent="space-between" alignItems="center">
      <Heading size="sm">{title}</Heading>
      <Button
        variant="link"
        _text={{ textDecoration: "none" }}
        onPress={onPressAction}
      >
        {action}
      </Button>
    </HStack>
  );
};

export default MenuTitle;
