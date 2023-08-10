import React from 'react';
//navigation
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {BottomNavigator} from './src/navigation/BottomNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

function App(): JSX.Element {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <NavigationContainer theme={MyTheme}>
        <BottomNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
