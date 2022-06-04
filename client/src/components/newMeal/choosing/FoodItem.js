import { HStack, Image, Text } from "native-base";

import { ListItem } from "../../general/listItem/ListItem";
import { PlusButton } from "./../../general/buttons/iconButtons/PlusButton";
import React from "react";
import { getWidthImageOfList } from "../../../constants/sizes";
import { space } from "./../../../styles/layout";

export const FoodItem = ({
  title,
  subtitle,
  calo,
  onPress,
  iconStatus,
  onPressIcon,
  createNewFoodButton,
}) => {
  const widthImage = getWidthImageOfList();
  return (
    <ListItem
      image={
        !createNewFoodButton ? (
          <Image
            source={{
              uri: "https://wallpaperaccess.com/full/317501.jpg",
            }}
            h={widthImage}
            w={widthImage}
            borderRadius="sm"
            alt="description of image"
          />
        ) : null
      }
      title={title}
      subtitle={subtitle}
      onPress={onPress}
      isAddingButton={createNewFoodButton}
      rightChildren={
        !createNewFoodButton ? (
          <HStack space={space.m} alignItems="center">
            <Text fontSize="sm" color="black">
              {calo} kcal
            </Text>
            <PlusButton pressed={iconStatus} onPress={onPressIcon} />
          </HStack>
        ) : null
      }
    />
  );
};
