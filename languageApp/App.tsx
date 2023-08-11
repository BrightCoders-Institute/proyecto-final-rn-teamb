import React, {useState, useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
//navigation
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {BottomNavigator} from './src/navigation/BottomNavigator';
//axios
import axios from 'axios';
// .env
import config from 'react-native-config';

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
          },
        );

        const token = response.data.access_token;
        setAccessToken(token);
      } catch (error) {
        console.error('Error fetching access token:', error);
      }
    };

    fetchAccessToken();
  }, []);
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  };
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <NavigationContainer theme={MyTheme}>
        <BottomNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
