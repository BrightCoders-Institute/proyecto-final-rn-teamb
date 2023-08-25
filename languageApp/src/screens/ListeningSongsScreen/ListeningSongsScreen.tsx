import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { HeaderText } from '../../components/HeaderText/HeaderText';
import { DescriptionText } from '../../components/DescriptionText/DescriptionText';
import { ListeningCard } from '../../components/ListeningCard/ListeningCard';
import { Track } from '../../interfaces/CardsInterfaces';
import { useAccessToken } from '../../navigation/AccessTokenContent';
export const ListeningSongsScreen: React.FC = () => {
  const accessToken = useAccessToken();
  const [randomSongs, setRandomSongs] = useState<Track[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getRandomSongs = async (count: number) => {
    try {
      if (accessToken) {
        const songsPromises = Array.from({ length: count }, async () => {
          const response = await fetchRandomTrack(accessToken);
          const data = await response.json();
          return data.tracks.items[0];
        });

        const songs = await Promise.all(songsPromises);
        setRandomSongs(songs);
      }

      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching random songs:', error);
    }
  };

  const fetchRandomTrack = async (token: string) => {
    const randomLetter = generateRandomLetter();
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${randomLetter}&type=track&limit=1`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  };


  const generateRandomLetter = () => {
    const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
    const randomIndex: number = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
  };

  useEffect(() => {
    getRandomSongs(4); // number of songs to show
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
