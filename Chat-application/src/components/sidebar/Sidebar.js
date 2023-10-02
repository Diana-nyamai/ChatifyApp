import React from 'react'
import '../sidebar/sidebar.css'
import {RssFeed,ChatBubble,PlayCircleFilledOutlined,Group,Bookmark,HelpOutline,WorkOutline,Event,School} from '@mui/icons-material'
import Closefriend from '../closefriend/Closefriend'
import {postdata} from '../post/PostData'


const sideNavLists = [
    {
        id: 1,
        icon: <RssFeed className="sideBarIcon"/>,
        title: 'Feed'
    },
    {
        id: 2,
        icon: <ChatBubble className="sideBarIcon"/>,
        title: 'Chats'
    },
    {
        id: 3,
        icon: <PlayCircleFilledOutlined className="sideBarIcon"/>,
        title: 'Videos'
    },
    {
        id: 4,
        icon: <Group className="sideBarIcon"/>,
        title: 'Groups'
    },
    {
        id: 5,
        icon: <Bookmark className="sideBarIcon"/>,
        title: 'Bookmarks'
    },
    {
        id: 6,
        icon: <HelpOutline className="sideBarIcon"/>,
        title: 'Questions'
    },
    {
        id: 7,
        icon: <WorkOutline className="sideBarIcon"/>,
        title: 'Jobs'
    },
    {
        id: 8,
        icon: <Event className="sideBarIcon"/>,
        title: 'Events'
    },
    {
        id: 9,
        icon: <School className="sideBarIcon"/>,
        title: 'Courses'
    }
]
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sideBarList">
            {sideNavLists.map(sideNavList =>
            <li key={sideNavList.id} className="sideBarListItem">
                {sideNavList.icon}
                <span className="sideBarListItemText">{sideNavList.title}</span>
            </li>
                )}
        </ul>
        <button className='sideBarButton'>show more</button>
        <hr className='sideBarHr'/>
        {/* friend list */}
        <ul className="sideBarFriendList">
            {postdata.map(friendList =>
               <Closefriend key={friendList.id} friendList={friendList}/>
                )}
            
        </ul>
      </div>
    </div>
  )
}

export default Sidebar