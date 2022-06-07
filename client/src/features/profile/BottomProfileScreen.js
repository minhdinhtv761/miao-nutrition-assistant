import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Box, Divider, HStack, Heading, Icon, Text, VStack } from "native-base";

import Colors from "../../styles/colors";
import { FoodItem } from "../../components/newMeal/choosing/FoodItem";
import FoodList from "../../components/newMeal/choosing/FoodList";
import MenuTitle from "./../../components/general/typography/MenuTitle";
import React from "react";
import ShortNutritionFact from "./../../components/general/nutritionFact/ShortNutritionFact";
import { ShortNutritionTable } from "./../../components/general/nutritionFact/ShortNutritionTable";
import { Subtitle } from "./../../components/general/typography/Subtitle";
import { space } from "../../styles/layout";

const listItems = [
  {
    title: "Cân nặng",
    value: "45 kg",
    icon: { as: MaterialCommunityIcons, name: "scale-bathroom" },
  },
  {
    title: "Chiều cao",
    value: "154 cm",
    icon: { as: MaterialCommunityIcons, name: "human-male-height" },
  },
  {
    title: "TDEE",
    value: "1389",
    icon: { as: MaterialIcons, name: "speed" },
  },
  {
    title: "BMI",
    value: "19.4",
    icon: { as: AntDesign, name: "calculator" },
  },
];

const TextElement = ({ title, text, icon }) => {
  return (
    <HStack alignItems="center" justifyContent="space-between">
      <HStack space={space.s} alignItems="center">
        <Icon size="xs" color={Colors.primary} as={icon.as} name={icon.name} />
        <Text fontWeight="bold">{title}</Text>
      </HStack>
      <Text>{text}</Text>
    </HStack>
  );
};
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
      <VStack {...styles} space={space.s}>
        <Text> Mục tiêu hiện tại</Text>
        <HStack alignItems="center" justifyContent="space-between">
          <Heading color={Colors.fatColor}>Giảm mỡ chậm</Heading>
          <Subtitle text="0.5 kg/tuần" />
        </HStack>
      </VStack>
      <MenuTitle title="Sức khỏe" />
      <VStack {...styles}>
        {listItems.map((value, index) => (
          <>
            <TextElement
              key={index}
              title={value.title}
              text={value.value}
              icon={value.icon}
            />
            {index < listItems.length - 1 ? (
              <Divider
                my="2.5"
                _light={{
                  bg: Colors.backgroundProgress,
                }}
              />
            ) : null}
          </>
        ))}
      </VStack>
      <MenuTitle title="Dinh dưỡng" />
      <Box {...styles} p={0}>
        <ShortNutritionTable
          inProfile
          value={{ energy: 2000, carbohydrate: 250, fat: 44.4, protein: 150 }}
        />
      </Box>
      <MenuTitle title="Thực phẩm dị ứng" />
      <VStack {...styles}>
        {allergenicFoodsId.length
          ? allergenicFoodsId.map((value, index) => (
              <FoodItem
                key={index}
                id={value._id}
                title={value.foodName}
                subtitle={value.servingSizeWeight + value.servingSizeUnit}
                calo={value.energy}
                onPress={() => {
                  dispatch(passFoodData(value));
                  push("FoodMealEditingScreen");
                }}
              />
            ))
          : null}
      </VStack>
    </VStack>
  );
};

const styles = { width: "100%", borderRadius: "xl", bg: "white", p: space.m };
