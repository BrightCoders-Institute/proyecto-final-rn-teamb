import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const getUserInformation = async () => {
  try {
    const current_user = auth().currentUser;
    const result = await firestore().collection('Users').doc(current_user?.uid).get();
    const user_data = await result.data();
    return user_data;
    
} catch (error) {
    console.log(error);
}
};
