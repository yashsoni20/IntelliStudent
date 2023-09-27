// InboxStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LibraryScreen from '../screens/AppScreens/Library';

const Stack = createStackNavigator();

const LibraryStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="LibraryStackLibrary" // Rename to "InboxStackHome" to make it unique
        component={LibraryScreen}
        options={{ title: 'Library' }}
      />
      {/* Add other screens related to the "Home" tab */}
    </Stack.Navigator>
  );
};

export default LibraryStack;
