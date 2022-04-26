import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  IconButton,
  NativeBaseProvider,
  StatusBar,
  Text,
  VStack,
} from "native-base";

import Icon from "react-native-vector-icons/MaterialIcons";
import React from "react";
import colors from "./../../../styles/colors";

export default function TopAppBar() {
  return (
    <Center w="100%">
      <Box safeArea/>
      <HStack
        bg={colors.primary}
        // px="1"
        py="2"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        <Icon.Button name="menu" color="white" backgroundColor="transparent" />
        <Heading color="white" size="md">
          Home
        </Heading>
        <HStack>
          <Icon.Button
            name="calendar-today"
            color="white"
            backgroundColor="transparent"
          />
        </HStack>
      </HStack>
    </Center>
  );
}
