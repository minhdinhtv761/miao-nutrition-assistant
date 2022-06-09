import { HEADER_HEIGHT, TOP_BANNER_HEIGHT } from "../../../constants/sizes";
import { HStack, Heading } from "native-base";
import React, { Children, cloneElement, isValidElement } from "react";

import colors from "../../../styles/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default TopAppBar = (props) => {
  const { title, scrollA, backgroundColor, leftIcon, rightChildren } = props;
  const isFloating = !!scrollA;
  const [isScrolling, setScrolling] = React.useState(isFloating);
  const safeArea = useSafeAreaInsets();
  const heightAppBar = HEADER_HEIGHT + safeArea.top;

  React.useEffect(() => {
    if (!scrollA) {
      return;
    }
    const listenerId = scrollA.addListener((a) => {
      const topNaviOffset =
        TOP_BANNER_HEIGHT - HEADER_HEIGHT - safeArea.top;
      isScrolling !== a.value < topNaviOffset && setScrolling(!isScrolling);
    });
    return () => scrollA.removeListener(listenerId);
  });

  const isChangingColor = !(
    backgroundColor === "primary.500" || backgroundColor === "white"
  );
  return (
    <HStack
      safeAreaTop
      height={heightAppBar}
      width="100%"
      px="4"
      position="absolute"
      zIndex={1000}
      bg={!isScrolling && isChangingColor ? "white" : backgroundColor}
      shadow={!isScrolling ? "1" : "none"}
      justifyContent="space-between"
      alignItems="center"
    >
      {Children.map(leftIcon, (child) => {
        if (!isValidElement(child)) return null;
        return cloneElement(child, {
          ...child.props,
          color: colorContent(isScrolling, isChangingColor, backgroundColor),
          backgroundColor: "transparent",
        });
      })}
      <Heading
        size="md"
        color={colorContent(isScrolling, isChangingColor, backgroundColor)}
      >
        {title}
      </Heading>
      <HStack>
        {Children.map(rightChildren, (child) => {
          if (!isValidElement(child)) return null;
          return cloneElement(child, {...child.props,
            color: colorContent(isScrolling, isChangingColor, backgroundColor),
            backgroundColor: "transparent",
          });
        })}
      </HStack>
    </HStack>
  );
};
const colorContent = (isScrolling, isChangingColor, backgroundColor) =>
  (!isScrolling && isChangingColor) || backgroundColor === "white"
    ? colors.black
    : "white";
