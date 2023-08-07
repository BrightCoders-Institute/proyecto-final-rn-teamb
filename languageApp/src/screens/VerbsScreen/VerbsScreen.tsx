import React from 'react';
import {View} from 'react-native';
import styles from './styles';
//components
import {HeaderText} from '../../components/HeaderText/HeaderText';
import {SectionButton} from '../../components/SectionButton/SectionButton';

export const VerbsScreen = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <HeaderText header="Choose your English level" />
      </View>
      <SectionButton title="Beginner" onPress={() => {}} />
      <SectionButton title="Intermediate" onPress={() => {}} />
      <SectionButton title="Advanced" onPress={() => {}} />
    </View>
  );
};
