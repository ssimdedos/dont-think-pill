import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ReadingStackParamList } from 'types/navigation-types';

import ReadingIntro from 'screens/reading/ReadingIntro';
import Reading04 from 'screens/reading/Reading04';
import Reading09 from 'screens/reading/Reading09';

const Stack = createNativeStackNavigator<ReadingStackParamList>();

const ReadingNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="ReadingIntro">
      <Stack.Screen name="ReadingIntro" component={ReadingIntro} />
      <Stack.Screen name="Reading04" component={Reading04} />
      <Stack.Screen name="Reading09" component={Reading09} />
    </Stack.Navigator>
  );
};
export default ReadingNavigator;
