// HomeStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/AppScreens/Home';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="HomeStackHome" // Rename to "HomeStackHome" to make it unique
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      {/* Add other screens related to the "Home" tab */}
    </Stack.Navigator>
  );
};

export default HomeStack;
