import React, { createContext, useContext, useState } from 'react';

const AccessTokenContext = createContext<string | null>(null);

export const AccessTokenProvider: React.FC = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  return (
    <AccessTokenContext.Provider value={accessToken}>
      {children}
    </AccessTokenContext.Provider>
  );
};

export const useAccessToken = () => {
  const accessToken = useContext(AccessTokenContext);
  if (accessToken === null) {
    throw new Error('useAccessToken must be used within AccessTokenProvider');
  }
  return accessToken;
};
