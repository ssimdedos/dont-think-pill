import * as React from 'react';
import {InitStackParamList} from 'types/navigation-types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Init03 from 'screens/Init/Init03';
import init02 from 'screens/Init/Init02';
import Init01 from 'screens/Init/Init01';

const Stack = createNativeStackNavigator<InitStackParamList>();

const InitNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Init01">
      <Stack.Screen name="Init01" component={Init01} />
      <Stack.Screen name="Init02" component={init02} />
      <Stack.Screen name="Init03" component={Init03} />
    </Stack.Navigator>
  );
};
export default InitNavigator;
