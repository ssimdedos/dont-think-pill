import * as React from 'react';
import {MainStackParamList} from 'types/navigation-types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main01 from 'screens/Main/Main01';
import Main02 from 'screens/Main/Main02';
import Main03 from 'screens/Main/Main03';
import Main04 from 'screens/Main/Main04';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Main01">
      <Stack.Screen name="Main01" component={Main01} />
      <Stack.Screen name="Main02" component={Main02} />
      <Stack.Screen name="Main03" component={Main03} />
      <Stack.Screen name="Main04" component={Main04} />
    </Stack.Navigator>
  );
};
export default MainNavigator;
