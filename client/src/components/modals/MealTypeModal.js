import {
  Button,
  Radio
} from "native-base";

import { BottomActionSheet } from "./../general/actionsheet/BottomActionSheet";
import { MealTypes } from "../../constants/enums";
import React from "react";
import { space } from "./../../styles/layout";

export const GenderTypeModal = () => {
  const [value, setValue] = React.useState("breakfast");
  return (
    <BottomActionSheet
      header="Loại bữa ăn"
      isOpen={false}
      onClose={onClose}
      content={
        <Radio.Group
          name="myRadioGroup"
          accessibilityLabel="favorite number"
          value={value}
          onChange={(nextValue) => {
            setValue(nextValue);
          }}
        >
          {Object.keys(MealTypes).map((key) => (
            <Radio key={key} value={key} my={space.s}>
              {MealTypes[key]}
            </Radio>
          ))}
        </Radio.Group>
      }
      bottom={
        <Button variant="ghost" _text={{ fontSize: "md" }}>
          Hoàn tất
        </Button>
      }
    />
  );
};
