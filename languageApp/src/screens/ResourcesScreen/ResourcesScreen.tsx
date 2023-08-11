import React from 'react';
import {View} from 'react-native';
//components
import {HeaderText} from '../../components/HeaderText/HeaderText';
import {DescriptionText} from '../../components/DescriptionText/DescriptionText';
import {SectionButton} from '../../components/SectionButton/SectionButton';
//Navigator
import {NavigationProp} from '@react-navigation/native';

interface ResourcesScreenProp {
  navigation: NavigationProp<any>;
}

export const ResourcesScreen: React.FC<ResourcesScreenProp> = ({
  navigation,
}) => {
  return (
    <View>
      <HeaderText header={'Do you want to practice other skills?'} />
      <DescriptionText description={'Checkout this resources!'} />
      <SectionButton
        title={'Music'}
        onPress={() => {
          navigation.navigate('ListeningSongsScreen');
        }}
      />
      <SectionButton
        title={'Podcast'}
        onPress={() => navigation.navigate('PodcastScreen')}
      />
      <SectionButton
        title={'To read'}
        onPress={() => navigation.navigate('ToReadScreen')}
      />
    </View>
  );
};
