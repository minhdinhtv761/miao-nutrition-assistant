import { Heading, VStack } from "native-base";

import React from "react";
import colors from "./../../styles/colors";
import { space } from "./../../styles/layout";

const AuthHeading = ({ h1, h2, h1Color }) => {
  return (
    <VStack space={space.s}>
      <Heading
        size="2xl"
        // fontWeight="medium"
        color={!h1Color ? colors.primary : null}
      >
        {h1}
      </Heading>
      <Heading size="xs" fontWeight="medium" color="muted.500">
        {h2}
      </Heading>
    </VStack>
  );
};

export default AuthHeading;
