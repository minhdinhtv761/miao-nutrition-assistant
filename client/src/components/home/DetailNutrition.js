import { Box, Center, HStack, Progress, Text, VStack } from "native-base";
import Colors, { NutrtionColors } from "./../../styles/colors";

import { NutritionLable } from "../../constants/enums";
import React from "react";
import { space } from "./../../styles/layout";

export const DetailNutrition = ({ style }) => {
  const Item = ({ type, value, maxValue }) => {
    var percent = Math.round((value / maxValue) * 100);
    return (
      <VStack w="25%" alignItems="center" space={space.s}>
        <Text>{NutritionLable[type]}</Text>
        <Box w="100%">
          <Progress
            size="sm"
            bg={Colors.backgroundProgress}
            _filledTrack={{
              bg:
               NutrtionColors[type]
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
  return (
    <Box style={style} bg="white" borderRadius="xl">
      <Center h="100%" px={space.m}>
        <HStack justifyContent="space-between" alignItems="center" w="100%">
          <Item type="carbs" value={30} maxValue={100} />
          <Item type="fat" value={30} maxValue={100} />
          <Item type="protein" value={30} maxValue={100} />
        </HStack>
      </Center>
    </Box>
  );
};
