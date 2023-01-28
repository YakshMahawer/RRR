import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import "./admin.css"
import otp1 from "../images/otp1.png"

const OTP = ({ urlMail, setVerified }) => {

  const navigate = useNavigate()

  const [otp, setOtp] = useState('')
  const [correctDetail, setCorrectDetail] = useState(true)
  const [errormessage, setErrorMessage] = useState('something')

  const nextHopInput = (first, last) => {
    if (first.value.length) {
      document.getElementById(last).focus()
    }
  }

  const validateOTP = async (e) => {
    e.preventDefault()
    if (otp === '') {
      setCorrectDetail(false)
      setErrorMessage('Please provide the otp before submitting')
      return
    }

    const res = await fetch(`http://localhost:7070/verify/${urlMail}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        otp
      })
    })

    const data = await res.json()

    if (data === 'Authentication successful') {
      setVerified(true)
      sessionStorage.setItem('ADMINLOGIN', JSON.stringify(true))
      navigate(`/admin`)
      return
    } else if (data === 'no otp in database') {
      setCorrectDetail(false)
      setErrorMessage('Looks like your otp expired, try again')
    } else if (data === 'wrong otp') {
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
          <h1 className='otpHeader'>ENTER OTP</h1>
          <div className="otp-userInput">
            <input
              className='userInputField'
              type="text"
              maxLength='1'
              autoComplete='off'
              onChange={(e) => setOtp(e.target.value)}
              autoFocus
              id='first'
              onKeyUp={(e) => nextHopInput(e.target, 'sec')}
            />
            <input
              className='userInputField'
              type="text"
              maxLength='1'
              autoComplete='off'
              onChange={(e) => setOtp((prev) => prev + e.target.value)}
              id='sec'
              onKeyUp={(e) => nextHopInput(e.target, 'third')}
            />
            <input
              className='userInputField'
              type="text"
              maxLength='1'
              autoComplete='off'
              id='third'
              onChange={(e) => setOtp((prev) => prev + e.target.value)}
              onKeyUp={(e) => nextHopInput(e.target, 'forth')}
            />
            <input
              className='userInputField'
              type="text"
              autoComplete='off'
              maxLength='1'
              onChange={(e) => setOtp((prev) => prev + e.target.value)}
              id='forth'
              onKeyUp={(e) => nextHopInput(e.target, 'submit')}
            />
          </div>
          <div className="otpButtonBox">
            <button type='submit' id='submit' className='confirm-button' style={{background:"black"}} onClick={validateOTP}>CONFIRM</button>
          </div>
          <div className="otpError">
            {!correctDetail ? `${errormessage}` : ''}
          </div>
        </div>

      </div>
    </>
  );
}

export default OTP;