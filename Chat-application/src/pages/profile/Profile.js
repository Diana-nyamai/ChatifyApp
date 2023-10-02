import React, { useEffect, useState } from 'react'
import './profile.css'
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import axios from 'axios'
import {useParams} from 'react-router'

// assets
// import post5 from '../../assets/post/post5.jpg'
// import p1 from '../../assets/post/post1.jpg'
import avatar from '../../assets/avatar.jpg'

function Profile() {
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () =>{
      const res = await axios.get(`http://localhost:5000/api/users?username=${username}`);
      setUser(res.data);
    }
    fetchUser();   
  }, []);
  return (
   <>
        <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileright">
                <div className="profilerighttop">
                    {/* profile cover */}
                  <div className="profilecover">
                    <img src={user.coverPicture || avatar} alt="" className="profilecoverimg"/>
                    <img src={user.profilePicture || avatar} alt="" className="profileuserimg"/>
                  </div>
                  <div className="profileinfo">
                    <h4 className="profileinfoname">{user.username}</h4>
                    <span className="profileinfodesc">{user.desc}</span>
                  </div>
                </div>

                {/* feed and rightbar*/}
                <div className="profilerightbottom">
                    <Feed username={username}/>
                    <Rightbar user={user}/>
                </div>
            </div>
        </div>
   </>
  )
}

export default Profile