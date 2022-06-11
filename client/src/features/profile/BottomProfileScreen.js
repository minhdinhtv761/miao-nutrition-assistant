import { Box, HStack, Heading, Text, VStack } from "native-base";
import { boxStyle, space } from "../../styles/layout";

import { AllergenicFoods } from "../../components/profile/AllergenicFoods";
import Colors from "../../styles/colors";
import { HealthInfo } from "./../../components/profile/HealthInfo";
import MenuTitle from "./../../components/general/typography/MenuTitle";
import React from "react";
import { ShortNutritionTable } from "./../../components/general/nutritionFact/ShortNutritionTable";
import { Subtitle } from "./../../components/general/typography/Subtitle";
import { UserBodyInfomation } from "./../../components/profile/UserBodyInfomation";

export const BottomProfileScreen = () => {
  return (
    <VStack space={space.m}>
      <VStack {...boxStyle} space={space.s}>
        <Text> Mục tiêu hiện tại</Text>
        <HStack alignItems="center" justifyContent="space-between">
          <Heading color={Colors.fatColor}>Giảm mỡ chậm</Heading>
          <Subtitle text="0.5 kg/tuần" />
        </HStack>
      </VStack>
      <UserBodyInfomation user={{ tdee: 1389, bmi: 19.4 }} />
      <MenuTitle title="Sức khỏe" />
      <HealthInfo />
      <MenuTitle title="Dinh dưỡng" />
      <Box {...boxStyle} p={0}>
        <ShortNutritionTable
          inProfile
          value={{ energy: 2000, carbohydrate: 250, fat: 44.4, protein: 150 }}
        />
      </Box>
      <MenuTitle title="Thực phẩm dị ứng" />
      <AllergenicFoods />
    </VStack>
  );
};
