import { NativeBaseProvider, extendTheme } from "native-base";

import Navigation from "./Navigation";
import React from "react";
import { SSRProvider } from "@react-aria/ssr";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const theme = extendTheme({
    colors: {
      primary: {
        50: "#def2ec",
        100: "#aedfce",
        200: "#7acbae",
        300: "#47b590",
        400: "#26a47c",
        500: "#40b68f",
        600: "#00a679",
        700: "#009566",
        800: "#00885a",
        900: "#00784c",
      },
    },
    components: {},
  });
  return (
    <SSRProvider>
      <NativeBaseProvider theme={theme}>
        <Navigation />
      </NativeBaseProvider>
    </SSRProvider>
  );
}
