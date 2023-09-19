import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import styles from './styles';
//components
import SearchWordsBar from '../../components/SearchWordsBar/SearchWordsBar';
//components
import {HeaderText} from '../../components/HeaderText/HeaderText';
import SearchImage from '../../components/Icon/SearchImage';
import {WordCard} from '../../components/WordCard/WordCard';

export const SearchWords = () => {
  const [wordData, setWordData] = useState<{
    word: string;
    definition: string | string[];
  } | null>(null);

  const handleWordData = (word: string, definition: string | string[]) => {
    setWordData({word, definition});
  };
  return (
    <View style={styles.container}>
      <SearchWordsBar wordData={handleWordData} />
      <ScrollView>
        <View style={styles.bodyContainer}>
          {wordData ? (
            <>
              <HeaderText
                header={`Definitions of the word "${wordData.word}"`}
              />
              <WordCard word={wordData.word} definition={wordData.definition} />
            </>
          ) : (
            <>
              <HeaderText header="What word you’r looking for?" />
              <SearchImage />
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};
