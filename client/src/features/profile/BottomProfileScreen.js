import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Box, Divider, HStack, Heading, Icon, Text, VStack } from "native-base";

import Colors from "../../styles/colors";
import MenuTitle from "./../../components/general/typography/MenuTitle";
import React from "react";
import ShortNutritionFact from "./../../components/general/nutritionFact/ShortNutritionFact";
import { ShortNutritionTable } from "./../../components/general/nutritionFact/ShortNutritionTable";
import { Subtitle } from "./../../components/general/typography/Subtitle";
import { space } from "../../styles/layout";

{
  /* <MaterialCommunityIcons name="human-male-height" size={24} color="black" /> */
}
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
  return (
    <VStack space={space.m}>
      <VStack {...styles} space={space.s}>
        <Text> Mục tiêu hiện tại</Text>
        <HStack alignItems="center" justifyContent="space-between">
          <Heading color={Colors.fatColor}>Giảm mỡ chậm</Heading>
          <Subtitle text="0.5 kg/tuần" />
        </HStack>
      </VStack>
      <MenuTitle title="Sức khỏe" action="Chi tiết" onPressAction={() => {}} />
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
      <MenuTitle
        title="Dinh dưỡng"
        action="Chi tiết"
        onPressAction={() => {}}
      />
      <Box {...styles} p={0}>
        <ShortNutritionTable inProfile />
      </Box>
    </VStack>
  );
};

const styles = { width: "100%", borderRadius: "xl", bg: "white", p: space.m };
