import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  SplashScreen: undefined;
  Onboarding: RouteProp<OnboardingStackParamList> | undefined;
  Auth: RouteProp<AuthStackParamList> | undefined;
  Social: RouteProp<SocialStackParamList> | undefined;
  ECommerce: { screen: keyof ECommerceStackParamList };
  Reading: { screen: keyof ReadingStackParamList };
  FitnessHealth: RouteProp<FitnessHealthStackParamList> | undefined;
  Init: RouteProp<InitStackParamList> | undefined;
  Main: RouteProp<MainStackParamList> | undefined;
  Food: RouteProp<FoodStackParamList> | undefined;
};

export type OnboardingStackParamList = {
  Onboarding01: undefined;
};

export type MainStackParamList = {
  Main01: undefined;
  Main02: undefined;
  Main03: undefined;
  Main04: undefined;
};

export type InitStackParamList = {
  Init01: undefined;
  Init02: undefined;
  Init03: undefined;
  Init04: undefined;
  SignIn: undefined;
};

export type FoodStackParamList = {
  Food01: undefined;
  Food02: undefined;
  Food03: undefined;
  Food04: undefined;
};

export type AuthStackParamList = {
  AuthIntro: undefined;
  Auth01: undefined;
  Auth02: undefined;
  Auth03: undefined;
  Auth04: undefined;
  Auth05: undefined;
  Auth06: undefined;
  Auth07: undefined;
  Auth08: undefined;
  Auth09: undefined;
  Auth10: undefined;
};

export type SocialStackParamList = {
  SocialIntro: undefined;
  Social01: undefined;
  Social02: undefined;
  Social03: undefined;
  Social04: undefined;
  Social05: undefined;
  Social06: undefined;
  Social07: undefined;
  Social08: undefined;
  Social09: undefined;
  Social10: undefined;
  Social11: undefined;
  Social12: undefined;
  Social13: undefined;
  Social14: undefined;
};

export type ECommerceStackParamList = {
  ECommerceIntro: undefined;
  ECommerce01: undefined;
  ECommerce02: undefined;
  ECommerce03: undefined;
  ECommerce04: undefined;
  ECommerce05: undefined;
  ECommerce06: undefined;
  ECommerce07: undefined;
  ECommerce08: undefined;
  ECommerce09: undefined;
  ECommerce10: undefined;
};

export type ReadingStackParamList = {
  ReadingIntro: undefined;
  Reading01: undefined;
  Reading02: undefined;
  Reading03: undefined;
  Reading04: undefined;
  Reading05: undefined;
  Reading06: undefined;
  Reading07: undefined;
  Reading08: undefined;
  Reading09: undefined;
  Reading10: undefined;
};
export type FitnessHealthStackParamList = {
  FitnessHealthIntro: undefined;
  FitnessHealth01: undefined;
  FitnessHealth02: undefined;
  FitnessHealth03: undefined;
  FitnessHealth04: undefined;
  FitnessHealth05: undefined;
  FitnessHealth06: undefined;
  FitnessHealth07: undefined;
  FitnessHealth08: undefined;
  FitnessHealth09: undefined;
  FitnessHealth10: undefined;
};
