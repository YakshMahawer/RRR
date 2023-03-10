import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import Complain from "./pages/Complain/Complain";
import Statistics from "./pages/Statistics/Statistics";
import Status from "./pages/Status/Status";
import Thanks from "./pages/Thanks/Thanks";
import AdminLogin from "./Admin/AdminLogin";
import AdminHome from "./Admin/AdminHome";
import MyComplaints from "./Admin/MyComplaints";
import Checked from "./Admin/Checked";
import AllComplaints from "./Admin/AllComplaints";
import OTP from "./Admin/OTP"
function App() {

  const [urlMail, setUrlMail] = useState('')
  const [verified, setVerified] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(()=>{
    const success = JSON.parse(sessionStorage.getItem('ADMINLOGIN'))
    if(success){
      setLoggedIn(true)
    }
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Complain />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route exact path="/status" element={<Status />} />
        <Route exact path="/thanks" element={<Thanks />} />
        <Route path="/admin" element={<AdminLogin setUrlMail={setUrlMail} loggedIn={loggedIn} verified={verified}/>} />
        <Route path='/verify/*' element={<OTP urlMail={urlMail} setVerified={setVerified}/>} />
        <Route exact path="/admin/home" element={<AdminHome />} />
        <Route exact path="/admin/myComplaints" element={<MyComplaints />} />
        <Route exact path="/admin/checkedComplaints" element={<Checked />} />
        <Route exact path="/admin/allComplaints" element={<AllComplaints />} />
      </Routes>
    </div>
  );
}

export default App;