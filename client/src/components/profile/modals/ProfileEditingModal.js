import { hideProfileEditingModal, updateUser } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import { BottomActionSheet } from "./../../general/actionsheet/BottomActionSheet";
import { Button } from "native-base";
import { ProfileEditingModalState$ } from "../../../redux/selectors";
import React from "react";
import moment from "moment";

export const ProfileEditingModal = ({ userTemp, setUser }) => {
  const { isShow, component, title } = useSelector(ProfileEditingModalState$);
  const dispatch = useDispatch();

  const handleOnSubmit = React.useCallback(() => {
    setUser(userTemp);
    handleOnClose();
  }, [dispatch, userTemp]);

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
