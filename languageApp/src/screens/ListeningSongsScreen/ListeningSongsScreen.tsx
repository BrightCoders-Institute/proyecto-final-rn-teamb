import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
//components
import {HeaderText} from '../../components/HeaderText/HeaderText';
import {DescriptionText} from '../../components/DescriptionText/DescriptionText';
import {ListeningCard} from '../../components/ListeningCard/ListeningCard';
import Loader from '../../components/Loader/Loader';
//navigation
import {useAccessToken} from '../../navigation/AccessTokenContent';
import {Track} from '../../interfaces/CardsInterfaces';

export const ListeningSongsScreen: React.FC = () => {
  const accessToken = useAccessToken();
  const [randomSongs, setRandomSongs] = useState<Track[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getRandomSongs = async (count: number) => {
    try {
      if (accessToken) {
        const songsPromises = Array.from({length: count}, async () => {
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
      },
    );
    return response;
  };

  const generateRandomLetter = () => {
    const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
    const randomIndex: number = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
  };

  useEffect(() => {
    getRandomSongs(44);
  }, [accessToken]);

  if (isLoading) {
    return (
      <View>
        <HeaderText header={'Listening practice'} />
        <DescriptionText
          description={
            'Listening to music is a fantastic way to learn new words and their pronunciation!'
          }
        />
        <View style={{marginTop: 20}}>
          <Loader />
        </View>
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
      <ScrollView>
        {randomSongs.map((song, index) => (
          <ListeningCard
            key={index}
            name={song.name}
            author={song.artists[0].name}
            imageUri={song.album.images[0].url}
          />
        ))}
      </ScrollView>
    </View>
  );
};
