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

import { CircleProgress } from "../general/circleProgress/CircleProgress";
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
      isAddingButton={addingNewMealButton}
    />
  );
};
