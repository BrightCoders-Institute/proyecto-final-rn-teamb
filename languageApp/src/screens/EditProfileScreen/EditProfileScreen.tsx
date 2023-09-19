import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
//components
import {AccountActionButton} from '../../components/AccountActionButton/AccountActionButton';
import {BlueButton} from '../../components/BlueButton/BlueButton';
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

  return (
    <ScrollView style={styles.container}>
      <View style={styles.pfpContainer}>
        <View>
          <Icon name="person-circle" size={100} style={{color: '#012030'}} />
        </View>
        <View style={styles.pfpLabels}>
          <Text style={styles.pfpLabel}>Email</Text>
          <Text style={styles.pfpLabelText}>{formik.values.email}</Text>
          <Text style={styles.pfpLabel}>Name</Text>
          <Text style={styles.pfpLabelText}>{formik.values.name}</Text>
        </View>
      </View>

      <BlueButton
        title="Change Password"
        onPress={() => navigation.navigate('UpdatePasswordScreen')}
      />
      <AccountActionButton title="Log Out" />
    </ScrollView>
  );
};

export default EditProfile;
