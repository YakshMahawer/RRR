import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import "./admin.css"
import logo from "../images/RRR_Netflix_logo.webp";

const BeforeLogin = ({ setUrlMail }) => {

  const navigate = useNavigate()

  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')

  const [correctDetail, setCorrectDetail] = useState(true)
  const [errormessage, setErrorMessage] = useState('')

  const postData = async (e) => {
    e.preventDefault()
    if (mail === '' || password === '') {
      setCorrectDetail(false)
      setErrorMessage('Please provide the details')
      return
    }

    const res = await fetch('http://localhost:7070/admin', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        mail, password
      })
    })

    const data = await res.json()

    if (data === 'password matched, onto otp verification') {
      setUrlMail(mail)
      navigate(`/verify/${mail}`)
      return
    } else if (data === 'wrong password') {
      setCorrectDetail(false)
      setErrorMessage('Wrong Credentials')
      return
    } else if (data === 'no user with the email') {
      setCorrectDetail(false)
      setErrorMessage('Unauthorized Access')
      return
    }

  }

  return (
    <>
      <div className="container">

        <div className="login-box">

          <span className='logo'>
            <img src={logo} alt=''></img>
          </span>
          <div className="title">
            <h1>ADMIN</h1>
          </div>


          <form className='login-form' method='post'>
            <div className="textbox">
              <input
                type="email"
                className='input'
                placeholder='Email'
                autoComplete='off'
                onChange={(e) => setMail(e.target.value)}
                name='mail' />
              <input
                type="password"
                required
                placeholder='Password'
                className='input'
                autoComplete='off'
                onChange={(e) => setPassword(e.target.value)}
                name='password' />
              <div className='button-container'>
                <button type='submit' className='login-btn' style={{background:"black"}} onClick={postData}>
                  LOG IN
                </button>
              </div>

            </div>
          </form>
          <div className="loginError">
          {!correctDetail ? `${errormessage}` : ''}
          </div>
        </div>
      </div>
    </>
  );
}

export default BeforeLogin;
