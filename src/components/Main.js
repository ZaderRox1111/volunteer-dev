import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthState, onAuthUIStateChange }  from '@aws-amplify/ui-components';

import Home from '../views/Home.js';
import Auth from '../components/Auth.js';

const Main = () => {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
      return onAuthUIStateChange((nextAuthState, authData) => {
          setAuthState(nextAuthState);
          setUser(authData)
      });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
    </Switch>
  ) : (
    <Auth />
  );
}

export default Main;