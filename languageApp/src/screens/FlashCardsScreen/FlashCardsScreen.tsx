import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
//components
import {HeaderText} from '../../components/HeaderText/HeaderText';
import {DescriptionText} from '../../components/DescriptionText/DescriptionText';
import {FlashCard} from '../../components/FlashCard/FlashCard';
import {FlashcardStates} from '../../components/FlashcardStates/FlashcardStates';

export const FlashCardsScreen = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.flashCardText}>FLASHCARDS</Text>
      </View>
      <DescriptionText description={'Words 9'} />
      <HeaderText header={'Do you know this word?'} />
      <FlashCard faceText={'Apple'} backText={'Manzana'} />
      <View style={styles.statesContainer}>
        <FlashcardStates />
      </View>
    </View>
  );
};
