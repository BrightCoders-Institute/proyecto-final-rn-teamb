import React from 'react';
//navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ResourcesScreenNavigator,
  HomeScreenNavigator,
  SettingsScreenNavigator,
} from './Navigator';
//Icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#012030',
          height: 60,
        },
        headerShown: false,
        tabBarActiveTintColor: '#5FCDD9',
        tabBarInactiveTintColor: '#D9D9D9',
        tabBarLabelStyle: {
          fontFamily: 'Roboto-Medium',
          fontSize: 10,
          marginBottom: 10,
        },
      }}>
      <Tab.Screen
        name="Resources"
        component={ResourcesScreenNavigator}
        options={{
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({color}) => (
            <Icon name="book-open-page-variant" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreenNavigator}
        options={{
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({color}) => <Icon name="home" size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="Seetings"
        component={SettingsScreenNavigator}
        options={{
          tabBarLabel: 'Settings',
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({color}) => <Icon name="cog" size={20} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};
