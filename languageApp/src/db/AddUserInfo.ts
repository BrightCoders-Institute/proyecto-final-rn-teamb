import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';
import {NavigationType} from '../../types/NavigationType';

export const addUserInfo = (
  {uid, displayName, email}: FirebaseAuthTypes.User,
  navigation: NavigationType,
  name?: string,
) => {
  if (name !== undefined) displayName = name;
  firestore()
    .collection('Users')
    .doc(uid)
    .set({
      firstName: displayName,
      email: email,
      uid: uid,
    })
    .then(() => {
      Alert.alert('User added succesfully');
      //navigation.navigate('MyFlight');
    })
    .catch(error => console.log(error));
};