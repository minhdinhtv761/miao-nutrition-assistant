import { HStack, Skeleton } from "native-base";

import React from "react";
import { WIDTH_OF_IMAGE } from "../../../constants/sizes";
import { space } from "../../../styles/layout";

export const SkeletonItem = () => {
  const widthImage = WIDTH_OF_IMAGE;
  return (
    <HStack space={space.m} alignItems="center">
      <Skeleton w={widthImage} h={widthImage} />
      <Skeleton.Text />
    </HStack>
  );
};
