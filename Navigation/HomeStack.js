// HomeStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/AppScreens/HomeScreens/Home';
import Examinations from '../screens/AppScreens/HomeScreens/Examinations';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="HomeStackHome" // Rename to "HomeStackHome" to make it unique
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="Examinations" // Rename to "HomeStackHome" to make it unique
        component={Examinations}
        options={{ title: 'Examinations' }}
      />

      {/* Add other screens related to the "Home" tab */}
    </Stack.Navigator>
  );
};

export default HomeStack;
