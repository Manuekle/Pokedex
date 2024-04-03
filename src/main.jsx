/* eslint-disable import/order */
import React from 'react';
import ReactDOM from 'react-dom/client';
import Pokedex from './pokedex';
import './index.css';
import '@fontsource/geist-sans';
// import '@fontsource-variable/onest';

// redux
import { Provider } from 'react-redux';
// layout principal

// store(contiene todos los servicios de la api)
import store from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Pokedex />
    </Provider>
  </React.StrictMode>
);
