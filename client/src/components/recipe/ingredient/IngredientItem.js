import { HStack, Icon, Text, VStack } from "native-base";

import { AntDesign } from "@expo/vector-icons";
import Colors from "../../../styles/colors";
import { CustomDivider } from "../../general/divider/CustomDivider";
import React from "react";

export const IngredientItem = (props) => {
  return (
    <VStack width="100%">
      <HStack width="100%" justifyContent="space-between" alignItems="center">
        <Text>{props.name}</Text>
        <HStack>
          <Text>
            {props.weight}
            {props.unit}
          </Text>
          {props.editted ? (
            <Icon
              as={<AntDesign name="close" />}
              color={Colors.textLight}
              size="sm"
              ml={2}
            />
          ) : null}
        </HStack>
      </HStack>
      <CustomDivider />
    </VStack>
  );
};
