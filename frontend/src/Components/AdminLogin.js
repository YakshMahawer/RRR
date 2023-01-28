import React, { } from 'react';
import AfterLogin from './AfterLogin';
import BeforeLogin from './BeforeLogin';

const AdminLogin = ({ setUrlMail, loggedIn, verified }) => {

  return (
    <> 
      {verified || loggedIn ? <AfterLogin/> : <BeforeLogin setUrlMail={setUrlMail}/>}
    </>
  );
}

export default AdminLogin;
