// App.js
import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// // import OnboardingScreen1 from './OnboardingScreen1'; // Import your onboarding screens
// import OnboardingScreen1 from './screens/StartScreens/OnBoard/Onboarding1';
// import OnboardingScreen2 from './screens/StartScreens/OnBoard/Onboarding2';

import StackScreens from './Navigation/StackNavigation';

// const Stack = createStackNavigator();

const App = () => {
  return (
    <StackScreens />
  );
};

export default App;
