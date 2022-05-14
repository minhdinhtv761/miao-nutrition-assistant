import { HStack, Icon, Text, VStack } from "native-base";

import { AntDesign } from "@expo/vector-icons";
import Colors from "../../../styles/colors";
import { CustomDivider } from "../../general/divider/CustomDivider";
import { IngredientItem } from "./IngredientItem";
import React from "react";

const IngredientList = (props) => {
  return (
    <VStack width="100%">
      <HStack justifyContent="space-between" width="100%">
        <Text fontWeight="bold" fontSize="md">Nguyên liệu</Text>
        <Text color={Colors.textLight}>4 khẩu phần</Text>
      </HStack>
      <CustomDivider />
      {props.ingredients.map((value, index) => (
        <IngredientItem
          key={index}
          name={value.name}
          weight={value.weight}
          unit={value.unit}
          editted={props.editted}
        />
      ))}
      {props.editted ? (
        <HStack justifyContent="space-between" width="100%">
          <Text color={Colors.primary}>Thêm mới nguyên liệu</Text>
          <Icon
            as={<AntDesign name="pluscircleo" />}
            color={Colors.primary}
            size="sm"
            ml={2}
          />
        </HStack>
      ) : null}
    </VStack>
  );
};

export default IngredientList;
