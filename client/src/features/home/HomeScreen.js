import { Center, Icon, Spinner } from "native-base";
import { DailyRecordState$, UserState$ } from "../../redux/selectors";
import { fetchFood, getDailyRecord, getUser } from "../../redux/actions";

import { Animated } from "react-native";
import { BottomHomeScreen } from "./BottomHomeScreen";
import Colors from "./../../styles/colors";
import LayoutWithImage from "../../components/general/layout/LayoutWithImage";
import { LoadingScreen } from "../../components/general/LoadingScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MenuButton } from "../../components/general/buttons/iconButtons/Menu/MenuButton";
import React from "react";
import { TopHomeScreen } from "./TopHomeScreen";
import { defaultNutrition } from "./../../constants/enums";
import { getTodayDailyRecord } from "../../helpers/CalcData";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const userData = useSelector(UserState$);
  const todayDailyRecord = useSelector(DailyRecordState$);
  const [today, setToday] = React.useState(defaultNutrition);

  React.useEffect(() => {
    if (userData.data) {
      if (!todayDailyRecord.isAPICalled) {
        dispatch(
          getDailyRecord.getDailyRecordRequest({
            userId: userData.data._id,
            filter: { recordDate: new Date() },
          })
        );
        dispatch(fetchFood.fetchFoodRequest());
      } else {
        if (todayDailyRecord.data !== null) {
          setToday(todayDailyRecord.data);
        } else {
          setToday(defaultNutrition);
        }
      }
    }
  }, [dispatch, userData.data, todayDailyRecord]);

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
  return !userData.isLoading && !todayDailyRecord.isLoading ? (
    <>
      <LayoutWithImage
        topAppBar={topAppBar}
        aboveChildren={
          <TopHomeScreen goal={userData.data.goal} today={today} />
        }
        children={<BottomHomeScreen goal={userData.data.goal} today={today} />}
        backgroundColor={Colors.background}
      />
    </>
  ) : (
    <LoadingScreen />
  );
};

export default HomeScreen;
