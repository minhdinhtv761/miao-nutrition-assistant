import { Box, Center, HStack, Heading, Text, VStack, View } from "native-base";

import Colors from "./../../styles/colors";
import { DetailNutrition } from "../../components/home/DetailNutrition";
import { Dimensions } from "react-native";
import { NutritionProgress } from "./../../components/general/circleProgress/NutritionProgress";
import React from "react";
import { space } from "./../../styles/layout";
import { subBoxHeight } from "./../../constants/sizes";
import { topBannerHeight } from "../../constants/sizes";

export const TopHomeScreen = () => {
  var heightBox = topBannerHeight();
  var heightDetailBox = subBoxHeight();
  
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
    <View backgroundColor="black">
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
            <NutritionProgress radius={(heightBox * 0.6) / 2} />

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
