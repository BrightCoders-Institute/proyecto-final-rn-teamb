import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import axios from 'axios';
//components
import {HeaderText} from '../../components/HeaderText/HeaderText';
import {DescriptionText} from '../../components/DescriptionText/DescriptionText';
import {Story} from '../../interfaces/CardsInterfaces';
import CardList from '../../components/CardList/CardList';
//navigation
import {NavigationProps} from '../../interfaces/NavigationInterface';

export const ToReadScreen: React.FC<NavigationProps> = ({navigation}) => {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    axios
      .get('https://shortstories-api.onrender.com/stories')
      .then(response => {
        const apiStories: Story[] = response.data;
        setStories(apiStories);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <View>
      <HeaderText header={'Reading practice'} />
      <DescriptionText
        description={
          'Reading is a powerful way to enhance your vocabulary, grammar, and reading comprehension skills!'
        }
      />
      <CardList storyData={stories} navigation={navigation} />
    </View>
  );
};
