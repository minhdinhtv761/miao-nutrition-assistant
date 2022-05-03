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

import AuthHeading from "./../../components/auth/AuthHeading";
import CenterLayout from "../../components/general/layout/CenterLayout";
import CustomButton from "../../components/general/buttons/CustomButton";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../../styles/colors";
import { space } from "../../styles/layout";
import { validate } from "./validation";

const RegisterScreen = ({ navigation }) => {
  const [authData, setAuthData] = React.useState({});
  const [errors, setErrors] = React.useState({});

  const onSubmit = () => {
    validate(authData, setErrors, true)
      ? navigation.navigate("OnBoardingScreen")
      : console.log("Validation Failed");
  };

  const loginForm = (
    <Center w="100%">
      <Box safeArea w="100%">
        <AuthHeading h1="Xin chào" h2="Đăng ký để tiếp tục" />
        <VStack space={space.m} mt={space.xxl} mb={space.xl}>
          <FormControl isInvalid={!authData.email && "email" in errors}>
            <Input
              variant="rounded"
              placeholder="Tài khoản"
              onChangeText={(value) =>
                setAuthData({ ...authData, email: value })
              }
            />
            {!authData.email && "email" in errors ? (
              <FormControl.ErrorMessage>
                {errors.email}
              </FormControl.ErrorMessage>
            ) : null}
          </FormControl>
          <FormControl
            isInvalid={
              !("email" in errors) &&
              (!authData.password || authData.password.length < 6) &&
              "password" in errors
            }
          >
            <Input
              variant="rounded"
              type="password"
              placeholder="Mật khẩu"
              onChangeText={(value) =>
                setAuthData({ ...authData, password: value })
              }
            />
            {!("email" in errors) &&
            (!authData.password || authData.password.length < 6) &&
            "password" in errors ? (
              <FormControl.ErrorMessage>
                {errors.password}
              </FormControl.ErrorMessage>
            ) : null}
          </FormControl>
          <FormControl
            isInvalid={
              !("email" in errors && "password" in errors) &&
              "rePassword" in errors
            }
          >
            <Input
              variant="rounded"
              type="password"
              placeholder="Nhập lại mật khẩu"
              onChangeText={(value) =>
                setAuthData({ ...authData, rePassword: value })
              }
            />
            {!("email" in errors && "password" in errors) &&
            "rePassword" in errors ? (
              <FormControl.ErrorMessage>
                {errors.rePassword}
              </FormControl.ErrorMessage>
            ) : null}
          </FormControl>
        </VStack>
        <VStack space={space.m}>
          <CustomButton text="Đăng ký" onPress={onSubmit} />
          <Button
            variant="outline"
            rounded="full"
            colorScheme="muted"
            leftIcon={<Icon email="google" color={colors.primary} />}
          >
            Đăng nhập với Google
          </Button>
        </VStack>
        <HStack mt="6" justifyContent="center">
          <Text>Đã có tài khoản. </Text>
          <Link
            _text={{ color: colors.primary }}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            Đăng nhập
          </Link>
        </HStack>
      </Box>
    </Center>
  );
  return <CenterLayout child={loginForm} />;
};
export default RegisterScreen;
