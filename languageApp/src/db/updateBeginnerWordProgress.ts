import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const updateBeginnerWordProgress = async (learned_word:number) => {
  try {
    const current_user = auth().currentUser;
    const result = await firestore().collection('Users').doc(current_user?.uid).get();
    const user_data = await result.data();
    const total_learned_words = user_data?.beginner_progress
    total_learned_words.push(learned_word)
    
    result.ref.update({
        beginner_progress: total_learned_words
    })
    
} catch (error) {
    console.log(error);
}
};
