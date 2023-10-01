
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingS from '../screens/AppScreens/SettingScreens/Setting';
import Profile from '../screens/AppScreens/SettingScreens/Profile';
import Upgrade from '../screens/AppScreens/SettingScreens/Upgrade';
import Checkout from '../screens/AppScreens/SettingScreens/Checkout';


const Stack = createStackNavigator();

const SettingStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="SettingS" // Rename to "InboxStackHome" to make it unique
        component={SettingS}
        options={{ title: 'SettingS' }}
      />
      <Stack.Screen
        name="Profile" // Rename to "InboxStackHome" to make it unique
        component={Profile}
        options={{ title: 'Profile' }}
      />
      <Stack.Screen
        name="Upgrade" // Rename to "InboxStackHome" to make it unique
        component={Upgrade}
        options={{ title: 'Upgrade' }}
      />
      <Stack.Screen
        name="Checkout" // Rename to "InboxStackHome" to make it unique
        component={Checkout}
        options={{ title: 'Checkout' }}
      />

      {/* Add other screens related to the "Home" tab */}
    </Stack.Navigator>
  );
};

export default SettingStack;
