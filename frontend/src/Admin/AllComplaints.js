import React, { Fragment, useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import './AllComplaint.css'
import AdminHeader from './AdminHeader'
import AcceptPopUp from './AcceptPopUp'
import RejectPopUp from './RejectPopUp'


const AllComplaints = async () => {
  const [acceptButtonPopUp, acceptsetButtonPopUp] = useState(false);
  const [rejectButtonPopUp, rejectsetButtonPopUp] = useState(false);
  const admin = String(sessionStorage.getItem("adminId"));
  const response = await fetch(`http://localhost:7070/complaints/${admin}`);
  const json = await response.json();
  console.log(json);

  return (
    <Fragment>
    <AdminHeader />
    <div className='all_complaints'>
      <div className='side_nav'><Sidebar /></div>
      <div className='complain_side_admin'>
              <div className='complaint'>
              <div className='info'>
                <div className='complaintId'>
                  <span>Complain Id:</span><span></span>
                </div>
                <div className='complaint_info'>
                  <p></p>
                </div>
              </div> 
              <div className='accept'  onClick={() => {acceptsetButtonPopUp(true)}}><button>Accept</button></div>
              <div className='reject' onClick={() => {rejectsetButtonPopUp(true)}}><button>Reject</button></div>
              <AcceptPopUp trigger={acceptButtonPopUp} setTrigger = {acceptsetButtonPopUp}>
              <input className='CompAccp' value = ""></input>
              </AcceptPopUp>
              <RejectPopUp trigger={rejectButtonPopUp} setTrigger = {rejectsetButtonPopUp}>
              <input className='CompAccp' value = ""></input>
              </RejectPopUp>
            </div>
         </div>
    </div>
    </Fragment>
  )
}

export default AllComplaints