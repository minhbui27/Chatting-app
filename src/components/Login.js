import React from 'react';

import { useGoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
  '150980403378-h54jr1hbbt58e038a0d7tg5ng8atemua.apps.googleusercontent.com';

function Login() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <div>
        <button style = {{width:'25vh'}} class="button button-glow button-border button-rounded button-primary" onClick={signIn}>Login with Google</button>
    </div>
  );
}

export default Login;