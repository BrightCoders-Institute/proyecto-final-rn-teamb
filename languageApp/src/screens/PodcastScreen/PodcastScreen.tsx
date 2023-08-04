import React from 'react';
import {View} from 'react-native';
//components
import {HeaderText} from '../../components/HeaderText/HeaderText';
import {DescriptionText} from '../../components/DescriptionText/DescriptionText';
import {ListeningCard} from '../../components/ListeningCard/ListeningCard';

export const PodcastScreen = () => {
  return (
    <View>
      <HeaderText header={'Listening practice'} />
      <DescriptionText
        description={
          'Podcasts help you learn about your favorite topics and hear different accents!'
        }
      />
      <ListeningCard name={'August'} author={'TaylorSwift'} />
      <ListeningCard name={'August'} author={'TaylorSwift'} />
      <ListeningCard name={'August'} author={'TaylorSwift'} />
      <ListeningCard name={'August'} author={'TaylorSwift'} />
    </View>
  );
};
