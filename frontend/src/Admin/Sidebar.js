import React, { Fragment } from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <Fragment>
      <div className="sidebar">
        <Link to="/admin/myComplaints">My Complaints</Link>
        <Link to="/admin/checkedComplaints">Checked Complaints</Link>
        <Link to="/admin/allComplaints">All Complaints</Link>
      </div>
    </Fragment>
  );
}

export default Sidebar