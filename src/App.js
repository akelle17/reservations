import React from 'react';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Profile from './components/auth/Profile';
import Admin from './components/pages/Admin';

import config from './config';

const HasAccessToRouter = () => {
  const history = useHistory();

  const customAuthHandler = () => {
    history.push('/login');
  }

  return (
    <Security {...config.oidc}
      onAuthRequired={customAuthHandler}>
      <Navbar></Navbar>
      <Route exact path="/" component={Home} />
      <Route path="/implicit/callback" component={LoginCallback} />
      <Route path="/login" component={Login} />
      <SecureRoute path="/profile" component={Profile} />
      <SecureRoute exact path="/admin" component={Admin} />
    </Security>
  )
}

const App = () => (
  <div>
    <Router>
      <HasAccessToRouter />
    </Router>
  </div>
);

export default App;
