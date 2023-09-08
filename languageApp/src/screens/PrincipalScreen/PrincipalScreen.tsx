import React from 'react';
import {View, Text, TouchableOpacity, TouchableHighlight} from 'react-native';
import styles from './styles';
import {NavigationType} from '../../../types/NavigationType';
import {HeaderText} from '../../components/HeaderText/HeaderText';
import Logo from '../../components/Icon/Logo';

export const PrincipalScreen = ({navigation}: NavigationType) => {
  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />
      <HeaderText header="Time to improve your english skills!" />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.signUpTitle}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableHighlight
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginTitle}>Login</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};
