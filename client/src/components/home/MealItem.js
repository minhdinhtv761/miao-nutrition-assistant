import { AntDesign } from "@expo/vector-icons";
import { CircleProgress } from "../general/progress/CircleProgress";
import { Icon } from "native-base";
import { ListItem } from "./../general/listItem/ListItem";
import React from "react";
import { WIDTH_OF_IMAGE } from "../../constants/sizes";

export const MealItem = ({
  title,
  subtitle,
  value = 0,
  maxValue = 1,
  onPress,
  addingNewMealButton,
}) => {
  const radiusCircle = WIDTH_OF_IMAGE / 2;
  return (
    <ListItem
      image={
        <CircleProgress
          value={value}
          maxValue={maxValue}
          radius={radiusCircle}
        />
      }
      title={title}
      subtitle={subtitle}
      onPress={onPress}
      isAddingButton={addingNewMealButton}
    />
  );
};
