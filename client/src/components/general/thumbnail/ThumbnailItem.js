import { MaterialIcons } from "@expo/vector-icons";
import {
  AspectRatio, Box, Image, Progress, Text, VStack
} from "native-base";
import React from "react";
import Colors from "../../../styles/colors";
import { IconAndText } from "../typography/IconAndText";

export const ThumbnailItem = ({ image, name, time, kcal }) => {
  return (
    <Box mb="4">
      <Box>
        <AspectRatio w="100%" ratio={1 / 1}>
          <Image
            borderRadius="sm"
            source={{
              uri: image,
            }}
            alt="image"
          />
        </AspectRatio>
      </Box>
      <VStack pt="1" space={1}>
        <Text fontSize="md" fontWeight="medium">
          {name}
        </Text>
        <Progress
          // display="none"
          size="sm"
          value={40}
          bg={Colors.backgroundProgress}
          _filledTrack={{
            bg: Colors.fatColor,
          }}
        />
        <IconAndText
          icon={<MaterialIcons name="history-toggle-off" />}
          iconColor= {Colors.fatColor}
          title={time + " ngày"}
          titleColor= {Colors.fatColor}
        />
         <IconAndText
          icon={<MaterialIcons name="local-fire-department" />}
          title={kcal + " kcal/ngày"}
        />
      </VStack>
    </Box>
  );
};
