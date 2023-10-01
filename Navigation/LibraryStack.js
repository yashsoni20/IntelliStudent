// InboxStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LibraryS from '../screens/AppScreens/LibraryScreens/Library';


const Stack = createStackNavigator();

const LibraryStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="LibraryS"
        component={LibraryS}
        options={{ title: 'LibraryS' }}
      />
      {/* Add other screens related to the "Home" tab */}
    </Stack.Navigator>
  );
};

export default LibraryStack;
