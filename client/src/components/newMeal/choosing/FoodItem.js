import { HStack, Image, Text } from "native-base";

import { ListItem } from "../../general/listItem/ListItem";
import { PlusButton } from "./../../general/buttons/iconButtons/PlusButton";
import React from "react";
import { WIDTH_OF_IMAGE } from "../../../constants/sizes";
import { space } from "./../../../styles/layout";

export const FoodItem = ({
  title,
  subtitle,
  image,
  calo,
  onPress,
  iconStatus,
  onPressIcon,
  createNewFoodButton,
}) => {
  const widthImage = WIDTH_OF_IMAGE;
  return (
    <ListItem
      image={
        !createNewFoodButton ? (
          <Image
            source={{
              uri: image,
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
            {onPressIcon ? (
              <PlusButton pressed={iconStatus} onPress={onPressIcon} />
            ) : null}
          </HStack>
        ) : null
      }
    />
  );
};
