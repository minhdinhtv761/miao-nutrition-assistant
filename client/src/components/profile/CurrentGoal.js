import { Button, HStack, Heading, Icon, Text, VStack } from "native-base";
import { boxStyle, space } from "../../styles/layout";

import Colors from "../../styles/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import React from "react";
import { Subtitle } from "../general/typography/Subtitle";
import { push } from "../../utils/RootNavigation";
import { targetPerWeekLable } from "../../constants/enums";

export const CurrentGoal = ({ goal }) => {
  const type = Object.values(targetPerWeekLable).find(
    (item) => item.value === goal.weightPerWeek
  );
  return (
    <VStack {...boxStyle} space={space.s}>
      <HStack alignItems="center" justifyContent="space-between">
        <Text> Mục tiêu hiện tại</Text>
        {/* <Icon
          size="xs"
          as={MaterialCommunityIcons}
          color="primary.500"
          name="pencil"
          onPress={() => push("GoalCreatingScreen")}
        /> */}
        {/* <Button p={0} variant="ghost" onPress={() => push("GoalCreatingScreen")}>
          Thay đổi
        </Button> */}
        <Subtitle text={goal.weightPerWeek + " kg/tuần"} />
      </HStack>
      <HStack alignItems="center" justifyContent="space-between">
        <Heading color={Colors.fatColor}>{type.label}</Heading>
        <Button
          p={0}
          variant="ghost"
          onPress={() => push("GoalCreatingScreen")}
        >
          Thay đổi
        </Button>
      </HStack>
    </VStack>
  );
};
