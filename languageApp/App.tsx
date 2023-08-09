import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';
import { ListeningSongsScreen } from './src/screens/ListeningSongsScreen/ListeningSongsScreen';

const App: React.FC = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    // get the token
    axios.get("https://accounts.spotify.com/api/token")
      .then(response => {
        const token: string = response.data.access_token;
        setAccessToken(token);
      })
      .catch(error => {
        console.error('Error fetching access token:', error);
      });
  }, []);

  return (
    <View>
     <ListeningSongsScreen/> 
    </View>
  );
};

export default App;
