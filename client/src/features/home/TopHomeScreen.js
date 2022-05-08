import { Box, Center, HStack, Heading, Text, VStack, View } from "native-base";
import { getSubboxHeight, getTopBannerHeight } from "./../../constants/sizes";

import Colors from "./../../styles/colors";
import { DetailNutrition } from "../../components/home/DetailNutrition";
import { Dimensions } from "react-native";
import { FullNutritionProgress } from "../../components/general/progress/FullNutritionProgress";
import React from "react";
import { space } from "./../../styles/layout";

export const TopHomeScreen = () => {
  var heightBox = getTopBannerHeight();
  var heightDetailBox = getSubboxHeight();

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
    <View >
      <Box
        style={{
          position: "relative",
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
          top: heightBox - heightDetailBox / 2,
          right: space.m * 4,
          left: space.m * 4,
        }}
      />
    </View>
  );
};
