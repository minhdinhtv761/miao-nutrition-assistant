import { Box, Center, HStack, Heading, View, useSafeArea } from "native-base";
import { headerHeight, topBannerHeight } from "../../../constants/sizes";

import Icon from "react-native-vector-icons/MaterialIcons";
import React from "react";
import colors from "../../../styles/colors";

export default TopAppBar = (props) => {
  const { scrollA, backgroundColor, leftChildren } = props;
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

  function isChangingColor() {
    if (backgroundColor === "primary.500") return false;
    if (backgroundColor === "white") return false;
    return true;
  }

  return (
    <Center w="100%">
      <Box safeArea />
      <HStack
        h={headerHeight()}
        px="2"
        bg={!isScrolling && isChangingColor() ? "white" : backgroundColor}
        shadow={isScrolling ? "none" : "1"}
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        <Icon.Button
          name="menu"
          color={colorContent(isScrolling, isChangingColor, backgroundColor)}
          backgroundColor="transparent"
        />
        <Heading
          color={colorContent(isScrolling, isChangingColor, backgroundColor)}
          size="md"
        >
          Home
        </Heading>
        <View
          color={colorContent(isScrolling, isChangingColor, backgroundColor)}
        >
      {/* {leftChildren} */}
          <Icon.Button
            name="calendar-today"
            // color={...styles}
            backgroundColor="transparent"
          />
        </View>
      </HStack>
    </Center>
  );
};

const colorContent = (isScrolling, isChangingColor, backgroundColor) =>
  (!isScrolling && isChangingColor()) || backgroundColor === "white"
    ? colors.black
    : "white";
