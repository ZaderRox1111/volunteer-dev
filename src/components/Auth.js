import React from 'react';
import background from '../img/triangles.png'
import { AmplifySignIn, AmplifySignUp, AmplifyForgotPassword, AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  signin: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
  }
}));

function Auth() {
  const { signin } = useStyles();

  return (
    <AmplifyAuthenticator>
      <div className={signin} slot='sign-in'>
        <AmplifySignIn headerText='Sign in to get or give help!'/>
      </div>
      <div className={signin} slot='sign-up'>
        <AmplifySignUp
          slot="sign-up"
          formFields={[
            {
              type: "username",
              placeholder: "Username"
            },
            {
              type: "password",
              label: "Password",
              placeholder: "Password"
            },
            { type: "email" }
          ]}
        />
      </div>
      <div className={signin} slot='forgot-password'>
        <AmplifyForgotPassword />
      </div>
    </AmplifyAuthenticator>
  );
}

export default Auth;
