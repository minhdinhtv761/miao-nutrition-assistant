import React, { Children, cloneElement, isValidElement } from "react";

import { Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const ScrollViewLayout = (props) => {
  return (
    <Animated.ScrollView
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: props.scrollA } } }],
        { useNativeDriver: true }
      )}
      scrollEventThrottle={16}
    >
      {Children.map(props.children, (child) => {
        if (!isValidElement(child)) return null;
        return cloneElement(child, child.props, null);
      })}
      <SafeAreaView />
    </Animated.ScrollView>
  );
};
