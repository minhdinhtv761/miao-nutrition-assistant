import { Box, Center, HStack, Progress, Text, VStack } from "native-base";
import Colors, { NutrtionColors } from "./../../styles/colors";

import { NutritionLabel } from "../../constants/enums";
import React from "react";
import { space } from "./../../styles/layout";

export const DetailNutrition = ({ style, value }) => {
  const Item = ({ type, value, maxValue }) => {
    var percent = Math.round((value / maxValue) * 100);
    return (
      <VStack w="25%" alignItems="center" space={space.s}>
        <Text>{NutritionLabel[type]}</Text>
        <Box w="100%">
          <Progress
            size="sm"
            bg={Colors.backgroundProgress}
            _filledTrack={{
              bg: NutrtionColors[type],
            }}
            value={percent}
          />
        </Box>
        <Text>
          {value}/{maxValue}
        </Text>
      </VStack>
    );
  };
  const { goal, current } = value;
  return (
    <Box style={style} bg="white" borderRadius="xl">
      <Center h="100%" px={space.m}>
        <HStack justifyContent="space-between" alignItems="center" w="100%">
          <Item
            type="carbohydrate"
            value={current.carbohydrate}
            maxValue={goal.targetCarbohydrate}
          />
          <Item type="fat" value={current.fat} maxValue={goal.targetFat} />
          <Item
            type="protein"
            value={current.protein}
            maxValue={goal.targetProtein}
          />
        </HStack>
      </Center>
    </Box>
  );
};
