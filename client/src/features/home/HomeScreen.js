import { Box, VStack } from "native-base";

import AuthHeading from "./../../components/auth/AuthHeading";
import CenterLayout from "../../components/general/layout/CenterLayout";
import MainLayout from "./../../components/general/layout/MainLayout";
import RadioButton from "../../components/general/actionButton/RadioButton";
import React from "react";
import { Text } from "react-native";
import { slide } from "./../../constants/slide";
import { space } from "./../../styles/layout";

const HomeScreen = () => {
  const [value, setValue] = React.useState(0);
  const Slide = ({item}) => (
    <Box>
      <AuthHeading
        h1={item.title}
        h1Color
        h2="Chúng tôi sẽ sử dụng dữ liệu của bạn cho việc tính toán và gợi ý mục tiêu"
      />
      <Box mt={space.xxl} mb={space.xl}>
        {item.type === "radio" ? (
          <RadioButton list={item.body} value={value} setValue={setValue} />
        ) : null}
      </Box>
    </Box>
  );

  const child = slide.map((e) => (
   <Slide item={e}/>
  ));
  return <CenterLayout child={child} />;
};

export default HomeScreen;
