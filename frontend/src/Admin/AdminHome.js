import React, { Fragment } from 'react'
import './AdminHeader.css'
import Sidebar from './Sidebar'
import Mainbar from './Mainbar';
import AdminHeader from './AdminHeader';

const AdminHome = () => {
  return (
    <Fragment>
        <AdminHeader/>
        <Sidebar />
        <Mainbar/>
    </Fragment>
  );
}

export default AdminHome