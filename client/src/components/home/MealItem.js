import { Box, Flex, HStack, VStack, View } from "native-base";
import { space, widthImageOfList } from "./../../styles/layout";

import { CircleProgress } from "../general/circleProgress/CircleProgress";
import Colors from "../../styles/colors";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import React from "react";
import TextOfList from "../general/typography/TextOfList";

export const MealItem = ({
  title = "Thêm món mới",
  percentage = 0,
  subtitle,
}) => {
  const widthCircle = widthImageOfList();
  const isCreateNew = title === "Thêm món mới";

  // const MealItem = () => (
  //   <HStack background="white" space={space.m} alignItems="center">
  //     <CircleProgress percentage={percentage} radius={widthCircle / 2} />
  //     <TextOfList title={title} subtile={subtitle} />
  //   </HStack>
  // );

  // const CreateNewItem = () => (
  //   <HStack
  //     w="100%"
  //     background="white"
  //     alignItems="center"
  //     justifyContent="space-between"
  //   >
  //     <HStack space={space.m} alignItems="center">
  //       <CircleProgress percentage={0} radius={widthCircle / 2} />
  //       <TextOfList
  //         title="Thêm bữa ăn"
  //         subtile="Chuối, Bơ,..."
  //         titleColor={true}
  //       />
  //     </HStack>
  //     <Icon.Button
  //       name="control-point"
  //       color={Colors.primary}
  //       backgroundColor="transparent"
  //     />
  //   </HStack>
  // );

  return (
    <HStack
      w="100%"
      background="white"
      alignItems="center"
      justifyContent="space-between"
    >
      <HStack space={space.m} alignItems="center">
        <CircleProgress percentage={percentage} radius={widthCircle / 2} />
        <TextOfList
          title={title}
          subtile={subtitle}
          titleColor={isCreateNew}
        />
      </HStack>
      {isCreateNew ? (
        <Icon.Button
          name="control-point"
          color={Colors.primary}
          backgroundColor="transparent"
        />
      ) : null}
    </HStack>
  );
};
