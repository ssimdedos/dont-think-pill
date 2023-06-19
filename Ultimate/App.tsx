import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar, StyleSheet } from "react-native";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { default as darkTheme } from "./src/constants/themes/dark.json";
import { default as customTheme } from "./src/constants/themes/app-theme.json";
import { default as customMapping } from "./src/constants/themes/mapping.json";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import * as eva from "@eva-design/eva";
import AppContainer from "navigation/AppContainer";
import AssetsIconsPack from "assets/AssetsIconsPack";
import { Provider } from "react-redux";
import store from "reduxs/store";
import useCachedResources from "hooks/useCacheResource";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <IconRegistry icons={[AssetsIconsPack, EvaIconsPack]} />
      <ApplicationProvider
        {...eva}
        theme={{ ...eva.dark, ...customTheme, ...darkTheme }}
        customMapping={{ ...eva.mapping, ...customMapping }}
      >
        <Provider store={store}>
          <StatusBar
            barStyle={"light-content"}
            translucent={true}
            backgroundColor={"#00000000"}
          />
          <AppContainer />
        </Provider>
      </ApplicationProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
