import React from 'react';
//navigation
import {createStackNavigator} from '@react-navigation/stack';
//screens
import {CommunWordsScreen} from '../screens/CommunWordsScreen/CommunWordsScreen';
import {FlashCardsScreen} from '../screens/FlashCardsScreen/FlashCardsScreen';
import {HomeScreen} from '../screens/HomeScreen/HomeScreen';
import {ListeningSongsScreen} from '../screens/ListeningSongsScreen/ListeningSongsScreen';
import {VerbsScreen} from '../screens/VerbsScreen/VerbsScreen';
import {ResourcesScreen} from '../screens/ResourcesScreen/ResourcesScreen';
import {PodcastScreen} from '../screens/PodcastScreen/PodcastScreen';
import {ToReadScreen} from '../screens/ToReadScreen/ToReadScreen';
import {StoryScreen} from '../screens/StoryScreen/StoryScreen';

const Stack = createStackNavigator();

export const ResourcesScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ResourcesScreen"
        component={ResourcesScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListeningSongsScreen"
        component={ListeningSongsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PodcastScreen"
        component={PodcastScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ToReadScreen"
        component={ToReadScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StoryScreen"
        component={StoryScreen}
        options={{
          headerTitle: '',
          headerTintColor: '#5FCDD9',
          headerShadowVisible: false,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};
export const HomeScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CommunWordsScreen"
        component={CommunWordsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VerbsScreen"
        component={VerbsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListeningSongsScreen"
        component={ListeningSongsScreen}
      />
      <Stack.Screen
        name="FlashCardsScreen"
        component={FlashCardsScreen}
        options={{
          headerTitle: '',
          headerTintColor: '#5FCDD9',
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export const SettingsScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="FlashCardsScreen" component={FlashCardsScreen} />
    </Stack.Navigator>
  );
};
