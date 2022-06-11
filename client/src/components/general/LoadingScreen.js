import { Center, Spinner } from "native-base";

import React from "react";

export const LoadingScreen = () => {
  return (
    <Center h="100%">
      <Spinner size="lg" />
    </Center>
  );
};
