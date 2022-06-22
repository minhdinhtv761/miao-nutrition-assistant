import { HStack, Heading, Text, VStack } from "native-base";
import { boxStyle, space } from "../../styles/layout";

import Colors from "../../styles/colors";
import { Pressable } from "react-native";
import React from "react";
import { Subtitle } from "../general/typography/Subtitle";
import { push } from "../../utils/RootNavigation";

export const CurrentGoal = () => {
  return (
    <Pressable onPress={() => push("GoalCreatingScreen")}>
      <VStack {...boxStyle} space={space.s}>
        <Text> Mục tiêu hiện tại</Text>
        <HStack alignItems="center" justifyContent="space-between">
          <Heading color={Colors.fatColor}>Giảm mỡ chậm</Heading>
          <Subtitle text="0.5 kg/tuần" />
        </HStack>
      </VStack>
    </Pressable>
  );
};
