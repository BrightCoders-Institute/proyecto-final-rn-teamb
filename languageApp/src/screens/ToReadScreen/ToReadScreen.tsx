import React from 'react';
import {View} from 'react-native';
//components
import {HeaderText} from '../../components/HeaderText/HeaderText';
import {DescriptionText} from '../../components/DescriptionText/DescriptionText';
import {ToReadCard} from '../../components/ToReadCard/ToReadCard';
//navigation
import {NavigationProp} from '@react-navigation/native';

interface ToReadProps {
  navigation: NavigationProp<any>;
}

export const ToReadScreen: React.FC<ToReadProps> = ({navigation}) => {
  return (
    <View>
      <HeaderText header={'Reading practice'} />
      <DescriptionText
        description={
          'Reading is a powerful way to enhance your vocabulary, grammar, and reading comprehension skills!'
        }
      />
      <ToReadCard
        title={"The Wolf in Sheep's Clothing"}
        author={"Aesop's Fables"}
        moral={'The evil doer often comes to harm through his own deceit.'}
        onPress={() => navigation.navigate('StoryScreen')}
      />
    </View>
  );
};
