import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import { PodcastScreen } from './src/screens/PodcastScreen/PodcastScreen';
import config from 'react-native-config'; // .env 
import { ListeningSongsScreen } from './src/screens/ListeningSongsScreen/ListeningSongsScreen';

const App: React.FC = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const requestData = new URLSearchParams();
        requestData.append('grant_type', 'client_credentials');
        requestData.append('client_id', config.CLIENT_ID!);
        requestData.append('client_secret', config.CLIENT_SECRET!);        
        const response = await axios.post(
          config.API_URL!,
          requestData.toString(),
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
     <PodcastScreen accessToken={accessToken}/> 
     {/* <ListeningSongsScreen accessToken={accessToken}/> */}
    </View>
  );
};

export default App;
