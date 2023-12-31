import auth from '@react-native-firebase/auth';
import {editUserInfo} from '../db/EditUserInfo'; // Import the new editUserInfo function
import Snackbar from 'react-native-snackbar';

interface UpdateInfoInterface {
  name: string;
  email: string;
  uid: string; // Add UID to the interface for editing user info
}

export const updateInfo = async ({name, email, uid}: UpdateInfoInterface) => {
  try {
    const user = auth().currentUser;

    if (user) {
      // Ensure the current user is authenticated

      // Instead of addUserInfo, use editUserInfo for editing user info
      const updatedUser = await editUserInfo(user, name, email); // Pass both name and email
      return updatedUser;
    }
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
