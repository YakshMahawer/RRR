import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import "../index.css"
import otp1 from "../images/otp1.png"

const OTP = ({ urlMail, setVerified }) => {

  const navigate = useNavigate()

  const [otp, setOtp] = useState('')
  const [correctDetail, setCorrectDetail] = useState(true)
  const [errormessage, setErrorMessage] = useState('something')



  const validateOTP = async(e) =>{
    e.preventDefault() 

    if(otp === ''){
      setCorrectDetail(false)
      setErrorMessage('Please provide the otp before submitting')
      return
    }

    const res = await fetch(`/verify/${urlMail}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        otp
      })
    })

    const data = await res.json()

    if(data === 'Authentication successful'){
      setVerified(true)
      navigate(`/admin`)
      return
    } else if(data === 'no otp in database'){
      setCorrectDetail(false)
      setErrorMessage('Looks like your otp expired, try again')
    }else if(data === 'wrong otp'){
      setCorrectDetail(false)
      setErrorMessage('Incorrect password, try again')
    }
    
  }

  return (
    <>
      <div className="otp-container">
        <span className='svg-container'>
          <img src={otp1} alt=''></img>
        </span>
        <div className="textarea">
          <h1>ENTER OTP</h1>
          <input 
            type="text" 
            name="otp" 
            id="otp" 
            onChange={(e)=>setOtp(e.target.value)}
            placeholder='Enter otp' />
          <button type='submit' className='confirm-button' onClick={validateOTP}>CONFIRM</button>
        </div>
        {!correctDetail ? `${errormessage}` : ''}

      </div>
    </>
  );
}

export default OTP;
