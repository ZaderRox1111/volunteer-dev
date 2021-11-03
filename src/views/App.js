import React from 'react';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';

import Main from '../components/Main.js';

Amplify.configure(awsconfig);

function App() {
  return (
    <Main />
  );
}

export default App;
