import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
// components
import { HeaderText } from '../../components/HeaderText/HeaderText';
import { DescriptionText } from '../../components/DescriptionText/DescriptionText';
import { ListeningCard } from '../../components/ListeningCard/ListeningCard';
import { Track } from '../../interfaces/CardsInterfaces';

interface ListeningSongsScreenProps {
  accessToken?: string | null;
}

export const ListeningSongsScreen: React.FC<ListeningSongsScreenProps> = ({
  accessToken,
}) => {
  const [randomSongs, setRandomSongs] = useState<Track[]>([]);

  const getRandomSongs = async (count: number) => {
    try {
      const token = accessToken;
      const songs: Track[] = [];
      
      const randomLetters = generateRandomLetters(count); // Generate an array of random letters

      for (let i = 0; i < count; i++) {
        const response = await fetch(
          `https://api.spotify.com/v1/search?q=${randomLetters[i]}&type=track&limit=1`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
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

  const generateRandomLetters = (count: number) => {
    const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
    const randomLetters: string[] = [];

    for (let i = 0; i < count; i++) {
      const randomIndex: number = Math.floor(Math.random() * alphabet.length);
      randomLetters.push(alphabet[randomIndex]);
    }

    return randomLetters;
  };

  useEffect(() => {
    getRandomSongs(4); // number of songs to show
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
