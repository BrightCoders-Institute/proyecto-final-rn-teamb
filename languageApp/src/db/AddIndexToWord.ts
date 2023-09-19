import Snackbar from 'react-native-snackbar';
import {getVerbs} from './GetVerbs';

export const addIndexToWord = async () => {
  try {
    const res = await getVerbs({level: 'Advance', typeOfWord: 'Verb'});
    res?.forEach((item, index) => {
      item.ref.update({
        word_index: index + 1,
      });
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
