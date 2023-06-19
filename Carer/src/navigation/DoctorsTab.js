import React, { memo } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import colors from "@utils/colors";
import FONTS from "@utils/fonts/index";
import ROUTES from "@utils/routes";
import Nearby from "@screens/Nearby";
import ListAll from "@screens/ListAll";
import Favorites from "@screens/Favorites";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

const DoctorsTab = memo(() => {
  const { top } = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.ListAll}
      tabBarOptions={{
        activeTintColor: colors.white,
        inactiveTintColor: colors.dimGray,
        activeBackgroundColor: colors.classicBlue,
        inactiveBackgroundColor: colors.white,
        tabStyle: {
          borderRadius: 40,
          justifyContent: "center",
          alignItems: "center",
        },
        labelStyle: {
          fontFamily: FONTS.HIND.Regular,
          fontWeight: "500",
          fontSize: 13,
        },
        style: {
          marginHorizontal: 24,
          marginTop: top + 66,
          position: "absolute",
          top: 0,
          borderTopWidth: 0,
          borderRadius: 40,
          height: 40,
          backgroundColor: colors.white,
        },
        safeAreaInsets: {
          bottom: 0,
          top: 0,
        },
      }}
    >
      <Tab.Screen
        name={ROUTES.Nearby}
        component={Nearby}
        options={{ title: "Nearby" }}
      />
      <Tab.Screen
        name={ROUTES.ListAll}
        component={ListAll}
        options={{ title: "List All" }}
      />
      <Tab.Screen
        name={ROUTES.Favorites}
        component={Favorites}
        options={{ title: "Favorites" }}
      />
    </Tab.Navigator>
  );
});
export default DoctorsTab;
