import { Box, Button, Center, VStack } from "native-base";

import CustomButton from "./CustomButton";
import React from "react";
import { space } from "../../../styles/layout";

const RadioButton = ({ list, value, setValue }) => {
  return (
    <Center w="100%">
      <Box safeArea w="100%">
        <VStack space={space.m}>
          {list.map((e) =>
            value === e.value ? (
              <CustomButton text={e.title} onPress={() => setValue(e.value)} />
            ) : (
              <CustomButton
                text={e.title}
                onPress={() => setValue(e.value)}
                colorScheme="muted"
              />
         
            )
          )}
        </VStack>
      </Box>
    </Center>
  );
};

export default RadioButton;
