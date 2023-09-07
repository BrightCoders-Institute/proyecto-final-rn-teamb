import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Router from './src/router/Router';
import { store } from './src/store/store';
import { AccessTokenProvider } from './src/navigation/AccessTokenContent';

const App: React.FC = () => {
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
