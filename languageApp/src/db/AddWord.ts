import firestore from '@react-native-firebase/firestore';
import Snackbar from 'react-native-snackbar';

interface WordInterface {
    name: string;
    audio: string;
    description: string;
    level: string;
    typeOfWord:string;
}

export const addWord = async (
  {name, audio, description, level, typeOfWord}: WordInterface
) => {
  try {
    await firestore().collection('Word').add({
        name,
        audio,
        description,
        level,
        typeOfWord
    });
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
