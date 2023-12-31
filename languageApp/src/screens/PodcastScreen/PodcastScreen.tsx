import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
//components
import {HeaderText} from '../../components/HeaderText/HeaderText';
import {DescriptionText} from '../../components/DescriptionText/DescriptionText';
import Loader from '../../components/Loader/Loader';
import {PodcastEpisode} from '../../interfaces/CardsInterfaces';
import CardList from '../../components/CardList/CardList';
//navigation
import {useAccessToken} from '../../navigation/AccessTokenContent';
import {NavigationProps} from '../../interfaces/NavigationInterface';

export const PodcastScreen: React.FC<NavigationProps> = ({navigation}) => {
  const accessToken = useAccessToken();
  const [randomEpisodes, setRandomEpisodes] = useState<PodcastEpisode[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getRandomEpisodes = async (count: number) => {
    try {
      const episodes: PodcastEpisode[] = [];

      for (let i = 0; i < count; i++) {
        const randomLetter = getRandomLetter();
        const randomOffset = getRandomNumber(1, 2);

        const response = await fetch(
          `https://api.spotify.com/v1/search?q=${randomLetter}&type=show&market=US&limit=1&offset=${randomOffset}`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        );

        const data = await response.json();
        const randomEpisode = data.shows.items[0];
        episodes.push(randomEpisode);
      }

      setRandomEpisodes(episodes);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching random episodes:', error);
    }
  };

  const getRandomLetter = (): string => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const randomIndex: number = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
  };

  const getRandomNumber = (min: number, max: number): string => {
    return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
  };

  useEffect(() => {
    getRandomEpisodes(8);
  }, [accessToken]);

  if (isLoading) {
    return (
      <View>
        <HeaderText header={'Listening practice'} />
        <DescriptionText
          description={
            'Podcasts help you learn about your favorite topics and hear different accents!'
          }
        />
        <View style={{marginTop: 20}}>
          <Loader />
        </View>
      </View>
    );
  }

  return (
    <View style={{marginBottom: 100}}>
      <HeaderText header={'Podcast Listening practice'} />
      <DescriptionText
        description={
          'Podcasts help you learn about your favorite topics and hear different accents!'
        }
      />
      <CardList podcastData={randomEpisodes} navigation={navigation} />
    </View>
  );
};
