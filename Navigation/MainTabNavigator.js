// MainTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from './customTabBar';
import InboxStack from './InboxStack';
import HomeStack from './HomeStack'; // Import your HomeStack
import SettingStack from './SettingStack';
import LibraryStack from './LibraryStack';
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeStack}initialParams={{ selectedIcon: 'home-outline' }} />
      <Tab.Screen name="Library" component={LibraryStack} initialParams={{ selectedIcon: 'folder-open-outline' }} />
      <Tab.Screen name="Inbox" component={InboxStack} initialParams={{ selectedIcon: 'mail-outline' }} />
      <Tab.Screen name="Setting" component={SettingStack} initialParams={{ selectedIcon: 'settings-outline' }} />
      {/* Add other tab screens as needed */}
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
