import { Box, Center, HStack, Progress, Text, VStack } from "native-base";

import React from "react";
import colors from "./../../styles/colors";
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
            bg="coolGray.100"
            _filledTrack={{
              bg:
                type === "Carbs"
                  ? colors.carbColor
                  : type === "Fat"
                  ? colors.fatColor
                  : colors.proteinColor,
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
