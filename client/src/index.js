import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserProvider } from './store/UserStore'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById('root')
);

reportWebVitals();
