import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import axios from 'axios';
//components
import {HeaderText} from '../../components/HeaderText/HeaderText';
import {DescriptionText} from '../../components/DescriptionText/DescriptionText';
import {Story} from '../../interfaces/CardsInterfaces';
import CardList from '../../components/CardList/CardList';
import Loader from '../../components/Loader/Loader';
//navigation
import {NavigationProps} from '../../interfaces/NavigationInterface';
import Snackbar from 'react-native-snackbar';

export const ToReadScreen: React.FC<NavigationProps> = ({navigation}) => {
  const [stories, setStories] = useState<Story[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://shortstories-api.onrender.com/stories')
      .then(response => {
        const apiStories: Story[] = response.data;
        setStories(apiStories);
        setIsLoading(false);
      })
      .catch(error => {
        Snackbar.show({
          text: 'Something were wrong try later',
          duration: Snackbar.LENGTH_INDEFINITE,
          action: {
            text: 'UNDO',
            textColor: 'red',
          },
        });
        setIsLoading(false);
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
      {isLoading ? (
        <Loader />
      ) : (
        <CardList storyData={stories} navigation={navigation} />
      )}
    </View>
  );
};
