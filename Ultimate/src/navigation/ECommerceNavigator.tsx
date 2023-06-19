import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ECommerceStackParamList } from 'types/navigation-types';

import ECommerceIntro from 'screens/e-commerce/ECommerceIntro';
import ECommerce01 from 'screens/e-commerce/ECommerce01';
import ECommerce04 from 'screens/e-commerce/ECommerce04';
import ECommerce05 from 'screens/e-commerce/ECommerce05';
import ECommerce10 from 'screens/e-commerce/ECommerce10';

const Stack = createNativeStackNavigator<ECommerceStackParamList>();

const ECommerceNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="ECommerceIntro">
      <Stack.Screen name="ECommerceIntro" component={ECommerceIntro} />
      <Stack.Screen name="ECommerce01" component={ECommerce01} />
      <Stack.Screen name="ECommerce04" component={ECommerce04} />
      <Stack.Screen name="ECommerce05" component={ECommerce05} />
      <Stack.Screen name="ECommerce10" component={ECommerce10} />
    </Stack.Navigator>
  );
};
export default ECommerceNavigator;
