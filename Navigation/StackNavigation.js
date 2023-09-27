// StackScreens.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding1 from '../screens/StartScreens/OnBoard/Onboarding1';
import Onboarding2 from '../screens/StartScreens/OnBoard/Onboarding2';
import Onboarding3 from '../screens/StartScreens/OnBoard/OnBoarding3';
import OTPScreen from '../screens/StartScreens/OTP/Otp';

import MainTabNavigator from './MainTabNavigator';
import Login from '../screens/StartScreens/Login/Login';
import PersonalD1 from '../screens/StartScreens/PersonalDetails/PersonalD1';
import PersonalD2 from '../screens/StartScreens/PersonalDetails/PersonalD2';

const Stack = createStackNavigator();

const StackScreens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding1" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Otp" component={OTPScreen} />
        <Stack.Screen name="PersonalD1" component={PersonalD1} />
        <Stack.Screen name="PersonalD2" component={PersonalD2} />
        <Stack.Screen
          name="MainTabNavigator"
          component={MainTabNavigator}
          options={{ headerShown: false }} // Hide the header for the tab navigator
        />
        {/* Add other onboarding screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackScreens;
