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
import { defaultNutrition } from "./../../constants/enums";
import { fetchFood } from "../../redux/actions";
import { getTodayDailyRecord } from "../../helpers/CalcData";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector(UserState$);
  const [today, setToday] = React.useState(defaultNutrition);

  React.useEffect(() => {
    if (data) {
      setToday(getTodayDailyRecord(data.dailyRecordIds));
    }
    dispatch(fetchFood.fetchFoodRequest());
  }, [dispatch, data]);
  
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
        aboveChildren={<TopHomeScreen goal={data.goal} today={today} />}
        children={<BottomHomeScreen goal={data.goal} today={today} />}
        backgroundColor={Colors.background}
      />
    </>
  ) : (
    <LoadingScreen />
  );
};

export default HomeScreen;
