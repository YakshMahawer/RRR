import React, { Fragment, useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import AdminHeader from './AdminHeader';
import './AllComplaint.css'


const MyComplaints = () => {
    const[complaints, setComplaints] = useState([{}]);
    const admin = Number(sessionStorage.getItem("adminId"));
    useEffect(() => {
      const getComplaints = async () =>{
        try{
          const response = await fetch(`http://localhost:7070/complaints/all`);
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
    <style>@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap');</style>
    <style>@import url('https://fonts.googleapis.com/css2?family=Exo+2&display=swap');</style>  
    <style>@import url('https://fonts.googleapis.com/css2?family=Prompt&display=swap');</style>
    <style>@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@500&display=swap');</style>
    <style>@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@500&display=swap');</style>
      <AdminHeader/>
      <Sidebar />
      <div className='my_complaints'>
         {
          complaints.map(curComp => {
             return(
              <div className='complaint'>
                <div className='all_info'>
                  <p>Complaint Id : <span>{curComp.complaintId}</span></p>
                  <p>Category : <span>{curComp.category}</span></p>
                  <p>Other Complain Details : <span>{curComp.otherCategory}</span></p>
                  <p>Status : <span>{curComp.status}</span></p>
                  <p>Aditional Information : <span>{curComp.addInfo}</span></p>
              </div> 
            </div>
             )
          })
         }
         </div>
    </Fragment>
  )
}

export default MyComplaints