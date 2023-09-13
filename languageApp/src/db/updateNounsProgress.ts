import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';

export const updateNounsProgress = async (learned_word:string) => {
  try {
    const current_user = auth().currentUser;
    const result = await firestore().collection('Users').doc(current_user?.uid).get();
    const user_data = await result.data();
    const total_learned_words = user_data?.nouns_progress
    total_learned_words.push(learned_word)
    
    result.ref.update({
        nouns_progress: total_learned_words
    })
    
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
