import * as React from 'react';
import { SocialStackParamList } from 'types/navigation-types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SocialIntro from 'screens/Social/SocialIntro';
import Social04 from 'screens/Social/Social04';
import Social06 from 'screens/Social/Social06';
import Social09 from 'screens/Social/Social09';
import Social10 from 'screens/Social/Social10';
import Social11 from 'screens/Social/Social11';

const Stack = createNativeStackNavigator<SocialStackParamList>();

const SocialNavigator = React.memo(() => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SocialIntro">
      <Stack.Screen name="SocialIntro" component={SocialIntro} />
      <Stack.Screen name="Social04" component={Social04} />
      <Stack.Screen name="Social06" component={Social06} />
      <Stack.Screen name="Social09" component={Social09} />
      <Stack.Screen name="Social10" component={Social10} />
      <Stack.Screen name="Social11" component={Social11} />
    </Stack.Navigator>
  );
});

export default SocialNavigator;
