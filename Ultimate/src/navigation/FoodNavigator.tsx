import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FoodStackParamList } from 'types/navigation-types';
import Food01 from 'screens/Food/Food01';
import Food02 from 'screens/Food/Food02';
import Food03 from 'screens/Food/Food03';
import Food04 from 'screens/Food/Food04';



const Stack = createNativeStackNavigator<FoodStackParamList>();

const FoodNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Food01">
      <Stack.Screen name="Food01" component={Food01} />
      <Stack.Screen name="Food02" component={Food02} />
      <Stack.Screen name="Food03" component={Food03} />
      <Stack.Screen name="Food04" component={Food04} />
    </Stack.Navigator>
  );
};
export default FoodNavigator;
