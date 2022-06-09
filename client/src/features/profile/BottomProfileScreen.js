import { Box, Divider, HStack, Heading, Icon, Text, VStack } from "native-base";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { boxStyle, space } from "../../styles/layout";

import { AllergenicFoods } from "../../components/profile/AllergenicFoods";
import Colors from "../../styles/colors";
import { FoodItem } from "../../components/newMeal/choosing/FoodItem";
import { HealthInfo } from "./../../components/profile/HealthInfo";
import MenuTitle from "./../../components/general/typography/MenuTitle";
import React from "react";
import { ShortNutritionTable } from "./../../components/general/nutritionFact/ShortNutritionTable";
import { Subtitle } from "./../../components/general/typography/Subtitle";

export const BottomProfileScreen = () => {
  const allergenicFoodsId = [
    {
      _id: {
        $oid: "629625cddda5de344792f64a",
      },
      calcium: 32,
      carbohydrate: 74.5,
      cholesterol: 0,
      energy: 344,
      fat: 1.5,
      fiber: 0.6,
      foodName: "Gạo nếp",
      images: {
        $oid: "626b6aab60fc39eeb84a36a1",
      },
      iron: 1.2,
      potassium: 282,
      protein: 8.6,
      saturatedFattyAcid: null,
      servingSizeUnit: "g",
      servingSizeWeight: 100,
      sodium: 3,
      sugar: null,
      transFattyAcid: null,
      vitaminA: 0,
      vitaminC: 0,
      water: 14,
    },
  ];

  return (
    <VStack space={space.m}>
      <VStack {...boxStyle} space={space.s}>
        <Text> Mục tiêu hiện tại</Text>
        <HStack alignItems="center" justifyContent="space-between">
          <Heading color={Colors.fatColor}>Giảm mỡ chậm</Heading>
          <Subtitle text="0.5 kg/tuần" />
        </HStack>
      </VStack>
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
      <AllergenicFoods allergenicFoodsId={allergenicFoodsId} />
    </VStack>
  );
};
