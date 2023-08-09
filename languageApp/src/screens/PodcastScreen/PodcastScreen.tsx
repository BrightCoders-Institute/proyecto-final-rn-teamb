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
  author: { name: string }[];
  imageUri: { url: string }[];
}

export const PodcastScreen: React.FC<PodcastScreenProps> = ({
  accessToken,
}) => {
  const [randomEpisodes, setRandomEpisodes] = useState<PodcastEpisode[]>([]);

  const getRandomEpisodes = async (count: number) => {
    try {
      const token = accessToken;
      const episodes: PodcastEpisode[] = [];

      for (let i = 0; i < count; i++) {
        const response = await fetch(
          `https://api.podcastplatform.com/v1/search?q=type=episode&limit=1`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        const randomEpisode = data.episodes.items[0];
        console.log("WORKED")
        episodes.push(randomEpisode);
      }

      setRandomEpisodes(episodes);
    } catch (error) {
      console.error('Error fetching random episodes:', error);
    }
  };

  useEffect(() => {
    getRandomEpisodes(3); // number of episodes to show
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
          author={episode.author[0].name}
          imageUri={episode.imageUri[0].url}
        />
      ))}
    </View>
  );
};
