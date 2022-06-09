import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Box,
  HStack,
  HamburgerIcon,
  Icon,
  Menu,
  Pressable,
  Slide,
  Text,
  VStack,
} from "native-base";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "./../../../../constants/sizes";

import CustomButton from "./../CustomButton";
import React from "react";

export const MenuButton = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOnOpen = () => setIsOpen(!isOpen);
  return !isOpen ? (
    <Icon
      size="sm"
      as={MaterialCommunityIcons}
      name="menu"
      color="white"
      onPress={handleOnOpen}
    />
  ) : (
    <Slide in={isOpen} placement="left">
      <Box
        height={WINDOW_HEIGHT}
        width={WINDOW_WIDTH}
        position="absolute"
        background="white"
        zIndex={10000}
      >
        <VStack w="100%">
          <Icon
            position="absolute"
            right={0}
            size="sm"
            as={AntDesign}
            name="close"
            color="black"
            onPress={handleOnOpen}
          />
          <Text>Cài đặt</Text>
          <CustomButton>Đăng xuất</CustomButton>
        </VStack>
      </Box>
    </Slide>
  );
};
