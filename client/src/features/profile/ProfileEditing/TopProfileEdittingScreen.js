import {
  Avatar,
  Box,
  Center,
  Circle,
  HStack,
  Icon,
  Image,
  Text,
  View,
} from "native-base";
import {
  HEADER_HEIGHT,
  SUBBOX_HEIGHT,
  TOP_BANNER_HEIGHT,
  WIDTH_OF_IMAGE,
  WINDOW_WIDTH,
} from "./../../../constants/sizes";

import Colors from "./../../../styles/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Subtitle } from "../../../components/general/typography/Subtitle";
import { space } from "../../../styles/layout";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const TopProfileEdittingScreen = ({ name }) => {
  const safeArea = useSafeAreaInsets();
  var heightAvatar = TOP_BANNER_HEIGHT / 1.5;
  const heightImage = TOP_BANNER_HEIGHT;
  const heightView = heightImage + HEADER_HEIGHT 

  return (
    <View height={heightView}>
      <Image
        height={heightImage}
        source={{
          uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        }}
        alt="image"
        opacity={40}
        style={{ resizeMode: "cover" }}
      />
      {/* <Box
        style={{
          backgroundColor: Colors.primary,
          height: TOP_BANNER_HEIGHT,
        }}
      /> */}
      <View
        style={{
          position: "absolute",
          top: heightImage - heightAvatar / 2,
          left: WINDOW_WIDTH / 2 - heightAvatar / 2,
        }}
      >
        <Avatar
          size={heightAvatar}
          borderWidth={3}
          borderColor="white"
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        />
      </View>
    </View>
  );
};
