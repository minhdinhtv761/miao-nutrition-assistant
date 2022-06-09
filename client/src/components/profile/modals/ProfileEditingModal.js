import { useDispatch, useSelector } from "react-redux";

import { BottomActionSheet } from "./../../general/actionsheet/BottomActionSheet";
import { Button } from "native-base";
import { ProfileEditingModalState$ } from "../../../redux/selectors";
import React from "react";
import { hideProfileEditingModal } from "../../../redux/actions";

export const ProfileEditingModal = ({ data }) => {
  const { isShow, component, title } = useSelector(ProfileEditingModalState$);
  const dispatch = useDispatch();

  const handleOnSubmit = React.useCallback(() => {
    handleOnClose();
  }, [dispatch]);

  const handleOnClose = React.useCallback(() =>
    dispatch(hideProfileEditingModal())
  );

  return title === "Ngày sinh" ? (
    component
  ) : (
    <BottomActionSheet
      header={title}
      isOpen={isShow}
      onClose={handleOnClose}
      content={component}
      bottom={
        <Button
          variant="ghost"
          _text={{ fontSize: "md" }}
          onPress={handleOnSubmit}
        >
          Hoàn tất
        </Button>
      }
    />
  );
};
