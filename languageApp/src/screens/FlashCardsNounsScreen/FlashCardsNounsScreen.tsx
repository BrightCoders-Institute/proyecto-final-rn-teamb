import React, {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
//components
import {HeaderText} from '../../components/HeaderText/HeaderText';
import {DescriptionText} from '../../components/DescriptionText/DescriptionText';
import {FlashCard} from '../../components/FlashCard/FlashCard';

//db
import {getNouns} from '../../db/GetNouns';
import {updateNounsProgress} from '../../db/updateNounsProgress';
import {getUserInformation} from '../../db/GetUserInformation';

//icons
import YesIcon from '../../components/Icon/YesIcon';
import NoIcon from '../../components/Icon/NoIcon';
// Redux
import {useDispatch, useSelector} from 'react-redux';
import {setNouns_progress} from '../../store/userSlice';
import Loader from '../../components/Loader/Loader';
import {RootState} from '../../store/reducers';
import Snackbar from 'react-native-snackbar';

export const FlashCardsNounsScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [wordData, setWordData] = useState([]);
  const [sessonLearnedWords, setSessonLearnedWords] = useState(0);

  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const {nouns_progress} = useSelector((state: RootState) => state.data);

  useEffect(() => {
    const getinformation = async () => {
      try {
        const userInformation = await getUserInformation();
        const {docs} = await getNouns();
        const learned_words = userInformation?.nouns_progress;
        const words = [];
        for (const doc of docs) {
          const data = doc.data();
          let isLearned = true;
          for (const learned_word of learned_words) {
            if (data.name === learned_word) {
              isLearned = false;
              break;
            }
          }

          if (isLearned) {
            words.push(data);
          }
        }
        setWordData(words);
        setIsLoading(false);
        dispatch(setNouns_progress(userInformation?.nouns_progress));
        setSessonLearnedWords(nouns_progress.length);
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
    getinformation();
  }, [isFocused]);

  return isLoading ? (
    <Loader />
  ) : (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.flashCardText}>{'Nouns'}</Text>
      </View>
      <DescriptionText description={`Progress Words: ${sessonLearnedWords}`} />
      <HeaderText header={'Do you know this word?'} />
      <FlashCard
        faceText={wordData[0].name}
        backText={wordData[0].description}
      />
      <View style={styles.statesContainer}>
        <View style={styles.container}>
          <View style={styles.noCard}>
            <TouchableOpacity
              onPress={() => {
                setWordData(wordData.slice(1));
              }}>
              <NoIcon />
              <Text style={styles.text}>No</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.yesCard}>
            <TouchableOpacity
              onPress={() => {
                updateNounsProgress(wordData[0].name);
                setSessonLearnedWords(sessonLearnedWords + 1);
                setWordData(wordData.slice(1));
              }}>
              <YesIcon />
              <Text style={styles.text}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
