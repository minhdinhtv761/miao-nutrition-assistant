import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { Animated } from "react-native";
import { HEADER_HEIGHT } from "../../../constants/sizes";
import MainContentLayout from "./MainContentLayout";
import React from "react";
import { ScrollViewLayout } from "./ScrollViewLayout";
import TopAppBar from "../appbar/TopAppBar";
import { TurnBackButton } from "./../buttons/iconButtons/TurnBackButton";
import { View } from "native-base";

export const LayoutWithHeader = ({ topAppBar, children, backgroundColor }) => {
  const { title, rightChildren } = topAppBar;
  const safeArea = useSafeAreaInsets();
  const heightHeader = HEADER_HEIGHT + safeArea.top;
  
  const scrollA = React.useRef(new Animated.Value(0)).current;

  return (
    <View backgroundColor={backgroundColor || "white"} h="100%">
      <TopAppBar
        title={title}
        backgroundColor="white"
        leftIcon={<TurnBackButton />}
        rightChildren={rightChildren}
        scrollA={scrollA}
      />
      <View height={heightHeader} />
      <ScrollViewLayout scrollA={scrollA}>
        <MainContentLayout
          child={
            <>
              {children}
              <SafeAreaView />
            </>
          }
        />
      </ScrollViewLayout>
    </View>
  );
};
export default LayoutWithHeader;
