import React, { Fragment } from 'react'
import './AdminHeader.css'
import logo from "../images/RRR_white_logo.png"

const AdminHeader = () => {
  return (
    <Fragment>
      <div className="admin_header fixed">
        <div className='logo'>
            <img src={logo} alt='Logo'></img>
        </div>
      </div>
    </Fragment>
  );
}

export default AdminHeader