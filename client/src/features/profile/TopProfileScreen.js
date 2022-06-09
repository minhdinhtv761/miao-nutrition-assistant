import {
  Avatar,
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Text,
  VStack,
  View,
} from "native-base";
import {
  HEADER_HEIGHT,
  SUBBOX_HEIGHT,
  TOP_BANNER_HEIGHT,
  WIDTH_OF_IMAGE,
  WINDOW_WIDTH,
} from "./../../constants/sizes";

import Colors from "./../../styles/colors";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { Subtitle } from "../../components/general/typography/Subtitle";
import { space } from "./../../styles/layout";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TextElement = ({ title, text }) => {
  return (
    <HStack alignItems="center">
      <Text>{title}</Text>
      <Subtitle text={text} />
    </HStack>
  );
};
export const TopProfileScreen = () => {
  const safeArea = useSafeAreaInsets();
  var heightHeader = HEADER_HEIGHT + safeArea.top;
  var heightBox = TOP_BANNER_HEIGHT / 2;
  var heightDetailBox = SUBBOX_HEIGHT;
  const heightView = heightHeader + heightBox + heightDetailBox / 2;
  var widthImage = WIDTH_OF_IMAGE;

  return (
    <View
      backgroundColor={Colors.background}
      paddingTop={heightHeader}
      height={heightView}
    >
      <Box
        style={{
          backgroundColor: Colors.primary,
          height: heightBox,
        }}
      />

      <Box
        borderRadius="xl"
        style={{
          backgroundColor: "white",
          position: "absolute",
          height: heightDetailBox,
          width: WINDOW_WIDTH - space.m * 2 * 4,
          top: heightBox + heightHeader - heightDetailBox / 2,
          left: space.m * 4,
        }}
      >
        <HStack
          space={space.m}
          alignItems="center"
          px={space.m}
          h="100%"
          w="100%"
        >
          <Avatar
            width={widthImage}
            height={widthImage}
            source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            }}
          />
          <VStack w="100%" space={space.sx} alignItems="flex-start">
            <Heading fontSize="18px">Nguyễn Thị Phương Thảo</Heading>
            <Button
              variant="ghost"
              rightIcon={<Feather name="arrow-right" color={Colors.primary} />}
              p={0}
            >
              Xem trang cá nhân
            </Button>
          </VStack>
        </HStack>
      </Box>
    </View>
  );
};
