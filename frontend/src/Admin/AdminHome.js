import React, { Fragment } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Mainbar from './Mainbar';

const AdminHome = () => {
  return (
    <Fragment>
        <Navbar/>
        <Sidebar />
        <Mainbar/>
    </Fragment>
  );
}

export default AdminHome