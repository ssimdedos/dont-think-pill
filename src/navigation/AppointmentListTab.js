import React, { memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '@utils/colors';
import FONTS from '@utils/fonts/index';

import ROUTES from '@utils/routes';
import Upcoming from '@screens/Upcoming';
import Past from '@screens/Past';

const Tab = createBottomTabNavigator();

const AppointmentListTab = memo((props) => {
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
          shadowOffset: { width: 0, height: 7 },
          shadowRadius: 64,
          shadowColor: 'rgba(0, 0, 0, 0.2)',
          shadowOpacity: 0.5,
        },
        safeAreaInsets: {
          bottom: 0,
          top: 0,
        },
      }}>
      <Tab.Screen
        name={ROUTES.UpComing}
        component={Upcoming}
        options={{ title: 'Upcoming' }}
      />
      <Tab.Screen
        name={ROUTES.Past}
        component={Past}
        options={{ title: 'Past' }}
      />
    </Tab.Navigator>
  );
});
export default AppointmentListTab;
