import React, { useState, useEffect } from 'react';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import { AuthState, onAuthUIStateChange }  from '@aws-amplify/ui-components';

import Main from '../components/Main.js';
import Auth from '../components/Auth.js';

Amplify.configure(awsconfig);

function App() {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
      return onAuthUIStateChange((nextAuthState, authData) => {
          setAuthState(nextAuthState);
          setUser(authData)
      });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <Main />
  ) : (
    <Auth />
  );
}

export default App;
