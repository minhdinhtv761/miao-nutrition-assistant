import { Center, Icon, Spinner } from "native-base";

import { Animated } from "react-native";
import { BottomHomeScreen } from "./BottomHomeScreen";
import Colors from "./../../styles/colors";
import LayoutWithImage from "../../components/general/layout/LayoutWithImage";
import { LoadingScreen } from "../../components/general/LoadingScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MenuButton } from "../../components/general/buttons/iconButtons/Menu/MenuButton";
import React from "react";
import { TopHomeScreen } from "./TopHomeScreen";
import { UserState$ } from "../../redux/selectors";
import { fetchFood } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector(UserState$);
  React.useEffect(() => {
    dispatch(fetchFood.fetchFoodRequest());
  }, [dispatch]);

  const scrollA = React.useRef(new Animated.Value(0)).current;
  const topAppBar = {
    title: "Home",
    backgroundColor: "primary.500",
    // leftIcon: (
    //   <Icon
    //     size="sm"
    //     as={MaterialCommunityIcons}
    //     name="menu"
    //     onPress={() => {}}
    //   />
    // ),
    leftIcon: <MenuButton />,
    rightChildren: (
      <Icon size="sm" as={MaterialCommunityIcons} name="calendar-blank" />
    ),
  };
  return !isLoading ? (
    <>
      <LayoutWithImage
        topAppBar={topAppBar}
        aboveChildren={<TopHomeScreen data={data} />}
        children={<BottomHomeScreen data={data} />}
        backgroundColor={Colors.background}
      />
    </>
  ) : (
    <LoadingScreen />
  );
};

export default HomeScreen;
