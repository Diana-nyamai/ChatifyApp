import React from 'react'
import './closefriend.css'

function Closefriend({friendList}) {
  return (
    <>
       <li className="sideBarFriend">
                <img className='sideBarFriendImg' src={friendList.profile} alt="friendProfile" />
                <span className='sideBarFriendName'>{friendList.username}</span>
        </li>
    </>
  )
}

export default Closefriend