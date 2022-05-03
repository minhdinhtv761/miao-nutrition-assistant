import { AntDesign } from "@expo/vector-icons";
import { CircleProgress } from "../general/circleProgress/CircleProgress";
import { Icon } from "native-base";
import { ListItem } from "./../general/listItem/ListItem";
import React from "react";
import { widthImageOfList } from "../../constants/sizes";

export const MealItem = ({
  title,
  subtitle,
  value = 0,
  maxValue = 1,
  onPress,
  addingNewMealButton,
}) => {
  const radiusCircle = widthImageOfList() / 2;
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
      rightChildren={
        addingNewMealButton ? (
          <Icon
            size="sm"
            as={AntDesign}
            name="pluscircleo"
            color="primary.500"
          />
        ) : null
      }
    />
  );
};
