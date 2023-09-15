import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

export const addUserInfo = async (
  {uid, displayName, email}: FirebaseAuthTypes.User,
  name?: string,
) => {
  if (name !== undefined) displayName = name;
  try {
    console.log("THE ADD IS USER INFORING")
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
    console.log(error);
  }
};
