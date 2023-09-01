import firestore from '@react-native-firebase/firestore';

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
    console.log(error);
  }
};
