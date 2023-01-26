import React from 'react';
import AfterLogin from './AfterLogin';
import BeforeLogin from './BeforeLogin';

const AdminLogin = ({ setUrlMail, verified }) => {
  return (
    <> 
      {verified ? <AfterLogin/> : <BeforeLogin setUrlMail={setUrlMail}/>}
    </>
  );
}

export default AdminLogin;
