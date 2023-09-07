import React from 'react';
import {View} from 'react-native';
import styles from './styles';
//components
import SearchWordsBar from '../../components/SearchWordsBar/SearchWordsBar';
//components
import {HeaderText} from '../../components/HeaderText/HeaderText';
import SearchImage from '../../components/Icon/SearchImage';
import {WordCard} from '../../components/WordCard/WordCard';

export const SearchWords = () => {
  return (
    <View style={styles.container}>
      <SearchWordsBar />
      <View style={styles.bodyContainer}>
        <HeaderText header="What word you’r looking for?" />
        <SearchImage />
      </View>
    </View>
  );
};
