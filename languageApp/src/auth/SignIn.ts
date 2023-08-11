import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {NavigationType} from '../../types/NavigationType';

interface SignIpInterface {
  email: string;
  password: string;
}

export const signIn = async (
  {email, password}: SignIpInterface,
  navigation?: NavigationType,
) => {
  try {
    const {user} = await auth().signInWithEmailAndPassword(email, password);
    Alert.alert('Login')
  } catch (error) {
    console.log(error);
    if (error.code === 'auth/user-not-found') {
      Alert.alert('There is no user record corresponding to this identifier');
    }

    if (error.code === 'auth/wrong-password') {
      Alert.alert(
        'The password is invalid or the user does not have a password',
      );
    }
  }
};