import { Box, Divider, HStack, Heading, Icon, Text, VStack } from "native-base";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { boxStyle, space } from "../../styles/layout";

import Colors from "../../styles/colors";
import React from "react";

const listItems = [
  {
    title: "Giới tính",
    value: "Nữ",
    icon: { as: Ionicons, name: "person-outline" },
  },

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
    title: "Ngày sinh",
    value: "29/09/2001",
    icon: { as: MaterialCommunityIcons, name: "cake-variant-outline" },
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

export const HealthInfo = () => {
  return (
    <VStack {...boxStyle}>
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
  );
};
