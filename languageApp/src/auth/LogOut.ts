import auth from '@react-native-firebase/auth';
export const logout = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };
  