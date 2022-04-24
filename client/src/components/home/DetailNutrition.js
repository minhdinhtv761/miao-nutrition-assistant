import { Box, Center, HStack, Progress, Text, VStack } from "native-base";

import Colors from "./../../styles/colors";
import React from "react";
import { space } from "./../../styles/layout";

export const DetailNutrition = ({ style }) => {
  const Item = ({ type, value, maxValue }) => {
    var percent = Math.round((value / maxValue) * 100);
    return (
      <VStack w="25%" alignItems="center" space={space.s}>
        <Text>{type}</Text>
        <Box w="100%">
          <Progress
            size="sm"
            bg={Colors.backgroundProgress}
            _filledTrack={{
              bg:
                type === "Carbs"
                  ? Colors.carbColor
                  : type === "Fat"
                  ? Colors.fatColor
                  : Colors.proteinColor,
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
    <Box style={style} bg="white" borderRadius="md">
      <Center h="100%" px={space.m}>
        <HStack justifyContent="space-between" alignItems="center" w="100%">
          <Item type="Carbs" value={30} maxValue={100} />
          <Item type="Fat" value={30} maxValue={100} />
          <Item type="Protein" value={30} maxValue={100} />
        </HStack>
      </Center>
    </Box>
  );
};
