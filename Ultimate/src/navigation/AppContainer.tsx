import React from 'react';
import { View } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from '@ui-kitten/components';
import { RootStackParamList } from 'types/navigation-types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './root-navigation';
import SplashScreen from 'screens/Splash';

import OnboardingNavigator from './OnboardingNavigator';
import AuthNavigator from './AuthNavigator';
import ProfileNavigator from './ProfileNavigator';
import SocialNavigator from './SocialNavigator';
import FoodNavigator from './FoodNavigator';
import ECommerceNavigator from './ECommerceNavigator';
import ReadingNavigator from './ReadingNavigator';
import FitnessHealthNavigator from './FitnessHealthNavigator';

enableScreens();

const Stack = createNativeStackNavigator<RootStackParamList>();
const AppContainer = () => {
  const themes = useTheme();
  return (
    <NavigationContainer ref={navigationRef}>
      <View style={{ backgroundColor: themes['background-basic-color-1'], flex: 1 }}>
        <Stack.Navigator
          initialRouteName={'SplashScreen'}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
          <Stack.Screen name="Auth" component={AuthNavigator} />
          <Stack.Screen name="Social" component={SocialNavigator} />
          <Stack.Screen name="ECommerce" component={ECommerceNavigator} />
          <Stack.Screen name="Reading" component={ReadingNavigator} />
          <Stack.Screen name="FitnessHealth" component={FitnessHealthNavigator} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default AppContainer;
