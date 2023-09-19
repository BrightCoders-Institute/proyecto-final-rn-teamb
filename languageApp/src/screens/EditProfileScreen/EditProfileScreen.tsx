import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
//components
import {AccountActionButton} from '../../components/AccountActionButton/AccountActionButton';
import {BlueButton} from '../../components/BlueButton/BlueButton';
import {LogOut} from '../../auth/LogOut';
//navigation
import {NavigationProp} from '@react-navigation/native';
//redux
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/reducers';
import {setEmail, setName} from '../../store/userSlice';
import {useFormik} from 'formik';

interface EditProfileProps {
  navigation: NavigationProp<any>;
}

interface UserProfile {
  email: string;
  name: string;
}

const EditProfile: React.FC<EditProfileProps> = ({navigation}) => {
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
    onSubmit: async formValue => {
      dispatch(setName(formValue.name));
      dispatch(setEmail(formValue.email));
    },
  });

  const handleLogout = async () => {
    try {
      await LogOut({navigation});
      navigation.navigate('PrincipalScreen');
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Icon name="person-circle" size={100} style={{color: '#012030'}} />

      <Text style={styles.label}>Email</Text>
      <Text style={styles.email}>{formik.values.email}</Text>
      <Text style={styles.label}>Name</Text>
      <Text style={styles.name}>{formik.values.name}</Text>

      <BlueButton
        title="Change Password"
        onPress={() => navigation.navigate('UpdatePasswordScreen')}
      />
      <AccountActionButton title="Log Out" onPress={handleLogout} />
    </View>
  );
};

export default EditProfile;
