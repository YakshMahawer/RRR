import React, { } from 'react';
import AdminHome from './AdminHome';
import BeforeLogin from './BeforeLogin';

const AdminLogin = ({ setUrlMail, loggedIn, verified }) => {

  return (
    <> 
      {verified || loggedIn ? <AdminHome/> : <BeforeLogin setUrlMail={setUrlMail}/>}
    </>
  );
}

export default AdminLogin;