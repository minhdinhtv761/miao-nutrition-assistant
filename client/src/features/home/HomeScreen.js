import { DailyRecordState$, UserState$ } from "../../redux/selectors";
import { fetchFood, getDailyRecord } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import { BottomHomeScreen } from "./BottomHomeScreen";
import Colors from "./../../styles/colors";
import { Icon } from "native-base";
import LayoutWithImage from "../../components/general/layout/LayoutWithImage";
import { LoadingScreen } from "../../components/general/LoadingScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MenuButton } from "../../components/general/buttons/iconButtons/Menu/MenuButton";
import React from "react";
import { TopHomeScreen } from "./TopHomeScreen";
import { defaultNutrition } from "./../../constants/enums";
import { startOfDate } from "./../../utils/Date";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const userData = useSelector(UserState$);
  const todayDailyRecord = useSelector(DailyRecordState$);
  const [today, setToday] = React.useState(defaultNutrition);
  const [dateFilter, setDateFilter] = React.useState(startOfDate(new Date()));

  React.useEffect(() => {
    if (userData.data) {
      if (!todayDailyRecord.isAPICalled) {
        dispatch(
          getDailyRecord.getDailyRecordRequest({
            userId: userData.data._id,
            filter: { recordDate: dateFilter },
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
  }, [dispatch, userData.data, todayDailyRecord, dateFilter]);

  const topAppBar = {
    title: "Home",
    backgroundColor: "primary.500",
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
