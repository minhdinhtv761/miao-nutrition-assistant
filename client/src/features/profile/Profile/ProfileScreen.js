import * as RootNavigation from "../../../utils/RootNavigation";

import { useDispatch, useSelector } from "react-redux";

import { BottomProfileScreen } from "./BottomProfileScreen";
import Colors from "./../../../styles/colors";
import { Icon } from "native-base";
import LayoutWithImage from "../../../components/general/layout/LayoutWithImage";
import { LoadingScreen } from "../../../components/general/LoadingScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MenuButton } from "../../../components/general/buttons/iconButtons/Menu/MenuButton";
import React from "react";
import { TopProfileScreen } from "./TopProfileScreen";
import { UserState$ } from "../../../redux/selectors";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector(UserState$);

  const handleOnEdittingProfile = React.useCallback(() => {
    RootNavigation.push("ProfileEdittingScreen");
  }, [dispatch]);

  const topAppBar = {
    title: "Cá nhân",
    backgroundColor: "primary.500",
    leftIcon: <MenuButton />,
    rightChildren: (
      <Icon
        size="sm"
        as={MaterialCommunityIcons}
        name="pencil"
        onPress={handleOnEdittingProfile}
      />
    ),
  };

  return !isLoading ? (
    <LayoutWithImage
      topAppBar={topAppBar}
      aboveChildren={<TopProfileScreen name={data.username} />}
      children={<BottomProfileScreen user={data} />}
      backgroundColor={Colors.background}
    />
  ) : (
    <LoadingScreen />
  );
};

export default ProfileScreen;
