import React from "react";
import colors from "@utils/colors";
import FONTS from "@utils/fonts/index";
import ROUTES from "@utils/routes";
import Day from "@screens/Day";
import Month from "@screens/Month";
import Year from "@screens/Year";
import Week from "@screens/Week";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Platform } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

export default function MaterialTopTabNavigator() {
  const { top } = useSafeAreaInsets();
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.semiBlack,
        inactiveTintColor: colors.silverChalice,
        activeBackgroundColor: colors.white,
        inactiveBackgroundColor: colors.white,
        labelStyle: {
          fontFamily: FONTS.HIND.Regular,
          fontSize: 12,
          textTransform: "uppercase",
        },
        style: {
          marginTop: top + 66,
          position: "absolute",
          alignSelf: "center",
          left: 16,
          right: 16,
          borderRadius: 16,
          height: 48,
          backgroundColor: colors.white,
          shadowColor: "transparent",
        },
        indicatorStyle: {
          width: 16,
          height: 4,
          alignSelf: "center",
          marginLeft: 34,
          borderTopRightRadius: 200,
          borderTopLeftRadius: 200,
          backgroundColor: colors.classicBlue,
        },
      }}
    >
      <Tab.Screen
        name={ROUTES.Day}
        component={Day}
        options={{ title: "Day" }}
      />
      <Tab.Screen
        name={ROUTES.Week}
        component={Week}
        options={{ title: "Week" }}
      />
      <Tab.Screen
        name={ROUTES.Month}
        component={Month}
        options={{ title: "Month" }}
      />
      <Tab.Screen
        name={ROUTES.Year}
        component={Year}
        options={{ title: "Year" }}
      />
    </Tab.Navigator>
  );
}
