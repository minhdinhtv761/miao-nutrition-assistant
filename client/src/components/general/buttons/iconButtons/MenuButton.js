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
import {
  HEADER_HEIGHT,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from "./../../../../constants/sizes";

import CustomButton from "./../CustomButton";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { space } from "../../../../styles/layout";

export const MenuButton = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOnOpen = () => setIsOpen(!isOpen);
  return (
    <Icon
      size="sm"
      as={MaterialCommunityIcons}
      name="menu"
      color="white"
      onPress={handleOnOpen}
    />
  // ) : (
  //   <Slide in={isOpen} placement="left">
  //     <SafeAreaView />

  //     <Box
  //       height={WINDOW_HEIGHT}
  //       width={WINDOW_WIDTH}
  //       top={HEADER_HEIGHT}
  //       position="absolute"
  //       background="white"
  //       zIndex={10000}
  //     >
  //       <VStack w="100%" space={space.m} px={space.m}>
  //         <Icon
  //           position="absolute"
  //           right={0}
  //           size="sm"
  //           as={AntDesign}
  //           name="close"
  //           color="black"
  //           onPress={handleOnOpen}
  //         />
  //         <Text>Cài đặt</Text>
  //         <CustomButton text="Đăng xuất" />
  //       </VStack>
  //     </Box>
  //   </Slide>
  );
};
