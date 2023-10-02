import React from 'react'
import Online from '../online/Online'
import './rightbar.css'
import {postdata} from '../post/PostData'

// assets
import gift from "../../assets/gift.png"
import ad from "../../assets/ad.jpg"
import p2 from "../../assets/person/p2.jpg"

const followings = [
  {
    image: p2,
    name: `Lupita N`
  },
  {
    image: p2,
    name: `Lupita N`
  },
  {
    image: p2,
    name: `Lupita N`
  },
  {
    image: p2,
    name: `Lupita N`
  },
  {
    image: p2,
    name: `Lupita N`
  },
  {
    image: p2,
    name: `Lupita N`
  }
]
function Rightbar({user}) {
  const Homerightbar = () =>{
    return (
      <>
      <div className="birthdayContainer">
          <img src={gift} alt="birthday" className="birthdayImg" />
          <span className="birthdayText"><b>kamama</b> and <b>3 other friends</b> have a birthday today</span>
        </div>
        <img src={ad} alt="rightAd" className='rightBarAd'/>
        <h4 className="rightBarTitle">Online friends</h4>
        <ul className='rightBarFriendList'>
          {postdata.map((post) => 
              <Online key={post.id} friendonline={post}/>
            )}
        
        </ul>
      </>
    )
  }
  const Profilerightbar = () =>{
    return(
      <>
       <h4 className='rightBarTitle'>User information</h4>
       <div className="rightBarInfo">
           <div className="rightBarInfoItem"> 
           <span className="rightBarInfoKey">City</span>
        <span className="rightBarInfoValue">{user.city}</span>
       </div>
       <div className="rightBarInfoItem"> 
           <span className="rightBarInfoKey">From</span>
        <span className="rightBarInfoValue">{user.from}</span>
       </div>
       <div className="rightBarInfoItem"> 
           <span className="rightBarInfoKey">Relationship</span>
        <span className="rightBarInfoValue">{user.relationship === 1? "Single" 
        : user.relationship === 2? "Married" 
        : "complicated"}</span>
       </div>
       </div>
       <h4 className='rightBarTitle'>User friends</h4>
       <div className="rightBarFollowings">
        {followings.map(following =>
          <div className="rightBarFollowing">
          <img src={following.image} alt="following" className="rightBarFollowingImg" />
          <span className="rightBarFollowingName">{following.name}</span>
        </div>
          )}
        
       </div>
      </>
     
    )
  }
  return (
    <div className='rightBar'>
      <div className="rightBarWrapper">
        {user? <Profilerightbar/>: <Homerightbar/>}
      </div>
      </div>
  )
}

export default Rightbar