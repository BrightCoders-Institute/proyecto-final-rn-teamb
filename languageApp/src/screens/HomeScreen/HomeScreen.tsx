import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
//components
import {HeaderText} from '../../components/HeaderText/HeaderText';
import {SectionButton} from '../../components/SectionButton/SectionButton';

export const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.greetings}>Hi there!</Text>
      <HeaderText header="What do you want to learn today?" />
      <SectionButton title="Search Words" onPress={() => {}} />
      <SectionButton title="Verbs" onPress={() => {}} />
      <SectionButton title="Commun words" onPress={() => {}} />
    </View>
  );
};
