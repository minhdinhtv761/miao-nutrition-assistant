import * as RootNavigation from "../../../utils/RootNavigation";

import { useDispatch, useSelector } from "react-redux";

import BottomButton from "./../../../components/general/buttons/BottomButton";
import { BottomProfileEdittingScreen } from "./BottomProfileEdittingScreen";
import { Button } from "native-base";
import Colors from "./../../../styles/colors";
import LayoutWithImage from "../../../components/general/layout/LayoutWithImage";
import { LoadingScreen } from "../../../components/general/LoadingScreen";
import React from "react";
import { TopProfileEdittingScreen } from "./TopProfileEdittingScreen";
import { TurnBackButton } from "./../../../components/general/buttons/iconButtons/TurnBackButton";
import { UserState$ } from "../../../redux/selectors";

const ProfileEdittingScreen = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector(UserState$);
  const [user, setUser] = React.useState(data);
  console.log("user", user);
  const handleOnCancelEditing = React.useCallback(() => {
    RootNavigation.pop();
  }, [dispatch]);

  const handleOnSubmitEditing = React.useCallback(() => {
    RootNavigation.pop();
    // dispatch(updateUser.updateUserRequest(user));
  }, [dispatch, user]);

  const topAppBar = {
    title: "Chỉnh sửa Cá nhân",
    backgroundColor: "white",
    leftIcon: <TurnBackButton goBackAction={handleOnCancelEditing} />,
    rightChildren: (
      <Button variant="solid" onPress={handleOnCancelEditing}>
        Hủy
      </Button>
    ),
  };

  return !isLoading ? (
    <>
      <LayoutWithImage
        topAppBar={topAppBar}
        // uriImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        aboveChildren={<TopProfileEdittingScreen name={data.username} />}
        children={<BottomProfileEdittingScreen user={user} setUser={setUser} />}
        backgroundColor={Colors.background}
      />
      <BottomButton text="Hoàn tất" onPress={handleOnSubmitEditing} />
    </>
  ) : (
    <LoadingScreen />
  );
};

export default ProfileEdittingScreen;
