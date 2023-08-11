import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { HeaderText } from '../../components/HeaderText/HeaderText';
import { DescriptionText } from '../../components/DescriptionText/DescriptionText';
import { ListeningCard } from '../../components/ListeningCard/ListeningCard';

interface PodcastScreenProps {
  accessToken: string | null;
}

interface PodcastEpisode {
  name: string;
  publisher: string;
  images: { url: string }[];
}

export const PodcastScreen: React.FC<PodcastScreenProps> = ({
  accessToken,
}) => {
  const [randomEpisodes, setRandomEpisodes] = useState<PodcastEpisode[]>([]);

  const getRandomEpisodes = async (count: number) => {

    try {
      const token = accessToken;
      const episodes: PodcastEpisode[] = [];
      console.log(`https://api.spotify.com/v1/search?q=${getRandomLetter()}&type=show&market=US&limit=1&offset=${getRandomNumber(1,100)}`)
      for (let i = 0; i < count; i++) {
        const response = await fetch(
          `https://api.spotify.com/v1/search?q=${getRandomLetter()}&type=show&market=US&limit=1&offset=${getRandomNumber(1,100)}`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer  ${token}`,
            },
          }
        )
        const data = await response.json();
        const randomEpisode = data.shows.items[0];
        episodes.push(randomEpisode);
      }

      setRandomEpisodes(episodes);
    } catch (error) {
      console.error('Error fetching random episodes:', error);
    }
  };
  const getRandomLetter = (): string => {
    const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
    const randomIndex: number = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
  };
  
  const getRandomNumber = (min: number, max: number): string => {
    return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
  };
  
  useEffect(() => {
    getRandomEpisodes(4); // number of episodes to show
  }, [accessToken]);

  return (
    <View>
      <HeaderText header={'Podcast Listening practice'} />
      <DescriptionText
        description={
          'Podcasts help you learn about your favorite topics and hear different accents!'
        }
      />
      {randomEpisodes.map((episode, index) => (
        <ListeningCard
          key={index}
          name={episode.name}
          author={episode.publisher}
          imageUri={episode.images[0].url}
        />
      ))}
    </View>
  );
};
