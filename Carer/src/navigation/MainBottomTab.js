import React, { memo } from "react";
import { View, Platform,StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ROUTES from "@utils/routes";
import SvgIndicatorInactive from "@svgs/MainBottomTab/SvgIndicatorInactive";
import SvgStethoscopeInactive from "@svgs/MainBottomTab/SvgStethoscopeInactive";
import colors from "@utils/colors";
import SvgDoctorInactive from "@svgs/MainBottomTab/SvgDoctorInactive";
import SvgDrugInactive from "@svgs/MainBottomTab/SvgDrugInactive";
import UserProfile from "@screens/UserProfile";
import SvgUserProfileInactive from "@svgs/MainBottomTab/SvgUserProfileInactive";
import StaticsHealthStack from "@navigation/StaticsHealthStack";
import DoctorsStack from "@navigation/DoctorsStack";
import MainPageStack from "@navigation/MainPageStack";
import DrugsStack from "@navigation/DrugsStack";
import { getBottomSpace } from "react-native-iphone-x-helper";

const Tab = createBottomTabNavigator();

const MainBottomTab = memo(() => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.MainPageBottomTab}
      tabBarOptions={{
        style: styles.tabBarOptions,
        showLabel: false,
        activeTintColor: colors.classicBlue,
        inactiveTintColor: colors.silverChalice,
      }}
    >
      <Tab.Screen
        name={ROUTES.StaticsHealth}
        component={StaticsHealthStack}
        options={{
          tabBarIcon: ({ color }) => <SvgIndicatorInactive color={color} />,
        }}
      />
      <Tab.Screen
        name={ROUTES.DoctorsBottomTab}
        component={DoctorsStack}
        options={{
          tabBarIcon: ({ color }) => <SvgDoctorInactive color={color} />,
        }}
      />
      <Tab.Screen
        name={ROUTES.MainPageBottomTab}
        component={MainPageStack}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={styles.viewTabBarIcon}>
              <SvgStethoscopeInactive color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.DrugsBottomTab}
        component={DrugsStack}
        options={{
          tabBarIcon: ({ color }) => <SvgDrugInactive color={color} />,
        }}
      />
      <Tab.Screen
        name={ROUTES.UserProfileBottomTab}
        component={UserProfile}
        options={{
          tabBarIcon: ({ color }) => <SvgUserProfileInactive color={color} />,
        }}
      />
    </Tab.Navigator>
  );
});
export default MainBottomTab;

const styles = StyleSheet.create({
  viewTabBarIcon: {
    backgroundColor: colors.classicBlue,
    borderWidth: 4,
    borderColor: colors.pageBackGround,
    height: 56,
    width: 56,
    borderRadius: 56,
    alignItems: "center",
    justifyContent: "center",
    marginTop: Platform.OS === "ios" ? getBottomSpace() + -60 : -20,
  },
  tabBarOptions: {
    backgroundColor: colors.white,
    height: getBottomSpace() + 49,
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
    borderTopWidth: 0,
    position: "absolute",
    bottom: 0,
  },
});
