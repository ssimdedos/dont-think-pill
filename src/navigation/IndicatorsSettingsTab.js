import React, { memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '@utils/colors';
import FONTS from '@utils/fonts/index';

import ROUTES from '@utils/routes';
import Indicator from '@screens/Indicator';
import Devices from '@screens/Devices';

const Tab = createBottomTabNavigator();

const IndicatorsSettingsTab = memo(() => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.UpComing}
      tabBarOptions={{
        activeTintColor: colors.white,
        inactiveTintColor: colors.dimGray,
        activeBackgroundColor: colors.classicBlue,
        inactiveBackgroundColor: colors.pageBackGround,
        tabStyle: {
          borderRadius: 40,
          justifyContent: 'center',
          alignItems: 'center',
        },
        labelStyle: {
          fontFamily: FONTS.HIND.regular,
          fontSize: 13,
        },
        style: {
          marginHorizontal: 24,
          marginTop: 16,
          position: 'absolute',
          top: 0,
          borderTopWidth: 0,
          borderRadius: 40,
          height: 40,
          backgroundColor: colors.pageBackGround,
        },
        safeAreaInsets: {
          bottom: 0,
          top: 0,
        },
      }}>
      <Tab.Screen
        name={ROUTES.Devices}
        component={Devices}
        options={{ title: 'Device' }}
      />
      <Tab.Screen
        name={ROUTES.Indicator}
        component={Indicator}
        options={{ title: 'Indicator' }}
      />
    </Tab.Navigator>
  );
});
export default IndicatorsSettingsTab;
