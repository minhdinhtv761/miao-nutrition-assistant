import { Box, Center, HStack, Heading } from "native-base";
import React, { Children, cloneElement, isValidElement } from "react";
import { getHeaderHeight, getTopBannerHeight } from "../../../constants/sizes";

import colors from "../../../styles/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default TopAppBar = (props) => {
  const { title, scrollA, backgroundColor, leftIcon, rightChildren } = props;
  const isFloating = !!scrollA;
  const [isScrolling, setScrolling] = React.useState(isFloating);
  const safeArea = useSafeAreaInsets();
  const heightAppBar = getHeaderHeight() + safeArea.top;

  React.useEffect(() => {
    if (!scrollA) {
      return;
    }
    const listenerId = scrollA.addListener((a) => {
      const topNaviOffset = getTopBannerHeight() - getHeaderHeight();
      isScrolling !== a.value < topNaviOffset && setScrolling(!isScrolling);
    });
    return () => scrollA.removeListener(listenerId);
  });

  const isChangingColor = !(
    backgroundColor === "primary.500" || backgroundColor === "white"
  );
  return (
    <Center 
    w="100%"
    >
      <HStack
        h={heightAppBar}
        px="4"
        // pt={safeArea.top}
        safeAreaTop
        bg={!isScrolling && isChangingColor ? "white" : backgroundColor}
        shadow="1"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
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
            return cloneElement(
              child,
              {
                ...child.props,
                color: colorContent(
                  isScrolling,
                  isChangingColor,
                  backgroundColor
                ),
                backgroundColor: "transparent",
              },
              null
            );
          })}
        </HStack>
      </HStack>
    </Center>
  );
};
const colorContent = (isScrolling, isChangingColor, backgroundColor) =>
  (!isScrolling && isChangingColor) || backgroundColor === "white"
    ? colors.black
    : "white";
