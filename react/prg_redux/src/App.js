import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Page1 from './Page1';
import Page2 from './Page2';

function App() {
  return (
    <Provider store={store}>
      <>
        <h1>Hello World!</h1>
        <Page1 />
        <Page2 />
      </>
    </Provider>
  );
}

export default App;
