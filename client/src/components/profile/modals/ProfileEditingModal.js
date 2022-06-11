import { hideProfileEditingModal, updateUser } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import { BottomActionSheet } from "./../../general/actionsheet/BottomActionSheet";
import { Button } from "native-base";
import { ProfileEditingModalState$ } from "../../../redux/selectors";
import React from "react";
import moment from "moment";

export const ProfileEditingModal = ({ data }) => {
  const { isShow, component, title } = useSelector(ProfileEditingModalState$);
  const dispatch = useDispatch();

  const handleOnSubmit = React.useCallback(() => {
    let userData = { ...data };
    delete userData.weight;
    delete userData.height;
    delete userData._id;
    delete userData.accountId;
    // userData.birthday=userData.birthday.toLocaleDateString();
    userData.goal._id = userData.goal._id.$oid;
    console.log(userData);
    dispatch(
      updateUser.updateUserRequest({ userID: data._id.$oid, user: userData })
    );
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