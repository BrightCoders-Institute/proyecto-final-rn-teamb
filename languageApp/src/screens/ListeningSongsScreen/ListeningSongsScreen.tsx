import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { HeaderText } from '../../components/HeaderText/HeaderText';
import { DescriptionText } from '../../components/DescriptionText/DescriptionText';
import { ListeningCard } from '../../components/ListeningCard/ListeningCard';

interface ListeningSongsScreenProps {
  accessToken?: string | null;
}

interface Track {
  name: string;
  artists: { name: string }[];
  album: { images: { url: string }[] };
}

export const ListeningSongsScreen: React.FC<ListeningSongsScreenProps> = ({
  accessToken,
}) => {
  const [randomSongs, setRandomSongs] = useState<Track[]>([]);

  const getRandomSongs = async (count: number) => {
    try {
      const token = accessToken;
      const songs: Track[] = [];

      for (let i = 0; i < count; i++) {
        const response = await fetch(
          `https://api.spotify.com/v1/search?q=year:${getRandomYear()}&type=track&limit=1`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        const randomTrack = data.tracks.items[0];
        songs.push(randomTrack);
      }

      setRandomSongs(songs);
    } catch (error) {
      console.error('Error fetching random songs:', error);
    }
  };

  const getRandomYear = () => {
    return Math.floor(Math.random() * (2023 - 2000 + 1)) + 2000;
  };

  useEffect(() => {
    getRandomSongs(3); // number of songs to show
  }, [accessToken]);

  return (
    <View>
      <HeaderText header={'Listening practice'} />
      <DescriptionText
        description={
          'Listening to music is a fantastic way to learn new words and their pronunciation!'
        }
      />
      {randomSongs.map((song, index) => (
        <ListeningCard
          key={index}
          name={song.name}
          author={song.artists[0].name}
          imageUri={song.album.images[0].url}
        />
      ))}
    </View>
  );
};
