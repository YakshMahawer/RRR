import React, { Fragment, useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import AdminHeader from './AdminHeader';
import './AllComplaint.css'


const Checked = () => {
    const[complaints, setComplaints] = useState([{}]);
    const admin = Number(sessionStorage.getItem("adminId"));
    useEffect(() => {
      const getComplaints = async () =>{
        try{
          const response = await fetch(`http://localhost:7070/complaints/${admin}`);
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
      <AdminHeader/>
      <Sidebar />
      <div className='checked_complaints'>
         {
          complaints.map(curComp => {
             return(
              <div className='complaint'>
              <div className='info'>
                <div className='complaintId'>
                  <span>Complain Id:</span><span className='IdNum'>#{curComp.complaintId}</span>
                </div>
                <div className='complaint_info'>
                  <p className='compD'>{curComp.otherCategory}</p>
                </div>
                <div className='status'>
                 <span className='checked_status'>{curComp.status}</span>
                </div>
              </div> 
            </div>
             )
          })
         }
         </div>
    </Fragment>
  )
}

export default Checked