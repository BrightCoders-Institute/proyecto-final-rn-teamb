import firestore from '@react-native-firebase/firestore';
import axios from 'axios';
import Snackbar from 'react-native-snackbar';

export const getNounsInfo = async word => {
  try {
    const {data} = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
    );
    const {phonetics, meanings} = data[0];
    let audio = '';
    for (const phonetic of phonetics) {
      if (phonetic.audio.includes('https')) {
        audio = phonetic.audio;
      }
    }
    const wordInfo = {
      name: word,
      audio: audio,
      description: meanings[0].definitions[0].definition,
      level: 'Not_Level',
      typeOfWord: 'Noun',
    };
    await addWord(wordInfo);
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

const addWord = async ({name, audio, description, level, typeOfWord}) => {
  try {
    await firestore().collection('Word').add({
      name,
      audio,
      description,
      level,
      typeOfWord,
    });
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
