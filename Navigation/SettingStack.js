// InboxStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingScreen from '../screens/AppScreens/Inbox';

const Stack = createStackNavigator();

const SettingStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="SettingStackSetting" // Rename to "InboxStackHome" to make it unique
        component={SettingScreen}
        options={{ title: 'Setting' }}
      />
      {/* Add other screens related to the "Home" tab */}
    </Stack.Navigator>
  );
};

export default SettingStack;
