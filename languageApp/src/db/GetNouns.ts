import firestore from '@react-native-firebase/firestore';
import Snackbar from 'react-native-snackbar';


export const getNouns = async () => {
  try {
    console.log("Se ejecuto")
    const getWord = await firestore()
    .collection('Word')
    .where("level", '==', "Not_Level")
    .where("typeOfWord", '==', "Noun")
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
