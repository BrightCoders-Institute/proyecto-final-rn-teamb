import {Alert} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

interface SignOutInterface {
  navigation: NavigationProp<any>;
}

export const LogOut = async ({navigation}: SignOutInterface) => {
  try {
    const currentUser = auth().currentUser;
    if (currentUser) {
      await auth().signOut();
      navigation.navigate('PrincipalScreen');
    } else {
    }
  } catch (error) {
    console.error('Sign Out Error:', error);
    Alert.alert(
      'Error',
      'An error occurred while signing out. Please try again.',
    );
  }
};
