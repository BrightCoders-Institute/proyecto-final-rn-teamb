import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {NavigationProp} from '@react-navigation/native';

interface SignOutInterface {
  email: string;
  password: string;
  navigation: NavigationProp<any>;
}

export const LogOut = async ({
  email,
  password,
  navigation,
}: SignOutInterface) => {
  try {
    const {user} = await auth().signInWithEmailAndPassword(email, password);
    const result = await firestore().collection('Users').doc(user.uid).get();
    if (result.exists) {
      await auth().signOut();
      navigation.navigate('PrincipalScreen');
      console.log('Sign Out', 'You have been successfully signed out.');
    }
  } catch (error) {
    console.error('Sign Out Error:', error);
    Alert.alert(
      'Error',
      'An error occurred while signing out. Please try again.',
    );
  }
};
