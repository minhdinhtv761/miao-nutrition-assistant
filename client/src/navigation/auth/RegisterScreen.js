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

import CustomButton from "../../components/general/actionButton/CustomButton";
import CustomLayout from "../../components/general/CustomLayout";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../../styles/colors";
import { space } from "../../styles/layout";

const RegisterScreen = ({ navigation }) => {
  const form = (
    <Center w="100%">
      <Box safeArea w="100%">
        <VStack space={space.xs}>
          <Heading size="xl" color={colors.primary}>
            Xin chào
          </Heading>
          <Heading size="xs" fontWeight="medium">
            Đăng ký để tiếp tục
          </Heading>
        </VStack>
        <VStack space={space.m} mt={space.xxl} mb={space.xl}>
          <FormControl>
            <Input variant="rounded" placeholder="Tài khoản" />
          </FormControl>
          <FormControl>
            <Input variant="rounded" type="password" placeholder="Mật khẩu" />
          </FormControl>
          <FormControl>
            <Input
              variant="rounded"
              type="password"
              placeholder="Nhập lại mật khẩu"
            />
          </FormControl>
        </VStack>
        <VStack space={space.m}>
          <CustomButton
            text="Đăng ký"
            onPress={() => {
              navigation.navigate("HomeScreen");
            }}
          />
          <Button
            variant="outline"
            rounded="full"
            colorScheme="muted"
            leftIcon={<Icon name="google" color={colors.primary} />}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            Đăng ký với Google
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
  return <CustomLayout child={form} />;
};
export default RegisterScreen;
