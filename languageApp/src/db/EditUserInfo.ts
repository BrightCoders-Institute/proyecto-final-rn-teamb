import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth'; // Import the auth function

// Modify the editUserInfo function to accept the new email and password
export const editUserInfo = async (
  { uid, displayName, email }: FirebaseAuthTypes.User,
  name?: string,
  newEmail?: string,
  newPassword?: string, // Add a parameter for the new password
) => {
  if (name !== undefined) displayName = name;
  try {
    const currentUser = auth().currentUser;
    console.log('Current User:', currentUser); // Add this line to log the current user

    // Create an object to update in Firestore
    const updateData: { [key: string]: string } = {
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
    console.log(error);
  }
};
