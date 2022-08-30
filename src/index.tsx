import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import codePush from 'react-native-code-push';
import { store, persistor } from 'src/store';

import AppContainer from './routes';

let App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
};
App = codePush(App);
export default App;
