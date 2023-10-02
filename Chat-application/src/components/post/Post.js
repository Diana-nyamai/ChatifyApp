import React, { useEffect, useState } from 'react'
import './post.css'
import {MoreVert} from '@mui/icons-material'
import heart from '../../assets/heart.png'
import axios from 'axios';
import {format} from 'timeago.js'

// images
import profile from '../../assets/avatar.jpg';
import { Link } from 'react-router-dom';


function Post({post}) {
    const [like, setLike] = useState(post.likes.length)
    const [isliked, setIsliked] = useState(false)
    const [user, setUser] = useState({})
    const handlelike = () =>{
        setIsliked(!isliked)
        setLike(isliked? like - 1: like + 1)
    }

    useEffect(() => {
        const fetchUser = async()=>{
          try{
            const res = await axios.get(`http://localhost:5000/api/users?userId=${post.userId}`);
            setUser(res.data);
            console.log(res.data);
          }
          catch(err){
            console.log("Error fetching user",err);
          }
        }
        fetchUser();
        
      }, [post.userId]);

  return (
    <div className='post'>
        <div className="postwrapper">
            {/* post top */}
            <div className="posttop">
                <div className="posttopleft">
                    <Link to={`profile/${user.username}`}>
                    <img className='postprofileimg' src={user.profilePicture || profile} alt="person5" />
                    </Link>
                    <span className="postusername">{user.username}</span>
                    <span className="postDate">{format(post.createdAt)}</span>
                </div>
                <div className="posttopright"><MoreVert/></div>
            </div>
            {/* post center */}
            <div className="postcenter">
                <span className="posttext">{post.desc}</span>
                <img className='postimg' src={`http://localhost:5000/${post.image}`} alt="post"/>
            </div>

            {/* post bottom */}
            <div className="postbottom">
                <div className="postbottomleft">
                    <img className='hearticon' src={heart} alt="post" onClick={handlelike} />
                    <span className="postlikecounter">{like} likes </span>
                </div>
                <div className="postbottomright">
                    <span className="postcommenttext">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post