import * as React from "react";
import * as navigation from "../../utils/RootNavigation";

import {
  Alert,
  Box,
  Button,
  Center,
  FormControl,
  HStack,
  Input,
  Link,
  Spinner,
  Text,
  VStack,
} from "native-base";
import { authActions, getUser } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import AuthHeading from "../../components/auth/AuthHeading";
import { AuthState$ } from "../../redux/selectors";
import CenterLayout from "../../components/general/layout/CenterLayout";
import CustomButton from "../../components/general/buttons/CustomButton";
import Icon from "react-native-vector-icons/FontAwesome";
import { Keyboard } from "react-native";
import colors from "../../styles/colors";
import { space } from "../../styles/layout";
import { validate } from './../../helpers/validation';

const LoginScreen = () => {
  const [authData, setAuthData] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const dispatch = useDispatch();
  const { isLoading, error, account } = useSelector(AuthState$);

  const onSubmit = () => {
    Keyboard.dismiss();
    const validation = validate(authData, setErrors);
    if (validation) {
      dispatch(authActions.loginRequest(authData));
      setErrors({});
    }
  };

  let loginForm;
  if (isLoading) {
    loginForm = <Spinner size="lg" />;
  } else if (account) {
    dispatch(getUser.getUserRequest(account._id));
    navigation.replace("HomeScreen");
  } else {
    loginForm = (
      <Center w="100%">
        <Box safeArea w="100%">
          <AuthHeading h1="Xin chào" h2="Đăng nhập để tiếp tục" />

          <VStack space={space.m} mt={space.xxl} mb={space.xl}>
            <FormControl isInvalid={"email" in errors}>
              <Input
                variant="rounded"
                placeholder="Tài khoản"
                onChangeText={(value) =>
                  setAuthData({ ...authData, email: value })
                }
              />
              {"email" in errors ? (
                <FormControl.ErrorMessage>
                  {errors.email}
                </FormControl.ErrorMessage>
              ) : null}
            </FormControl>
            <FormControl
              isInvalid={!("email" in errors) && "password" in errors}
            >
              <Input
                variant="rounded"
                type="password"
                placeholder="Mật khẩu"
                onChangeText={(value) =>
                  setAuthData({ ...authData, password: value })
                }
              />
              {!("email" in errors) && "password" in errors ? (
                <FormControl.ErrorMessage>
                  {errors.password}
                </FormControl.ErrorMessage>
              ) : null}
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
            {error ? (
              <Alert status="error">
                <HStack space={2} flexShrink={1} justifyContent="flex-start">
                  <Alert.Icon mt="1" />
                  <Text fontSize="md" color="muted.500">
                    {error}
                  </Text>
                </HStack>
              </Alert>
            ) : null}
            <CustomButton text="Đăng nhập" onPress={onSubmit} />
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
            <Text>Chưa có tài khoản. </Text>
            <Link
              _text={{ color: colors.primary }}
              onPress={() => navigation.navigate("RegisterScreen")}
            >
              Đăng ký
            </Link>
          </HStack>
        </Box>
      </Center>
    );
  }

  return <CenterLayout child={loginForm} />;
};
export default LoginScreen;
