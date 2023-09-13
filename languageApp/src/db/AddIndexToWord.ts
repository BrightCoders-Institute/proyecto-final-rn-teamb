import { getVerbs } from './GetVerbs';


export const addIndexToWord = async () => {
  try {
    const res = await getVerbs({level: 'Advance', typeOfWord: 'Verb'})
    res?.forEach((item, index) => {
        item.ref.update({
            word_index: index + 1
        })
    })
  } catch (error) {
    console.error(error);
  }
}