import { Center, View } from "native-base";
import {
  SafeAreaFrameContext,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { Animated } from "react-native";
import { CustomTabView } from "./../tabView/CustomTabView";
import { HEADER_HEIGHT } from "./../../../constants/sizes";
import MainContentLayout from "./MainContentLayout";
import React from "react";
import SafeAreaView from "react-native-safe-area-view";
import { ScrollViewLayout } from "./ScrollViewLayout";
import SearchBar from "../input/SearchBar";
import TopAppBar from "./../appbar/TopAppBar";

// { key: index,
//     title: element.title,
//     tab: <TabItem children={element.tab} scrollA={scrollA} />}
const LayoutWithTabview = ({ topAppBar, tabList }) => {
  const safeArea = useSafeAreaInsets();
  const heightHeader = HEADER_HEIGHT + safeArea.top;
  const scrollA = React.useRef(new Animated.Value(0)).current;

  const scrollTabList = Array.from(tabList, (element) => {
    const newTab = () => (
      <ScrollViewLayout scrollA={scrollA}>{element.tab}</ScrollViewLayout>
    );
    return {
      title: element.title,
      tab: newTab,
    };
  });

  const { title, leftIcon, rightChildren } = topAppBar;

  const Content = (
    <View h="100%">
      <SearchBar />
      <CustomTabView tabList={scrollTabList} />
    </View>
  );

  return (
    <View backgroundColor="white" h="100%">
      <TopAppBar
        title={title}
        backgroundColor={topAppBar.backgroundColor}
        leftIcon={leftIcon}
        rightChildren={rightChildren}
        // scrollA={scrollA}
      />
      <View height={heightHeader} />
      <MainContentLayout child={Content} />
    </View>
  );
};

export default LayoutWithTabview;
