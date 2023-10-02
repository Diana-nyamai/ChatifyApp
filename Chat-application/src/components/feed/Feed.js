import React, { useEffect, useState } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import axios from 'axios'

function Feed({username}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async()=>{
      try{
        const res = username
        ? await axios.get("http://localhost:5000/api/posts/profile/" + username)
        : await axios.get("http://localhost:5000/api/posts/timeline/64cb375a523974221b82c7e5");
        setPosts(res.data);
        // console.log(res.data);
      }
      catch(err){
        console.log("Error fetching data",err);
      }
    }
    fetchData();
    
  }, [username]);
  return(
    <div className='feed'>
        <div className="feedWrapper">
            <Share/>
             {posts.map(post =>
              <Post key={post._id} post={post}/>
               )}
        </div>
    </div>
  )
}

export default Feed