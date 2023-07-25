import * as React from 'react';
import { OnboardingStackParamList } from 'types/navigation-types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingIntro from 'screens/Onboarding/OnboardingIntro';
import Onboarding01 from 'screens/Onboarding/Onboarding01';


const Stack = createNativeStackNavigator<OnboardingStackParamList>();

const OnboardingNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="OnboardingIntro">
      <Stack.Screen name="OnboardingIntro" component={OnboardingIntro} />
      <Stack.Screen name="Onboarding01" component={Onboarding01} />
    </Stack.Navigator>
  );
};
export default OnboardingNavigator;
