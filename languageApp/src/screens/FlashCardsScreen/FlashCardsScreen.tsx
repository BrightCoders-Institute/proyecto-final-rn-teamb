import React, { useEffect, useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
//components
import {HeaderText} from '../../components/HeaderText/HeaderText';
import {DescriptionText} from '../../components/DescriptionText/DescriptionText';
import {FlashCard} from '../../components/FlashCard/FlashCard';

//db
import { getVerbs } from '../../db/GetVerbs';
import { updateBeginnerWordProgress } from '../../db/updateBeginnerWordProgress';
import { updateIntermediateWordProgress } from '../../db/updateIntermediateWordProgress';
import { updateAdvanceWordProgress } from '../../db/updateAdvanceWordProgress';

//icons
import YesIcon from '../../components/Icon/YesIcon';
import NoIcon from '../../components/Icon/NoIcon';

export const FlashCardsScreen = ({route}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [wordData, setWordData] = useState([]);

  useEffect(() => {
    const verbs = async () => {
      try {
        const {docs} = await getVerbs({level: route.params[0], typeOfWord: 'Verb'})
        const learned_words = route.params[1];
        let words = []
        for(const doc of docs) {
          const data = doc.data();
          let isLearned = true;
          for(const learned_word of learned_words) {
            if(data.word_index === learned_word){
              isLearned = false
              break
            }
          }
          
          if (isLearned) {
            words.push(data)
          }
        }
        setWordData(words)
        setIsLoading(false)
      } catch (error) {
        console.error(error);
      }
    };

    verbs();
  }, []);

  return (
    // Todo Implement loading page
    isLoading ? (<Text> is loading </Text>) :
    <View>
    <View style={styles.headerContainer}>
      <Text style={styles.flashCardText}>{route.params[0]}</Text>
    </View>
    <DescriptionText description={'Words 9'} />
    <HeaderText header={'Do you know this word?'} />
    <FlashCard faceText={wordData[0].name} backText={wordData[0].description} />
    <View style={styles.statesContainer}>
      <View style={styles.container}>
        <View style={styles.noCard}>
          <TouchableOpacity onPress={() => {
          setWordData(wordData.slice(1))
          }}>
            <NoIcon />
            <Text style={styles.text}>No</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.yesCard}>
          <TouchableOpacity onPress={() => {
            if(route.params[0] === 'Beginner'){
              updateBeginnerWordProgress(wordData[0].word_index)
            }
            else if(route.params[0] === 'Intermediate'){
              updateIntermediateWordProgress(wordData[0].word_index)
            }
            else if(route.params[0] === 'Advance'){
              updateAdvanceWordProgress(wordData[0].word_index)
            }

            setWordData(wordData.slice(1))
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
