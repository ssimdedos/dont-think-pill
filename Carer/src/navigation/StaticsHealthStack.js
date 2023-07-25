import React, { memo } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from "@utils/routes";
import HeaderTitle from "@components/HeaderTittle";
import ButtonHeader from "@components/ButtonHeader";
import HeaderBackGround from "@components/HeaderBackGround";
import SvgSetting from "@svgs/SvgSetting";
import SvgMenu from "@svgs/SvgMenu";
import StaticsHealthTab from "@navigation/StaticsHealthTab";

const Stack = createStackNavigator();

const StaticsHealthStack = memo(() => {
  return (
    <Stack.Navigator screenOptions={{ headerTransparent: true }}>
      <Stack.Screen
        name={ROUTES.StaticsHealth}
        component={StaticsHealthTab}
        options={({ navigation }) => ({
          headerTitleAlign: "center",
          headerTitle: () => <HeaderTitle title={"Test Indicators"} />,
          headerLeft: () => (
            <ButtonHeader
              onPress={() => navigation.openDrawer()}
              children={<SvgMenu />}
            />
          ),
          headerRight: () => (
            <ButtonHeader
              children={<SvgSetting />}
              onPress={() => {
                navigation.navigate(ROUTES.IndicatorsSettings);
              }}
            />
          ),
          headerBackground: () => <HeaderBackGround />,
        })}
      />
    </Stack.Navigator>
  );
});

export default StaticsHealthStack;
