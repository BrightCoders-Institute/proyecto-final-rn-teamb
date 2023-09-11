import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationProp } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { setEmail, setName } from '../../store/userSlice';
import { updateInfo } from '../../auth/UpdateInfo';
import { deleteAccount } from '../../db/DeleteAccount';
import { logout } from '../../auth/LogOut';
import styles from './styles';
import * as Yup from 'yup';
import { useFormik } from 'formik';

interface EditProfileProps {
  navigation: NavigationProp<any>;
}

interface UserProfile {
  email: string;
  name: string;
}

const EditProfile: React.FC<EditProfileProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { email, name }: UserProfile = useSelector(
    (state: RootState) => state.data
  );

  const initialValues: UserProfile = {
    email: email,
    name: name,
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: true,
    onSubmit: async (formValue) => {
      // Update the user profile with new values
      dispatch(setName(formValue.name));
      dispatch(setEmail(formValue.email));

      console.log("FORM VALUE", formValue)

      // Use the updateInfo function for updating user profiles
      try {
        await updateInfo(formValue);
        // Handle success or display any appropriate messages
      } catch (error) {
        console.error('Error updating user info:', error);
        // Handle the error, show a message, etc.
      }
    },
  });

  const handleDeleteAccount = async () => {
    await deleteAccount();
    navigation.navigate("PrincipalScreen");
  };

  const handleLogOutAccount = async () => {
    await logout();
    navigation.navigate("PrincipalScreen");
  };

  return (
    <ScrollView style={styles.container}>

      <View style={styles.pfpContainer}>
        <View>
          <Icon name="person-circle" size={100} style={{ color: 'black' }} />
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
        onChangeText={(text) => formik.setFieldValue('email', text)}
      />
      {formik.errors.email && (
        <Text style={styles.errorText}>{formik.errors.email}</Text>
      )}
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={formik.values.name}
        onChangeText={(text) => formik.setFieldValue('name', text)}
      />
      {formik.errors.name && (
        <Text style={styles.errorText}>{formik.errors.name}</Text>
      )}

      <TouchableOpacity style={styles.loginButton} onPress={formik.handleSubmit}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleDeleteAccount}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogOutAccount}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('UpdatePasswordScreen')}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

const validationSchema = () => {
  return {
    email: Yup.string().email().required('Email is required'),
    name: Yup.string().required('The name is required'),
  };
};

export default EditProfile;
