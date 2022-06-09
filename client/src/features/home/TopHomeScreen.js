import { Box, Center, HStack, Heading, Text, VStack, View } from "native-base";
import {
  HEADER_HEIGHT,
  SUBBOX_HEIGHT,
  TOP_BANNER_HEIGHT,
} from "./../../constants/sizes";

import Colors from "./../../styles/colors";
import { DetailNutrition } from "../../components/home/DetailNutrition";
import { Dimensions } from "react-native";
import { FullNutritionProgress } from "../../components/general/progress/FullNutritionProgress";
import React from "react";
import { space } from "./../../styles/layout";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const TopHomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  var heightHeader = HEADER_HEIGHT + safeArea.top;
  var heightBox = TOP_BANNER_HEIGHT;
  var heightDetailBox = SUBBOX_HEIGHT;

  const TextElement = ({ calo, text }) => {
    return (
      <VStack alignItems="center">
        <Heading size="lg" color={Colors.white} fontWeight="medium">
          {calo}
        </Heading>
        <Text color={Colors.white}>{text}</Text>
      </VStack>
    );
  };
  return (
    <View backgroundColor={Colors.background} paddingTop={heightHeader}>
      <Box
        style={{
          backgroundColor: Colors.primary,
          height: heightBox,
        }}
      >
        <Center h={heightBox - heightDetailBox / 2}>
          <HStack
            justifyContent="space-between"
            alignItems="flex-end"
            px={space.l}
            w="100%"
          >
            <TextElement calo={1500} text="Tổng cộng" />
            <FullNutritionProgress radius={(heightBox * 0.6) / 2} />

            <TextElement calo={1500} text="Đã ăn" />
          </HStack>
        </Center>
      </Box>
      <DetailNutrition
        style={{
          //   backgroundColor:"black",
          position: "absolute",
          height: heightDetailBox,
          top: heightBox + heightHeader - heightDetailBox / 2,
          right: space.m * 4,
          left: space.m * 4,
        }}
      />
    </View>
  );
};
