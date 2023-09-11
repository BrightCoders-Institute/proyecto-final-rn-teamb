import auth from '@react-native-firebase/auth';
export const deleteAccount = async () => {
  try {
    const user = auth().currentUser;
    if (user) {
      console.log("AWAITING FOR DELETION")
    } else {
      console.error('No user is currently signed in.');
    }
  } catch (error) {
    console.error('Error deleting account:', error.message);
  }
};
