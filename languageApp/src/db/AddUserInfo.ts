import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';
import Snackbar from 'react-native-snackbar';

export const addUserInfo = async (
  {uid, displayName, email}: FirebaseAuthTypes.User,
  name?: string,
) => {
  if (name !== undefined) displayName = name;
  try {
    const result = await firestore().collection('Users').doc(uid).set({
      firstName: displayName,
      email: email,
      uid: uid,
    });
    const getUser = await firestore().collection('Users').doc(uid).get();
    if (getUser.exists) {
      Alert.alert('User added');
    }
    return getUser.data();
  } catch (error) {
    Snackbar.show({
      text: "Something were wrong try later",
      duration: Snackbar.LENGTH_INDEFINITE,
      action: {
          text: 'UNDO',
          textColor: 'red',
      },
  });
  }
};
