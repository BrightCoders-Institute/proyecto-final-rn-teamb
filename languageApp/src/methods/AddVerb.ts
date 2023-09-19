const axios = require('axios');
const sleep = function (ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const result = [];
const getVerbInfo = async word => {
  try {
    await sleep(500);
    const {data} = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word[0]}`,
    );
    const {phonetics, meanings} = data[0];
    let audio = '';
    for (const phonetic of phonetics) {
      if (phonetic.audio.includes('https')) {
        audio = phonetic.audio;
        result.push(word);
      }
    }
    const wordInfo = {
      name: word[0],
      audio: audio,
      description: word[1],
      level: 'Beginner',
      typeOfWord: 'Verb',
    };
  } catch (error) {
    console.log(error);
  }
};
