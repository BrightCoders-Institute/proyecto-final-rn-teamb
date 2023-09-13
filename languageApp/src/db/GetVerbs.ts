import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';
import { GetWord } from '../interfaces/GetWordsInterface';
import Snackbar from 'react-native-snackbar';


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
