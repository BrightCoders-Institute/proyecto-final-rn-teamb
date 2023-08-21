import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {AuthNavigator} from '../navigation/Navigator';
import {useSelector} from 'react-redux';
import {RootState} from '../store/reducers';
import {BottomNavigator} from '../navigation/BottomNavigator';

const Router = () => {
  const {authState} = useSelector((state: RootState) => state.data);
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      {authState === 'Checking' ? <AuthNavigator /> : <BottomNavigator />}
    </NavigationContainer>
  );
};

export default Router;
