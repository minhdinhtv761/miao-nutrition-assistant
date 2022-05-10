import { Button } from "native-base";
import React from "react";

const CustomButton = ({ text, onPress, colorScheme }) => {
  return (
    <Button
      rounded="full"
      size="lg"
      onPress={onPress}
      colorScheme={colorScheme}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
