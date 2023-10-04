import React from 'react'
import './login.css'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div className='login'>
      <div className="loginWrapper">
        {/* LOGIN LEFT */}
        <div className="loginLeft">
            <h3 className='loginLogo'>Chatify</h3>
            <span className="loginDesc">connect with friends and the world around you</span>
        </div>
        {/* LOGIN RIGHT */}
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder='Email' className='loginInput' />
            <input placeholder='password' className='loginInput' />
            <button className="loginButton">log in</button>
            <span className="loginForget">forgot password?</span>
            <button className="button loginRegisterButton"><Link to="/register">create an account</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
