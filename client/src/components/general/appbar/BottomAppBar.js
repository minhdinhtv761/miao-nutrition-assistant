import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Box,
  Center,
  HStack,
  Icon,
  IconButton,
  NativeBaseProvider,
  Pressable,
  Text,
} from "native-base";

import Colors from "../../../styles/colors";
import React from "react";
import { headerHeight } from "../../../constants/sizes";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const BottomAppBar = (props) => {
  const [selected, setSelected] = React.useState(1);

  const onPress = () => {
    console.log("long");
  };
  return (
    <HStack bg="white" alignItems="center" shadow={6}>
      <Pressable
        opacity={selected === 0 ? 1 : 0.5}
        py="2"
        flex={1}
        onPress={() => setSelected(0)}
        focused
      >
        <Center>
          <Icon
            mb="1"
            as={<MaterialCommunityIcons name="home-outline" />}
            color="black"
            size="sm"
          />
          <Text color="black" fontSize="12">
            Trang chủ
          </Text>
        </Center>
      </Pressable>

      <Pressable
        opacity={selected === 1 ? 1 : 0.5}
        py="2"
        flex={1}
        onPress={() => setSelected(1)}
      >
        <Center>
          <Icon
            mb="1"
            as={<MaterialCommunityIcons name="silverware-fork-knife" />}
            color="black"
            size="sm"
          />
          <Text color="black" fontSize="12">
            Thực đơn
          </Text>
        </Center>
      </Pressable>

      <Pressable py="2" flex={1}>
        <Center>
          <IconButton
            variant="solid"
            borderRadius="full"
            bg={Colors.normalColor}
            size="lg" //Sửa nhỏ thôi
            _icon={{
              as: AntDesign,
              name: "plus",
              color: "white",
            }}
            _pressed={{
              bg: Colors.normalColor,
              opacity: 0.5,
            }}
            onPress={onPress}
          />
        </Center>
      </Pressable>

      <Pressable
        opacity={selected === 3 ? 1 : 0.6}
        py="2"
        flex={1}
        onPress={() => setSelected(3)}
      >
        <Center>
          <Icon
            mb="1"
            as={<MaterialCommunityIcons name="book-open-variant" />}
            color="black"
            size="sm"
          />
          <Text color="black" fontSize="12">
            Kế hoạch
          </Text>
        </Center>
      </Pressable>

      <Pressable
        opacity={selected === 4 ? 1 : 0.5}
        py="2"
        flex={1}
        onPress={() => setSelected(4)}
      >
        <Center>
          <Icon
            mb="1"
            as={<MaterialCommunityIcons name="account-outline" />}
            color="black"
            size="sm"
          />
          <Text color="black" fontSize="12">
            Cá nhân
          </Text>
        </Center>
      </Pressable>
    </HStack>
  );
};
