import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {addUserInfo} from '../db/AddUserInfo';
import {NavigationType} from '../../types/NavigationType';

interface SignUpInterface {
  name: string;
  email: string;
  password: string;
}

export const signup = async ({name, email, password}: SignUpInterface) =>
  //navigation?: NavigationType,
  {
    try {
      const {user} = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      const userRegistered = addUserInfo(user, name);
      return userRegistered;
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('The email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        Alert.alert('The email address is invalid!');
      }
    }
  };
