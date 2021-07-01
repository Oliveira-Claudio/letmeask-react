import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './services/firebase' // inicia conexão com firebase

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

