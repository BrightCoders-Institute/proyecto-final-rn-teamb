import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';

export const getUserInformation = async () => {
  try {
    const current_user = auth().currentUser;
    const result = await firestore().collection('Users').doc(current_user?.uid).get();
    const user_data = await result.data();
    return user_data;
    
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
