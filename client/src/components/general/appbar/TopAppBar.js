import { Box, Center, HStack, Heading } from "native-base";
import React, { Children, cloneElement, isValidElement } from "react";
import { headerHeight, topBannerHeight } from "../../../constants/sizes";

import colors from "../../../styles/colors";

export default TopAppBar = (props) => {
  const { title, scrollA, backgroundColor, leftIcon, rightChildren } = props;
  const isFloating = !!scrollA;
  const [isScrolling, setScrolling] = React.useState(isFloating);

  React.useEffect(() => {
    if (!scrollA) {
      return;
    }
    const listenerId = scrollA.addListener((a) => {
      const topNaviOffset = topBannerHeight() - headerHeight();
      isScrolling !== a.value < topNaviOffset && setScrolling(!isScrolling);
    });
    return () => scrollA.removeListener(listenerId);
  });

  const isChangingColor = !(
    backgroundColor === "primary.500" || backgroundColor === "white"
  );
  return (
    <Center w="100%">
      <Box safeArea />
      <HStack
        h={headerHeight()}
        px="4"
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
            return cloneElement(child, {
              ...child.props,
              color: colorContent(
                isScrolling,
                isChangingColor,
                backgroundColor
              ),
              backgroundColor: "transparent",
            });
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
