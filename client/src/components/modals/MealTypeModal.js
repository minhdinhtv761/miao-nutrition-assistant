import {
  Actionsheet,
  Box,
  Button,
  FormControl,
  HStack,
  Heading,
  Input,
  Modal,
  Radio,
  VStack,
} from "native-base";
import { useDispatch, useSelector } from "react-redux";

import { BottomActionSheet } from "./../general/actionsheet/BottomActionSheet";
import CustomButton from "./../general/buttons/CustomButton";
import { MealTypeModal$ } from "../../redux/selectors";
import { MealTypes } from "../../constants/enums";
import MenuTitle from "./../general/typography/MenuTitle";
import React from "react";
import { hideMealTypeModal } from "../../redux/actions";
import { space } from "./../../styles/layout";

export const MealTypeModal = () => {
  const modalVisible = useSelector(MealTypeModal$);
  const [value, setValue] = React.useState("breakfast");
  const dispatch = useDispatch();

  const onClose = React.useCallback(() => {
    dispatch(hideMealTypeModal());
  }, [dispatch]);

  return (
    <BottomActionSheet
      header="Loại bữa ăn"
      isOpen={modalVisible}
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
