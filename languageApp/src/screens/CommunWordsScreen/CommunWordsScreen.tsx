import React from 'react';
import {View} from 'react-native';
import styles from './styles';
//components
import {HeaderText} from '../../components/HeaderText/HeaderText';
import {SectionButton} from '../../components/SectionButton/SectionButton';
//Navigator
import {NavigationProp} from '@react-navigation/native';

interface CommunWordsProps {
  navigation: NavigationProp<any>;
}

export const CommunWordsScreen: React.FC<CommunWordsProps> = ({navigation}) => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <HeaderText header="Choose your English level" />
      </View>
      <SectionButton
        title="Beginner"
        onPress={() => navigation.navigate('FlashCardsScreen')}
      />
      <SectionButton
        title="Intermediate"
        onPress={() => navigation.navigate('FlashCardsScreen')}
      />
      <SectionButton
        title="Advanced"
        onPress={() => navigation.navigate('FlashCardsScreen')}
      />
    </View>
  );
};
