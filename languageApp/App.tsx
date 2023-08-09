import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';
import { ListeningSongsScreen } from './src/screens/ListeningSongsScreen/ListeningSongsScreen';

const App: React.FC = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const data = new URLSearchParams();
    data.append('grant_type', 'client_credentials');
    data.append('client_id', 'aa882dee2f694376a697c2c105bbae84');
    data.append('client_secret', 'a00142e9d2e94a2190bd2cbd7c3dd475');

    axios.post('https://accounts.spotify.com/api/token', data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then(response => {
        const token = response.data.access_token;
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
