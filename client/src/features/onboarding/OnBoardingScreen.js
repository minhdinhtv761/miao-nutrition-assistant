import { Box, VStack } from "native-base";
import { Dimensions, FlatList } from "react-native";

import AuthHeading from "../../components/auth/AuthHeading";
import Indicator from "./../../components/onboarding/Indicator";
import MainContentLayout from "../../components/general/layout/MainContentLayout";
import RadioButton from "../../components/general/buttons/RadioButton";
import React from "react";
import { slide } from "../../constants/slide";
import { space } from "../../styles/layout";

const { width, height } = Dimensions.get("window");

const OnBoardingScreen = ({ navigation }) => {
  const [value, setValue] = React.useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  const ref = React.useRef();
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Slide = ({ item }) => (
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

  const child = (
    <Box safeAreaTop>
      <Indicator slides={slide} currentSlideIndex={currentSlideIndex} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: "100%" }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slide}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />
      {/* {slide.map((e) => (
        <Slide item={e} key={e.id} />
      ))} */}
    </Box>
  );
  return <MainContentLayout child={child} />;
};

export default OnBoardingScreen;
