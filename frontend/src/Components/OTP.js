import React, { useState } from 'react';
import { useNavigate } from 'react-router';

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
        <div className="textarea">
          <h3>An OTP has been send to your registered mobile number</h3>
          <h4>Remainder, otp is valid only for 5 minutes</h4>
          <input 
            type="text" 
            name="otp" 
            id="otp" 
            onChange={(e)=>setOtp(e.target.value)}
            placeholder='Enter otp' />
          <button type='submit' onClick={validateOTP}>Submit</button>
        </div>
        {!correctDetail ? `${errormessage}` : ''}

      </div>
    </>
  );
}

export default OTP;
