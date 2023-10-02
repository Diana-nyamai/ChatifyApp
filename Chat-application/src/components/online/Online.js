import React from 'react'
import './online.css'


function Online({friendonline}) {
  return (
    <>
        <li className='rightBarFriend'>
        <div className="rightBarProfileImgContainer">
            <img src={friendonline.profile} alt="p1" className="rightBarProfileImg" />
            <span className="rightBarOnline"></span>
        </div>
        <span className="rightBarUsername">{friendonline.username}</span>
        </li>
    </>
  )
}

export default Online