import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { View, ActivityIndicator, ScrollView } from 'react-native';
=======

import { View, ActivityIndicator, ScrollView } from 'react-native';

>>>>>>> dba090b3f26a2d8bec691041e2b6b8a9d02fab03
import { HeaderText } from '../../components/HeaderText/HeaderText';
import { DescriptionText } from '../../components/DescriptionText/DescriptionText';
import { ListeningCard } from '../../components/ListeningCard/ListeningCard';
import { PodcastEpisode } from '../../interfaces/CardsInterfaces';
import { useAccessToken } from '../../navigation/AccessTokenContent';

export const PodcastScreen: React.FC = () => {
  const accessToken = useAccessToken();
<<<<<<< HEAD
  console.log("accessToken is = " + accessToken)
=======
>>>>>>> dba090b3f26a2d8bec691041e2b6b8a9d02fab03
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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View>
      <HeaderText header={'Podcast Listening practice'} />
      <DescriptionText
        description={
          'Podcasts help you learn about your favorite topics and hear different accents!'
        }
      />
      <ScrollView>
        {randomEpisodes.map((episode, index) => (
          <ListeningCard
            key={index}
            name={episode.name}
            author={episode.publisher}
            imageUri={episode.images[0].url}
          />
        ))}
      </ScrollView>
    </View>
  );
};
