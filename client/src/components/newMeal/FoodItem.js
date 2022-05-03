// import { Box, Divider, Flex, HStack, VStack } from "native-base";

// import { CircleProgress } from "../general/circleProgress/CircleProgress";
// import Colors from "../../styles/colors";
// import { Dimensions } from "react-native";
// import Icon from "react-native-vector-icons/MaterialIcons";
// import React from "react";
// import TextOfList from "../general/typography/TextOfList";
// import { space } from "./../../styles/layout";
// import { widthImageOfList } from "../../constants/sizes";

// export const MealItem = ({
//   title = "Thêm món mới",
//   value = 0,
//   maxValue = 1,
//   subtitle,
// }) => {
//   const widthCircle = widthImageOfList();
//   const isCreateNew = title === "Thêm món mới";

//   return (
//     <Box>
//       <HStack w="100%" alignItems="center" justifyContent="space-between">
//         <HStack space={space.m} alignItems="center">
//           <CircleProgress
//             value={value}
//             maxValue={maxValue}
//             radius={widthCircle / 2}
//           />
//           <TextOfList
//             title={title}
//             subtile={subtitle}
//             primaryColor={isCreateNew}
//           />
//         </HStack>
//         {isCreateNew ? (
//           <Icon.Button
//             name="control-point"
//             color={Colors.primary}
//             backgroundColor="transparent"
//           />
//         ) : null}
//       </HStack>
//       {isCreateNew ? null : (
//         <Divider
//           my="2"
//           _light={{
//             bg: Colors.backgroundProgress,
//           }}

//         />
//       )}
//     </Box>
//   );
// };

import { Image, Text } from "native-base";

import Colors from "./../../styles/colors";
import { ListItem } from "./../general/listItem/ListItem";
import React from "react";
import { widthImageOfList } from "../../constants/sizes";

export const FoodItem = ({
  title,
  subtitle,
  isFavourite,
  calo,
  onPress,
  addingNewFoodButton,
}) => {
  const widthImage = widthImageOfList();
  return (
    <ListItem
      image={
        !addingNewFoodButton ? (
          <Image
            source={{
              uri: "https://wallpaperaccess.com/full/317501.jpg",
            }}
            h={widthImage}
            w={widthImage}
          />
        ) : null
      }
      title={title}
      subtitle={subtitle}
      starIcon={isFavourite}
      onPress={onPress}
      rightChildren={
        !addingNewFoodButton ? (
          <Text fontSize="sm" color={Colors.black}>
            {calo} kcal
          </Text>
        ) : null
      }
      isAddingButton={addingNewFoodButton}
    />
  );
};
