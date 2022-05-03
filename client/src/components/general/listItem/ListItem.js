import {
  Box,
  Divider,
  HStack,
  Icon,
  IconButton,
  Pressable,
  View,
} from "native-base";
import React, { Children, cloneElement, isValidElement } from "react";

import { AntDesign } from "@expo/vector-icons";
import Colors from "./../../../styles/colors";
import TextOfList from "./../typography/TextOfList";
import { space } from "./../../../styles/layout";
import { widthImageOfList } from "../../../constants/sizes";

export const ListItem = ({
  image,
  onPress,
  title,
  subtitle,
  starIcon,
  rightChildren,
  isAddingButton,
}) => {
  return (
    <Pressable onPress={onPress}>
      <Box>
        <HStack w="100%" alignItems="center" justifyContent="space-between">
          <HStack space={space.m} alignItems="center">
            {image}

            <TextOfList
              title={title}
              subtile={subtitle}
              starIcon={starIcon}
              primaryColor={isAddingButton}
            />
          </HStack>
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
        {isAddingButton ? null : (
          <Divider
            my="2"
            _light={{
              bg: Colors.backgroundProgress,
            }}
          />
        )}
      </Box>
    </Pressable>
  );
};
