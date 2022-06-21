import { Avatar, Box, Center, Circle, HStack, Text, View } from "native-base";
import {
  HEADER_HEIGHT,
  SUBBOX_HEIGHT,
  TOP_BANNER_HEIGHT,
  WIDTH_OF_IMAGE,
  WINDOW_WIDTH,
} from "./../../../constants/sizes";

import Colors from "./../../../styles/colors";
import { Subtitle } from "../../../components/general/typography/Subtitle";
import { space } from "../../../styles/layout";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const TopProfileEdittingScreen = ({ name }) => {
  const safeArea = useSafeAreaInsets();
  var heightHeader = HEADER_HEIGHT + safeArea.top;
  var heightAvatar = TOP_BANNER_HEIGHT / 1.5;
  const heightImage = TOP_BANNER_HEIGHT + HEADER_HEIGHT + safeArea.top;

  return (
    <View height={heightImage}>
      <Box
        style={{
          backgroundColor: Colors.primary,
          height: TOP_BANNER_HEIGHT,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: heightImage/2,
          left: space.m * 4,
        }}
      >
        <Avatar
          width={heightAvatar}
          height={heightAvatar}
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        />
      </View>
    </View>
  );
};
