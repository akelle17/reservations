import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, useHistory } from 'react-router-dom';
import { Security } from '@okta/okta-react';

const oktaConfig = {
  issuer: `${process.env.REACT_APP_ISSUER}/oauth2/default`,
  redirect_uri: `${window.location.origin}/implicit/callback`,
  client_id: process.env.REACT_APP_CLIENT_ID,
};

// const history = useHistory();

// const customAuthHandler = () => {
//   history.push('/login');
// }

// onAuthRequired={customAuthHandler}>

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Security {...oktaConfig}>
      <App />
    </Security>
  </BrowserRouter>,
  // </React.StrictMode>
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
