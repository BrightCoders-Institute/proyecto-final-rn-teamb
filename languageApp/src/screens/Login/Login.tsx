import React from 'react';
import { View, Image, Text } from 'react-native';
import logi_image from '../../../assets/images/login.png'
import styles from './styles';
import {Form} from '../../components/Form/Form';

const Login: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.loginTitle}>Log In</Text>

      {/* Add the image after the title */}
      <Image
        source={logi_image}
        style={styles.image}
        resizeMode="contain"
      />
      <Form buttonLabel='Login'/>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Don't have an account? <Text style={styles.registerClick}>Register</Text> </Text>
      </View>
    </View>
  );
};

export default Login;