import React, { useEffect, useState } from 'react';
import { View, Image, Text, Keyboard, TextInput, TouchableOpacity, Alert } from 'react-native';
import logi_image from '../../../assets/images/login.png'
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Yup from 'yup';
import {useFormik} from 'formik';


interface FormValues {
    email: string;
    password: string;
}

export const Login: React.FC = () => {
    const [keyboardStatus, setKeyboardStatus] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const [showPassword, setShowPassword] = useState(false);
    
    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };

    const initialValues: FormValues = {
      email: "",
      password: "",
    };

    const formik = useFormik({
      initialValues: initialValues,
      validationSchema: Yup.object(validationSchema()),
      validateOnChange: true,
      onSubmit : formValue => {
        console.log("llego")
        //Alert.alert(formValue.name);
      },
    });

    const handleFormikSubmit = (formik) => {
        formik.handleSubmit('andi')
    }
  return (
    <View style={styles.container}>
      <Text style={styles.loginTitle}>Login</Text>
      <Image
        source={logi_image}
        style={ keyboardStatus ? styles.image_reduced : styles.image}
        resizeMode="contain"
      />
      <View style={styles.formContainer}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={formik.values.email}
          onChangeText={text => formik.setFieldValue('email', text)}
        />
        {formik.errors.email && (
            <Text style={styles.errorText}>{formik.errors.email}</Text>
        )}
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="Password"
            value={formik.values.password}
            secureTextEntry={!showPassword}
            onChangeText={text => formik.setFieldValue('password', text)}
          />
          <TouchableOpacity style={styles.passwordToggle} onPress={toggleShowPassword}>
            <Icon name={showPassword ? 'visibility' : 'visibility-off'} size={20} color="#777" />
          </TouchableOpacity>
        </View>
        {formik.errors.password && (
            <Text style={styles.errorText}>{formik.errors.password}</Text>
        )}
        <TouchableOpacity style={styles.loginButton} onPress={formik.handleSubmit}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Don't have an account?<Text style={styles.registerClick}>Register</Text> </Text>
      </View>
    </View>
  );
};


const validationSchema = () => {
    return {
      email: Yup.string().email().required('Email is required'),
      password: Yup.string().required('The password is required'),
    };
  }