import React from 'react';
import {View} from 'react-native';
//components
import {HeaderText} from '../../components/HeaderText/HeaderText';
import {DescriptionText} from '../../components/DescriptionText/DescriptionText';
import {SectionButton} from '../../components/SectionButton/SectionButton';

export const ResourcesScreen = () => {
  return (
    <View>
      <HeaderText header={'Do you want to practice other skills?'} />
      <DescriptionText description={'Checkout this resources!'} />
      <SectionButton title={'Music'} onPress={() => {}} />
      <SectionButton title={'Podcast'} onPress={() => {}} />
      <SectionButton title={'To read'} onPress={() => {}} />
    </View>
  );
};
