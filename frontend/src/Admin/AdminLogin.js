import React from 'react';

const AdminLogin = () => {
  return (
    <>
      <div className="container">

        <div className="login-box">

          <div className="title">
            <h4>Hello Super User !!</h4>
            <span className="tagline">
              Explore more by connecting with us
            </span>
          </div>

          <form className='login-form' action="/admin" method='post'>
            <div className="textbox">
              <input type="text" placeholder='Username'/>
              <input type="password" placeholder='Password'/>
              <button type='submit'>
                Let's go!
              </button>
            </div>
          </form>

        </div>
      </div>
    </>
  );
}

export default AdminLogin;
