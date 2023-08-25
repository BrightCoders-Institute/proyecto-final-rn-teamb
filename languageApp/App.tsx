import React, { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//navigation
import { BottomNavigator } from './src/navigation/BottomNavigator';
//axios
import axios from 'axios';
// .env
import config from 'react-native-config';
import { AuthNavigator, ResourcesScreenNavigator } from './src/navigation/Navigator';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { RootState } from './src/store/reducers';
import Router from './src/router/Router';
import { store } from './src/store/store';
import { AccessTokenProvider } from './src/navigation/AccessTokenContent'

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

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <Provider store={store}>
        <AccessTokenProvider>
          <Router />
        </AccessTokenProvider>

      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
