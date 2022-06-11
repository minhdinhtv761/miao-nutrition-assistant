import {
  Icon,
  Slide
} from "native-base";

import {
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { MenuSettingDrawer } from "./MenuSettingDrawer";
import React from "react";

export const MenuButton = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOnOpen = () => {
    setIsOpen(true)
    // RootNavigation.push("MenuSettingScreen");
  };
  return !isOpen ? (
    <Icon
      size="sm"
      as={MaterialCommunityIcons}
      name="menu"
      color="white"
      onPress={handleOnOpen}
    />
  ) : (
    <Slide in={isOpen} placement="left" duration={100}>
     <MenuSettingDrawer setIsOpen={setIsOpen}/>
    </Slide>
  );
};