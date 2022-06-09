import { Box, Divider, HStack, Icon, Pressable } from "native-base";
import React, { Children, cloneElement, isValidElement } from "react";

import { AntDesign } from "@expo/vector-icons";
import Colors from "./../../../styles/colors";
import { CustomDivider } from "../divider/CustomDivider";
import TextOfList from "./../typography/TextOfList";
import { space } from "./../../../styles/layout";

export const ListItem = ({
  image,
  onPress,
  title,
  subtitle,
  rightChildren,
  isAddingButton,
}) => {
  return (
    <Box>
      <HStack w="100%" alignItems="center" justifyContent="space-between">
        <Pressable onPress={onPress} maxW="70%">
          <HStack space={space.m} alignItems="center">
            {image}

            <TextOfList
              title={title}
              subtile={subtitle}
              primaryColor={isAddingButton}
            />
          </HStack>
        </Pressable>
        {Children.map(rightChildren, (child) => {
          if (!isValidElement(child)) return null;
          return cloneElement(child, {
            ...child.props,
          });
        })}
        {isAddingButton ? (
          <Icon
            size="sm"
            as={AntDesign}
            name="pluscircleo"
            color="primary.500"
          />
        ) : null}
      </HStack>
      {isAddingButton ? null : <CustomDivider />}
    </Box>
  );
};
