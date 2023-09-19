import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';

interface SignIpInterface {
  email: string;
  password: string;
}

export const signIn = async ({email, password}: SignIpInterface) => {
  try {
    const {user} = await auth().signInWithEmailAndPassword(email, password);
    const result = await firestore().collection('Users').doc(user.uid).get();
    return result.data();
  } catch (error) {
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
