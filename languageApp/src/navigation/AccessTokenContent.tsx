import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';
import config from 'react-native-config';

interface AccessTokenContextType {
  accessToken: string | null;
}

const AccessTokenContext = createContext<AccessTokenContextType | undefined>(
  undefined,
);

export const AccessTokenProvider: React.FC = ({children}) => {
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
    <AccessTokenContext.Provider value={{accessToken}}>
      {children}
    </AccessTokenContext.Provider>
  );
};

export const useAccessToken = () => {
  const context = useContext(AccessTokenContext);
  if (context === undefined) {
    throw new Error('useAccessToken must be used within AccessTokenProvider');
  }
  return context.accessToken;
};
