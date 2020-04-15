import React from 'react';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';
import { Row, Col } from 'antd';
import './App.css';

import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';

import Home from './components/home/Home';
import Login from './components/auth/Login';
import Profile from './components/auth/Profile';
import Admin from './components/admin/Admin';
import Assets from './components/asset/Assets';
import Reservations from './components/reservation/Reservations';
import SidebarNav from './components/layout/SidebarNav';

import { GlobalProvider } from './context/GlobalState';

const oktaConfig = {
  issuer: `${process.env.REACT_APP_ISSUER}`,
  redirect_uri: `${window.location.origin}/implicit/callback`,
  client_id: process.env.REACT_APP_CLIENT_ID,
};

const HasAccessToRouter = () => {
  const history = useHistory();

  const customAuthHandler = () => {
    history.push('/login');
  }

  return (
    <Security {...oktaConfig} 
              onAuthRequired={customAuthHandler}>
      <GlobalProvider> 
        <header>
          <Row>
            <Col span={6}>
              <h1>Reservations</h1>
            </Col>
            <Col span={18}>

            </Col>
          </Row>
        </header>
        <Row>
          <Col span={6}>
            <SidebarNav></SidebarNav>
          </Col>
          <Col span={18}>
            <div className="ui text container">
              <Route exact path="/" component={Home} />
              <Route path="/implicit/callback" component={LoginCallback} />
              <Route path="/login" component={Login} />
              <SecureRoute path="/profile" component={Profile} />
              <SecureRoute exact path="/admin" component={Admin} />
              <SecureRoute exact path="/assets" component={Assets} />
              <SecureRoute exact path="/reservations" component={Reservations} />
            </div>
          </Col>
        </Row>
      </GlobalProvider>
    </Security>
  )
}

const App = () => (
  <Router>
    <HasAccessToRouter />
  </Router>
);

export default App;
