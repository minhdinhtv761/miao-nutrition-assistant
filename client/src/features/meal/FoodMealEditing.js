import { Box, Image, View } from "native-base";
import { headerHeight, topBannerHeight } from "../../constants/sizes";

import React from "react";
import { StarButton } from "./../../components/general/buttons/iconButtons/StarButton";
import { TurnBackButton } from "./../../components/general/buttons/iconButtons/TurnBackButton";

export const FoodMealEditing = () => {
  const heightImage = topBannerHeight() + headerHeight();
  return (
    <View backgroundColor="white" h="100%">
      <TopAppBar
        backgroundColor="transparent"
        leftIcon={<TurnBackButton />}
        rightChildren={<StarButton />}
        scrollA={scrollA}
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        h={heightImage}
        w={heightImage}
        // style={{ position: "absolute", top: 0, left: 0 }}
        background="linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%)"
      >
        <Image
          source={{
            uri: "https://wallpaperaccess.com/full/317501.jpg",
          }}
        />
      </Box>
      {/* <MainContentLayout child={<Content />} /> */}
    </View>
  );
};
