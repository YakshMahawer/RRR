import React, { Fragment, useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import './AllComplaint.css'
import AdminHeader from './AdminHeader'
import AcceptPopUp from './AcceptPopUp'
import RejectPopUp from './RejectPopUp'


const AllComplaints = () => {
  const [acceptButtonPopUp, acceptsetButtonPopUp] = useState(false);
  const [rejectButtonPopUp, rejectsetButtonPopUp] = useState(false);
  const[complaints, setComplaints] = useState([{}]);
  const admin = Number(sessionStorage.getItem("adminId"));
  useEffect(() => {
    const getComplaints = async () =>{
      try{
        const response = await fetch(`http://localhost:7070/complaints/admin/${admin}`);
        const json = await response.json();
        console.log(json);
        setComplaints(json);
      }
      catch(err){
        console.log(err);
      }
    }

    getComplaints();
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
    <style>@import url('https://fonts.googleapis.com/css2?family=Exo+2&display=swap');</style>  
    <style>@import url('https://fonts.googleapis.com/css2?family=Prompt&display=swap');</style>
    <style>@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@500&display=swap');</style>
    <style>@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@500&display=swap');</style>
    <AdminHeader />
    <div className='all_complaints'>
      <div className='side_nav'><Sidebar /></div>
      <div className='complain_side_admin'>
         {
          complaints.map(curComp => {
             return(
              <div className='complaint'>
              <div className='info'>
                <div className='complaintId'>
                  <span>Complain Id:</span><span className='IdNum'>#{curComp.complaintId}</span>
                </div>
                <div className='complaint_info'>
                  <p className='citicomp'>Complaint of the Citizen: </p>
                  <p className='compD'>{curComp.otherCategory}</p>
                </div>
              </div> 
              <div className='accept'  onClick={() => {acceptsetButtonPopUp(true)}}><button>Accept</button></div>
              <div className='reject' onClick={() => {rejectsetButtonPopUp(true)}}><button>Reject</button></div>
              <AcceptPopUp trigger={acceptButtonPopUp} setTrigger = {acceptsetButtonPopUp}>
              <input className='CompStatus' value = "Accepted" id = 'compSta'></input>
              <input className='CompAccp' value = {curComp.complaintId} id = 'compId'></input>
              </AcceptPopUp>
              <RejectPopUp trigger={rejectButtonPopUp} setTrigger = {rejectsetButtonPopUp}>
              <input className='CompStatus' value = "Rejected" id = 'comp_sta'></input>
              <input className='CompAccp' value = {curComp.complaintId} id = 'comp_id'></input>
              </RejectPopUp>
            </div>
             )
          })
         }
         </div>
    </div>
    </Fragment>
  )
}

export default AllComplaints