import { Activity } from "../../../components/profile/Activity";
import { HealthInfo } from "./../../../components/profile/HealthInfo";
import MenuTitle from "./../../../components/general/typography/MenuTitle";
import { SafeAreaView } from "react-native-safe-area-context";
import { VStack } from "native-base";
import { space } from "../../../styles/layout";

export const BottomProfileEdittingScreen = ({ user, setUser }) => {
  return (
    <VStack space={space.m}>
      {/* <VStack {...boxStyle} space={space.s}>
        <Text> Mục tiêu hiện tại</Text>
        <HStack alignItems="center" justifyContent="space-between">
          <Heading color={Colors.fatColor}>Giảm mỡ chậm</Heading>
          <Subtitle text="0.5 kg/tuần" />
        </HStack>
      </VStack> */}
      <HealthInfo user={user} setUser={setUser} isEditting/>
      <MenuTitle title="Mức độ vận động" />
      <Activity  user={user} setUser={setUser} isEditting/>
      <SafeAreaView />
      {/* <AllergenicFoods /> */}
    </VStack>
  );
};
