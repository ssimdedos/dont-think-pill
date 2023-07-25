import * as React from 'react';
import {AuthStackParamList} from 'types/navigation-types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthIntro from 'screens/Auth/AuthIntro';
import Auth07 from 'screens/Auth/Auth07';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="AuthIntro">
      <Stack.Screen name="AuthIntro" component={AuthIntro} />
      <Stack.Screen name="Auth07" component={Auth07} />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
