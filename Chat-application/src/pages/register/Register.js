import React from 'react'
import './register.css'

function Register() {
  return (
    <div className='register'>
      <div className="registerWrapper">
        {/* register LEFT */}
        <div className="registerLeft">
            <h3 className='registerLogo'>Chatify</h3>
            <span className="registerDesc">connect with friends and the world around you</span>
        </div>
        {/* register RIGHT */}
        <div className="registerRight">
          <div className="registerBox">
          <input placeholder='username' className='registerInput' />
            <input placeholder='Email' className='registerInput' />
            <input placeholder='password' className='registerInput' />
            <input placeholder='re-enter password' className='registerInput' />
            <button className="registerButton">Sign up</button>
            <button className="loginRegisterButton">Log into account</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
