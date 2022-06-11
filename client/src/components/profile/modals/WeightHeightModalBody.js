import { Input, InputGroup, InputRightAddon, Stack } from "native-base";

import React from "react";
import { getLastestElement } from "./../../../utils/DataFunctions";
import { space } from "../../../styles/layout";

export const WeightHeightModalBody = ({ user, setUser, unit }) => {
  const lastBodyComposition = getLastestElement(user.bodyComposition);
  const [text, setText] = React.useState(
    unit === "kg" ? lastBodyComposition.weight : lastBodyComposition.height
  );

  const handleOnTextChange = (text) => {
    setText(text);
  };
  const handleOnDone = () => {
    let newResult = { ...lastBodyComposition, recordDate: new Date() };
    if (unit === "kg") {
      newResult.weight = Number(text);
    } else {
      newResult.height = Number(text);
    }
    let newBodyComposition = [...user.bodyComposition];
    newBodyComposition.push(newResult);
    setUser({ ...user, bodyComposition: newBodyComposition });
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
