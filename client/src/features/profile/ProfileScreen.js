import { Button, Icon } from "native-base";
import { EdittingUserState$, UserState$ } from "../../redux/selectors";
import {
  hideEdittingUser,
  showEdittingUser
} from "./../../redux/actions/edittingUserActions";
import { useDispatch, useSelector } from "react-redux";

import BottomButton from "./../../components/general/buttons/BottomButton";
import { BottomProfileScreen } from "./BottomProfileScreen";
import Colors from "./../../styles/colors";
import LayoutWithImage from "../../components/general/layout/LayoutWithImage";
import { LoadingScreen } from "../../components/general/LoadingScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { TopProfileScreen } from "./TopProfileScreen";
import { updateUser } from "../../redux/actions";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const isEditting = useSelector(EdittingUserState$);
  const { data, isLoading } = useSelector(UserState$);
  const [user, setUser] = React.useState(data);

  const handleOnCancelEditing = React.useCallback(() => {
    dispatch(hideEdittingUser());
  }, [dispatch]);

  const handleOnSubmitEditing = React.useCallback(() => {
    dispatch(updateUser.updateUserRequest(user));
    dispatch(hideEdittingUser());
  }, [dispatch, user]);

  const topAppBar = {
    title: "Cá nhân",
    backgroundColor: "primary.500",
    leftIcon: !isEditting ? (
      <Icon
        size="sm"
        as={MaterialCommunityIcons}
        name="menu"
        onPress={() => dispatch(showEdittingUser())}
      />
    ) : (
      <Button
        variant="ghost"
        color="primary.500"
        onPress={() => handleOnCancelEditing()}
      >
        Hủy
      </Button>
    ),
    rightChildren: <Icon size="sm" as={MaterialCommunityIcons} name="pencil" />,
  };
  return !isLoading ? (
    <>
      <LayoutWithImage
        topAppBar={topAppBar}
        aboveChildren={<TopProfileScreen name={data.username} />}
        children={<BottomProfileScreen user={user} setUser={setUser} />}
        backgroundColor={Colors.background}
      />
      {isEditting ? (
        <BottomButton text="Hoàn tất" onPress={handleOnSubmitEditing} />
      ) : null}
    </>
  ) : (
    <LoadingScreen />
  );
};

export default ProfileScreen;
