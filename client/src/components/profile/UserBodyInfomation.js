import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { HStack, Heading, Icon, Text, VStack } from "native-base";
import { boxStyle, space } from "../../styles/layout";

import Colors from "../../styles/colors";
import React from "react";

const Element = ({ title, value, icon }) => (
  <VStack {...boxStyle} space={space.s} flex={1}>
    <HStack space={1} alignItems="center">
      <Icon size="xs" color={Colors.primary} as={icon.as} name={icon.name} />
      <Text>{title}</Text>
    </HStack>
    <Heading size="md">{value}</Heading>
  </VStack>
);
export const UserBodyInfomation = ({ user }) => {
  const { BMI, TDEE } = user;
  return (
    <HStack justifyContent="space-between" space={space.m}>
      <Element
        title="TDEE"
        value={TDEE}
        icon={{ as: MaterialCommunityIcons, name: "calculator-variant" }}
      />
      <Element
        title="BMI"
        value={BMI}
        icon={{ as: Ionicons, name: "speedometer" }}
      />
    </HStack>
  );
};
