import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';
import { ListeningSongsScreen } from './src/screens/ListeningSongsScreen/ListeningSongsScreen';

const App: React.FC = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const requestData = new URLSearchParams();
        requestData.append('grant_type', 'client_credentials');
        requestData.append('client_id', 'aa882dee2f694376a697c2c105bbae84');
        requestData.append('client_secret', 'a00142e9d2e94a2190bd2cbd7c3dd475');
  
        const response = await axios.post(
          'https://accounts.spotify.com/api/token',
          requestData.toString(), // Convert the URLSearchParams object to a string
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        );
  
        const token = response.data.access_token;
        setAccessToken(token);
      } catch (error) {
        console.error('Error fetching access token:', error);
      }
    };
  
    fetchAccessToken();
  }, []);
  
  return (
    <View>
     <ListeningSongsScreen accessToken={accessToken}/> 
    </View>
  );
};

export default App;
