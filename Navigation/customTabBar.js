import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.TabContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const iconColor = isFocused ? '#FFFFFF' : 'gray';

        const labelVisible = isFocused ? true : false;

        let iconName, labelText;

        if (route.name === 'Home') {
          iconName = 'home-outline'; // Replace with your icon name for Home
          labelText = 'Home';
        } else if (route.name === 'Library') {
          iconName = 'folder-open-outline'; // Replace with your icon name for Library
          labelText = 'Library';
        } else if (route.name === 'Inbox') {
          iconName = 'mail-outline'; // Replace with your icon name for Inbox
          labelText = 'Inbox';
        } else if (route.name === 'Setting') {
          iconName = 'settings-outline'; // Replace with your icon name for Setting
          labelText = 'Setting';
        }

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            }}
            style={isFocused ? styles.TabActiveItem : styles.TabItem}
          >
            <View style={{ alignItems: 'center', flexDirection: 'row', gap: 10 }}>
              <Ionicons name={iconName} size={24} color={iconColor} />
              {labelVisible && <Text style={{ color: iconColor }}>{labelText}</Text>}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  TabContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 30,
    position:'absolute',
    bottom:0,
    zindex:99999,
    borderWidth:1,
    borderColor:'lightgray'
  },
  TabActiveItem: {
    paddingHorizontal: 16,
    paddingVertical: 5,
    borderRadius: 13,
    backgroundColor: '#6B4EFF',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  TabItem: {
    flex: 1,
    paddingHorizontal:12,
    paddingVertical:5,
    alignItems: 'center',
  },
});

export default CustomTabBar;
