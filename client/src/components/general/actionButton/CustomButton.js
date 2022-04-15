import { Button } from "native-base";
import React from "react";

const CustomButton = ({ text, onPress }) => {
  return (
    <Button rounded="full" onPress={onPress}>
      {text}
    </Button>
  );
};

export default CustomButton;
