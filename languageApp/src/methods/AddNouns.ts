import firestore from '@react-native-firebase/firestore';
import axios from 'axios';

export const getNounsInfo = async (word) => {
    try {
        const { data } = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        const {phonetics, meanings} = data[0]
        let audio = '';
        for(const phonetic of phonetics) {
            if (phonetic.audio.includes("https")){
                audio = phonetic.audio;
            }
        }
        const wordInfo = {
            "name": word,
            "audio": audio,
            "description": meanings[0].definitions[0].definition,
            "level": "Not_Level",
            "typeOfWord": "Noun"
        }
        // console.log(word)
        // console.log(wordInfo)
        await addWord(wordInfo);
    } catch (error) {
        console.log(error)
    }
}

const addWord = async (
  {name, audio, description, level, typeOfWord}
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
