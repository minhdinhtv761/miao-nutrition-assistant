import { Box, Button, View } from "native-base";

import React from "react";
import SafeAreaView from "react-native-safe-area-view";
import { space } from "../../../styles/layout";

const BottomButton = ({ text, onPress }) => {
  return (
    <View marginX={space.m}>
      <Button
        position="absolute"
        bottom={4}
        width="100%"
        size="lg"
        rounded="full"
        onPress={onPress}
      >
        {text}
      </Button>
    </View>
  );
};

export default BottomButton;
