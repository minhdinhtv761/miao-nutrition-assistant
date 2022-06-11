import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  Box,
  Divider,
  HStack,
  Heading,
  Icon,
  Pressable,
  Text,
  VStack,
  View,
} from "native-base";
import { HEADER_HEIGHT, WINDOW_WIDTH } from "../../../../../constants/sizes";

import Colors from "../../../../../styles/colors";
import CustomButton from "../../CustomButton";
import MainContentLayout from "../../../layout/MainContentLayout";
import { SafeAreaView } from "react-native-safe-area-context";
import { authActions } from "./../../../../../redux/actions/authActions";
import { replace } from "../../../../../utils/RootNavigation";
import { space } from "../../../../../styles/layout";
import { useDispatch } from "react-redux";

const listItems = [
  {
    title: "Trợ giúp & yêu cầu hỗ trợ",
    icon: { as: MaterialCommunityIcons, name: "help-circle" },
  },
  {
    title: "Chọn ngôn ngữ",
    icon: { as: MaterialIcons, name: "language" },
  },
  {
    title: "Thông báo",
    icon: { as: MaterialIcons, name: "notifications" },
  },
  {
    title: "Quản lý tài khoản",
    icon: { as: MaterialCommunityIcons, name: "account" },
  },
  {
    title: "Chính sách Bảo mật",
    icon: { as: MaterialCommunityIcons, name: "shield-alert" },
  },
  {
    title: "Điều khoản Dịch vụ",
    icon: { as: MaterialCommunityIcons, name: "book" },
  },
];

export const MenuSettingDrawer = ({ setIsOpen }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.logoutRequest());
    replace("LoginScreen");
  };
  const children = (
    <VStack>
      <HStack
        alignItems="center"
        justifyContent="space-between"
        borderBottomColor="black"
      >
        <Heading color={Colors.black}>Menu</Heading>
        <Icon
          size="sm"
          as={AntDesign}
          name="close"
          onPress={() => setIsOpen(false)}
        />
      </HStack>
      <Divider
        mt={space.s}
        mb={space.m}
        _light={{
          bg: Colors.backgroundProgress,
        }}
      />
      {listItems.map((value, index) => (
        <View key={index}>
          <Pressable>
            <Element title={value.title} icon={value.icon} />
          </Pressable>
          {index < listItems.length - 1 ? (
            <Divider
              my={space.m}
              _light={{
                bg: Colors.backgroundProgress,
              }}
            />
          ) : null}
        </View>
      ))}
      <SafeAreaView />
      <CustomButton text="Đăng xuất" onPress={handleLogout} />
    </VStack>
  );
  return (
    <Box safeAreaTop bg={Colors.background} width={WINDOW_WIDTH}>
      <MainContentLayout child={children} />
    </Box>
  );
};

const Element = ({ title, icon }) => {
  return (
    <HStack alignItems="center" justifyContent="space-between">
      <HStack space={space.s} alignItems="center">
        <Icon size="sm" as={icon.as} name={icon.name} />
        <Text fontSize={16} fontWeight="bold">
          {title}
        </Text>
      </HStack>
      <Icon size="sm" as={AntDesign} name="right" />
    </HStack>
  );
};
