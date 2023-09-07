import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
//components
import {HeaderText} from '../../components/HeaderText/HeaderText';
import {SectionButton} from '../../components/SectionButton/SectionButton';
//Navigator
import {NavigationProp} from '@react-navigation/native';

interface HomeProps {
  navigation: NavigationProp<any>;
}

export const HomeScreen: React.FC<HomeProps> = ({navigation}) => {
  return (
    <View>
      <Text style={styles.greetings}>Hi there!</Text>
      <HeaderText header="What do you want to learn today?" />
      <SectionButton
        title="Search Words"
        onPress={() => navigation.navigate('SearchWords')}
      />
      <SectionButton
        title="Verbs"
        onPress={() => navigation.navigate('VerbsScreen')}
      />
      <SectionButton
        title="Commun words"
        onPress={() => navigation.navigate('CommunWordsScreen')}
      />
    </View>
  );
};
