import React from 'react';
import { useGoogleLogout } from 'react-google-login';

const clientId =
  '150980403378-h54jr1hbbt58e038a0d7tg5ng8atemua.apps.googleusercontent.com';

function Logout() {
  const onLogoutSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <div>
      <button style = {{width:'25vh'}} class="button button-glow button-border button-rounded button-primary" onClick={signOut}>Logout</button>
    </div>
  );
}

export default Logout;