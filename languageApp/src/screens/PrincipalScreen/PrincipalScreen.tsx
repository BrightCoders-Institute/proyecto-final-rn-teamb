import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {HeaderText} from '../../components/HeaderText/HeaderText';
import {NavigationType} from '../../../types/NavigationType';
import Logo from '../../components/Icon/Logo';

export const PrincipalScreen = ({navigation}: NavigationType) => {
  return (
    <View style={styles.container}>
      <Logo />
      <HeaderText header="Time to improve your english skills!" />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.signUpTitle}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginTitle}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
