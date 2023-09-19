import React, {useEffect, useLayoutEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationProp} from '@react-navigation/native';
import styles from './styles';
import {HeaderText} from '../../components/HeaderText/HeaderText';
import {AccountActionButton} from '../../components/AccountActionButton/AccountActionButton';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/reducers';
import {setEmail, setName} from '../../store/userSlice';
import {updateInfo} from '../../auth/UpdateInfo'; // Import the updateInfo function for updating user info
import Snackbar from 'react-native-snackbar';

// Update the UserProfile interface to include uid
interface EditProfileProps {
  navigation: NavigationProp<any>;
}

interface UserProfile {
  email: string;
  name: string;
}

const EditProfile: React.FC = ({navigation}) => {
  const dispatch = useDispatch();
  const {email, name}: UserProfile = useSelector(
    (state: RootState) => state.data,
  );

  const initialValues: UserProfile = {
    email: email,
    name: name,
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: true,
    onSubmit: async formValue => {
      // Update the user profile with new values
      dispatch(setName(formValue.name));
      dispatch(setEmail(formValue.email));

      // Use the updateInfo function for updating user profiles
      try {
        await updateInfo(formValue); // This will update the user's profile
        // Handle success or display any appropriate messages
      } catch (error) {
        Snackbar.show({
          text: 'Something were wrong try later',
          duration: Snackbar.LENGTH_INDEFINITE,
          action: {
            text: 'UNDO',
            textColor: 'red',
          },
        });
      }
    },
  });

  useEffect(() => {
    const parentNav = navigation.getParent();
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      parentNav.setOptions({
        tabBarStyle: {display: 'none'},
      });
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      parentNav.setOptions({
        tabBarStyle: {
          display: 'flex',
          backgroundColor: '#012030',
          height: 60,
        },
      });
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.pfpContainer}>
        <View>
          <Icon name="person-circle" size={100} style={{color: 'black'}} />
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
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={formik.values.name}
        onChangeText={text => formik.setFieldValue('name', text)}
      />
      {formik.errors.name && (
        <Text style={styles.errorText}>{formik.errors.name}</Text>
      )}

      <TouchableOpacity
        style={styles.loginButton}
        onPress={formik.handleSubmit}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('UpdatePasswordScreen')}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>

      <AccountActionButton title="Logout" />
      <AccountActionButton title="Delete Account" />
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
