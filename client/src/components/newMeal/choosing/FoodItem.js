import { HStack, Image, Text } from "native-base";

import { ListItem } from "../../general/listItem/ListItem";
import { PlusButton } from "../../general/buttons/iconButtons/PlusButton";
import React from "react";
import { space } from "./../../../styles/layout";
import { widthImageOfList } from "../../../constants/sizes";

export const FoodItem = ({
  title,
  subtitle,
  isFavourite,
  calo,
  onPress,
  createNewFoodButton,
}) => {
  const widthImage = widthImageOfList();
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
          />
        ) : null
      }
      title={title}
      subtitle={subtitle}
      starIcon={isFavourite}
      onPress={onPress}
      isAddingButton={createNewFoodButton}
      rightChildren={
        !createNewFoodButton ? (
          <HStack space={space.m} alignItems="center">
            <Text fontSize="sm" color="black">
              {calo} kcal
            </Text>
            <PlusButton />
          </HStack>
        ) : null
      }
    />
  );
};
