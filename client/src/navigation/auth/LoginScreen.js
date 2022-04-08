import * as React from "react";

import {
  Box,
  Button,
  Center,
  FormControl,
  HStack,
  Heading,
  Input,
  Link,
  Text,
  VStack,
} from "native-base";

import CustomButton from "./../../components/general/actionButton/CustomButton";
import CustomLayout from './../../components/general/CustomLayout';
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "./../../styles/colors";
import { space } from "./../../styles/layout";

const LoginScreen = ({ navigation }) => {
  const loginForm = (
    <Center w="100%">
      <Box safeArea w="100%">
        <VStack space={space.xs}>
          <Heading size="xl" color={colors.primary}>
            Xin chào
          </Heading>
          <Heading size="xs" fontWeight="medium">
            Đăng nhập để tiếp tục
          </Heading>
        </VStack>
        <VStack space={space.m} mt={space.xxl} mb={space.xl}>
          <FormControl>
            <Input variant="rounded" placeholder="Tài khoản" />
          </FormControl>
          <FormControl>
            <Input variant="rounded" type="password" placeholder="Mật khẩu" />
            <Link
              mt={space.s}
              alignSelf="flex-end"
              _text={{ color: colors.primary }}
            >
              Quên mật khẩu?
            </Link>
          </FormControl>
        </VStack>
        <VStack space={space.m}>
          <CustomButton
            text="Đăng nhập"
            onPress={() => {
              navigation.navigate("HomeScreen");
            }}
          />
          <Button
            variant="outline"
            rounded="full"
            colorScheme="muted"
            leftIcon={<Icon name="google" color={colors.primary} />}
          >
            Đăng nhập với Google
          </Button>
        </VStack>
        <HStack mt="6" justifyContent="center">
          <Text>Chưa có tài khoản. </Text>
          <Link _text={{ color: colors.primary }}>Đăng ký</Link>
        </HStack>
      </Box>
    </Center>
  );
  return (
   <CustomLayout child={loginForm}/>
  );
};
export default LoginScreen;
