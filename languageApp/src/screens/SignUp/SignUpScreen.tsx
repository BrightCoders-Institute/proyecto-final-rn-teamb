import React from 'react';
import { View, Image, Text } from 'react-native';
import logi_image from '../../../assets/images/login.png'
import styles from './styles';
import {Form} from '../../components/Form/Form';

export const SignUpScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.loginTitle}>Sign Up</Text>

      {/* Add the image after the title */}
      <Image
        source={logi_image}
        style={styles.image}
        resizeMode="contain"
      />
      <Form isRegister={true} buttonLabel="Sign Up"/>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Already have an account? Log In <Text style={styles.registerClick}>Register</Text> </Text>
      </View>
    </View>
  );
};
