import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
//components
import { HeaderText } from '../../components/HeaderText/HeaderText';
import { DescriptionText } from '../../components/DescriptionText/DescriptionText';
import { ListeningCard } from '../../components/ListeningCard/ListeningCard';
interface ListeningSongsScreenProps {
  accessToken: string | null;
}
interface Track {
  name: string;
  artists: { name: string }[];
}

export const ListeningSongsScreen: React.FC<ListeningSongsScreenProps> = ({ accessToken }) => {
  const [randomSong, setRandomSong] = useState<Track | null>(null);

  const getRandomSong = async () => {
    try {
      const token = accessToken;
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=year:2020&type=track&limit=1`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      const randomTrack = data.tracks.items[0];
      setRandomSong(randomTrack);
    } catch (error) {
      console.error('Error fetching random song:', error);
    }
  };

  useEffect(() => {
    getRandomSong();
  }, [accessToken]);
  
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