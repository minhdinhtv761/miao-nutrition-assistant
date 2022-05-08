import React from "react";
import {
  Icon,
  Center,
  Text,
  View,
} from "native-base";

export const ItemOfBottomBar = ({
  focused,
  icon,
  title,
}) => {
  return (
    <View
      style={{
        top: 10,
        opacity: focused ? 1 : 0.5,
      }}
    >
      <Center>
        <Icon mb="1" as={icon} color="black" size="sm" />

        <Text color="black" fontSize="12">
          {title}
        </Text>
      </Center>
    </View>
  );
};
