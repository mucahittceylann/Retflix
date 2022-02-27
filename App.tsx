import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/appState';
import Navigation from './src/components/Navigation';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
