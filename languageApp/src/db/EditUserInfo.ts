import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth'; // Import the auth function
import Snackbar from 'react-native-snackbar';

// Modify the editUserInfo function to accept the new email and password
export const editUserInfo = async (
  {uid, displayName, email}: FirebaseAuthTypes.User,
  name?: string,
  newEmail?: string,
  newPassword?: string, // Add a parameter for the new password
) => {
  if (name !== undefined) displayName = name;
  try {
    const currentUser = auth().currentUser;

    // Create an object to update in Firestore
    const updateData: {[key: string]: string} = {
      firstName: displayName,
    };

    if (newEmail !== undefined) {
      updateData.email = newEmail; // Include the new email if provided
    }

    await firestore().collection('Users').doc(uid).update(updateData);

    if (newPassword) {
      await currentUser?.updatePassword(newPassword);
    }

    const updatedUser = await firestore().collection('Users').doc(uid).get();
    if (updatedUser.exists) {
      Alert.alert('User information updated');
    }

    return updatedUser.data();
  } catch (error) {
    Snackbar.show({
      text: 'Something were wrong try later',
      duration: Snackbar.LENGTH_INDEFINITE,
      action: {
        text: 'UNDO',
        textColor: 'red',
      },
    });
  }
};
