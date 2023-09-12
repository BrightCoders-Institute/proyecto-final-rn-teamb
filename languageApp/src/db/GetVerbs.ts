import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';
import { GetWord } from '../interfaces/GetWordsInterface';


export const getVerbs = async (
  {level, typeOfWord}: GetWord
) => {
  try {
    console.log("Se ejecuto")
    const getWord = await firestore()
    .collection('Word')
    .where("level", '==', level)
    .where("typeOfWord", '==', typeOfWord)
    .get()
    return getWord
  } catch (error) {
    console.error(error);
  }
};
