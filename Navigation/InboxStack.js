// InboxStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InboxS from '../screens/AppScreens/InboxScreen/Inbox';

const Stack = createStackNavigator();

const InboxStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="InboxS" // Rename to "InboxStackHome" to make it unique
        component={InboxS}
        options={{ title: 'InboxS' }}
      />
      {/* Add other screens related to the "Home" tab */}
    </Stack.Navigator>
  );
};

export default InboxStack;
