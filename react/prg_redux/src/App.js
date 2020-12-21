import React from 'react';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
 
import store, { persistor } from './store';
import Page1 from './Page1';
import Page2 from './Page2';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} >
        <>
          <h1>Hello World!</h1>
          <Page1 />
          <Page2 />
        </>
      </PersistGate>
    </Provider>
  );
}

export default App;
