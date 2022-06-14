import { Input, InputGroup, InputRightAddon, Stack } from "native-base";

import React from "react";
import { space } from "../../../styles/layout";

export const WeightHeightModalBody = ({ user, setUser, unit }) => {
  const [text, setText] = React.useState(
    unit === "kg" ? user.weight : user.height
  );

  const handleOnTextChange = (text) => {
    setText(text);
  };
  const handleOnDone = () => {
    if (unit === "kg") {
      setUser({ ...user, weight: Number(text) });
    } else {
      setUser({ ...user, height: Number(text) });
    }
  };
  return (
    <Stack alignItems="center" py={space.m}>
      <InputGroup borderRadius="full">
        <Input
          w={{
            base: "70%",
            md: "100%",
          }}
          px={space.m}
          fontSize={14}
          borderRadius="full"
          keyboardType="numeric"
          value={text.toString()}
          onChangeText={handleOnTextChange}
          onSubmitEditing={handleOnDone}
          placeholder={unit === "kg" ? "Cân nặng" : "Chiều cao"}
        />
        <InputRightAddon
          children={unit}
          bgColor="primary.500"
          px={space.l}
          fontSize={14}
          borderRightRadius="full"
          _text={{ color: "white" }}
        />
      </InputGroup>
    </Stack>
  );
};
