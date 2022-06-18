import { Center, Heading, Spinner, Text, VStack, View } from "native-base";
import { HEADER_HEIGHT, WINDOW_WIDTH } from "../../constants/sizes";
import { filterActions, passFoodData } from "../../redux/actions";
import { push, replace } from "../../utils/RootNavigation";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BarCodeScanner } from "expo-barcode-scanner";
import BottomButton from "./../../components/general/buttons/BottomButton";
import { FoodByBarcode$ } from "../../redux/selectors";
import MainContentLayout from "../../components/general/layout/MainContentLayout";
import { Subtitle } from "../../components/general/typography/Subtitle";
import TopAppBar from "../../components/general/appbar/TopAppBar";
import { TurnBackButton } from "../../components/general/buttons/iconButtons/TurnBackButton";
import { space } from "./../../styles/layout";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ScanBarcodeScreen = () => {
  const dispatch = useDispatch();
  const foodData = useSelector(FoodByBarcode$);
  console.log("foodData", foodData)

  const safeArea = useSafeAreaInsets();
  const heightHeader = HEADER_HEIGHT + safeArea.top;

  const [hasPermission, setHasPermission] = useState(null);
  const [text, setText] = useState("Mã vạch");

  let body;

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, [hasPermission]);

  const handleBarCodeScanned = ({ type, data }) => {
    if (data && data !== text) {
      setText(data);
      dispatch(filterActions.searchBarcode(data));
    }
  };

  const handleCloseModal = useCallback(() => {
    if (foodData) {
      dispatch(passFoodData(foodData));
      replace("FoodMealEditingScreen");
    }
  }, [dispatch, text, foodData]);

  if (hasPermission === null) {
    body = (
      <>
        <Spinner size="lg" />
        <Text textAlign="center">Đang chờ...</Text>
      </>
    );
  }
  if (hasPermission === false) {
    body = <Text textAlign="center">Không có camera</Text>;
  }
  if (hasPermission) {
    body = (
      <VStack space={space.l}>
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={{ height: WINDOW_WIDTH }}
        />
        <Center>
          <Subtitle text="Di chuyển camera lại gần mã vạch để quét" />

          <Heading
            textAlign="center"
            mt={2}
            borderWidth={1}
            borderRadius="sm"
            padding={3}
          >
            {text}
          </Heading>
        </Center>
        {/* {scanned && (
          <>
            <CustomButton text="Hoàn tất" onPress={() => handleCloseModal()} />
            <Button
              onPress={() => {
                setScanned(false);
                setText("Mã vạch");
              }}
              variant="outline"
              borderRadius="full"
              colorScheme="muted"
            >
              Quét lại
            </Button>
          </>
        )} */}
      </VStack>
    );
  }

  return (
    <>
      <View backgroundColor="white" h="100%">
        <TopAppBar
          title="Quét mã vạch"
          backgroundColor="white"
          leftIcon={<TurnBackButton />}
        />
        <View height={heightHeader} />
        <MainContentLayout child={body} />
      </View>

      <BottomButton text="Hoàn tất" onPress={() => handleCloseModal()} />
    </>
  );
};
export default ScanBarcodeScreen;
