import Colors from "../../../styles/colors";
import { Divider } from "native-base";
import React from "react";

export const CustomDivider = () => {
  return (
    <Divider
      my="2"
      _light={{
        bg: Colors.backgroundProgress,
      }}
    />
  );
};
