import React, { memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '@utils/colors';
import FONTS from '@utils/fonts/index';

import ROUTES from '@utils/routes';
import Exploxer from '@screens/Exploxer';
import Trends from '@screens/Trends';
import Follow from '@screens/Follow';

const Tab = createBottomTabNavigator();

const NewsTab = memo(() => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.Trends}
      tabBarOptions={{
        activeTintColor: colors.white,
        inactiveTintColor: colors.dimGray,
        activeBackgroundColor: colors.classicBlue,
        inactiveBackgroundColor: colors.white,
        tabStyle: {
          borderRadius: 40,
          justifyContent: 'center',
          alignItems: 'center',
        },
        labelStyle: {
          fontFamily: FONTS.HIND.Regular,
          fontWeight: '500',
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
          backgroundColor: colors.white,
        },
        safeAreaInsets: {
          bottom: 0,
          top: 0,
        },
      }}>
      <Tab.Screen
        name={ROUTES.Explorer}
        component={Exploxer}
        options={{ title: 'Exploxer' }}
      />
      <Tab.Screen
        name={ROUTES.Trends}
        component={Trends}
        options={{ title: 'Trends' }}
      />
      <Tab.Screen
        name={ROUTES.Follow}
        component={Follow}
        options={{ title: 'Follow' }}
      />
    </Tab.Navigator>
  );
});
export default NewsTab;
