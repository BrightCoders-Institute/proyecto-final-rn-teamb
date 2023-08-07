import React from 'react';
import {View} from 'react-native';
//components
import {HeaderText} from '../../components/HeaderText/HeaderText';
import {DescriptionText} from '../../components/DescriptionText/DescriptionText';
import {ListeningCard} from '../../components/ListeningCard/ListeningCard';

export const ListeningSongsScreen = () => {
  return (
    <View>
      <HeaderText header={'Listening practice'} />
      <DescriptionText
        description={
          'Listening to music is a fantastic way to learn new words and their pronunciation!'
        }
      />
      <ListeningCard name={'August'} author={'TaylorSwift'} />
      <ListeningCard name={'August'} author={'TaylorSwift'} />
      <ListeningCard name={'August'} author={'TaylorSwift'} />
      <ListeningCard name={'August'} author={'TaylorSwift'} />
    </View>
  );
};
