import React from 'react';
import {View} from 'react-native';
//components
import {HeaderText} from '../../components/HeaderText/HeaderText';
import {DescriptionText} from '../../components/DescriptionText/DescriptionText';
import {ListeningCard} from '../../components/ListeningCard/ListeningCard';

export const ToReadScreen = () => {
  return (
    <View>
      <HeaderText header={'Reading practice'} />
      <DescriptionText
        description={
          'Reading is a powerful way to enhance your vocabulary, grammar, and reading comprehension skills!'
        }
      />
      <ListeningCard name={'August'} author={'TaylorSwift'} />
      <ListeningCard name={'August'} author={'TaylorSwift'} />
      <ListeningCard name={'August'} author={'TaylorSwift'} />
      <ListeningCard name={'August'} author={'TaylorSwift'} />
    </View>
  );
};
