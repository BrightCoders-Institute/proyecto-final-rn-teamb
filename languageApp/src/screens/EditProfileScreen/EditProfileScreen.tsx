import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import { HeaderText } from '../../components/HeaderText/HeaderText';
import { AccountActionButton } from '../../components/AccountActionButton/AccountActionButton';
import * as Yup from 'yup';
import {useFormik} from 'formik';

interface UserProfile {
    email: string;
    password: string;
    name: string;
}

const EditProfile: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    
    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };

    const initialValues: UserProfile = {
        email: "example@gmail.com",
        password: "123456",
        name: "Name Example"
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

    return (
        <View style={styles.container}>
            <HeaderText header='Edit Profile' />
            <View style={styles.pfpContainer}>
                <View>
                    <Icon name='person-circle' size={100} style={{color: 'black'}}/>
                </View>
                <View style={styles.pfpLabels}>
                    <Text style={styles.pfpLabel}>Email</Text>
                    <Text style={styles.pfpLabelText}>{formik.values.email}</Text>
                    <Text style={styles.pfpLabel}>Name</Text>
                    <Text style={styles.pfpLabelText}>{formik.values.name}</Text>
                </View>
            </View>

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
                <IconMaterial name={showPassword ? 'visibility' : 'visibility-off'} size={20} color="#777" />
            </TouchableOpacity>
            </View>
            {formik.errors.password && (
                <Text style={styles.errorText}>{formik.errors.password}</Text>
            )}
            <TouchableOpacity style={styles.loginButton} onPress={formik.handleSubmit}>
            <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            <AccountActionButton title='Logout' />
            <AccountActionButton title='Delete Account' />
        </View>
    );
};

const validationSchema = () => {
    return {
        email: Yup.string().email().required('Email is required'),
        password: Yup.string().required('The password is required'),
    };
}

export default EditProfile;