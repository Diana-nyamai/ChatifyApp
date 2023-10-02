import React from 'react'
import './share.css'
import {PermMedia,Label,Room,EmojiEmotions} from '@mui/icons-material'

// assets
import p1 from '../../assets/person/p1.jpg'
const shareoptions= [
    {
        icon: <PermMedia htmlColor="tomato" className='shareicon'/>,
        content: 'photo or video'
    },
    {
        icon: <Label htmlColor="blue" className='shareicon'/>,
        content: 'Tag'
    },
    {
        icon: <Room htmlColor="green" className='shareicon'/>,
        content: 'Location'
    },
    {
        icon: <EmojiEmotions htmlColor="goldenrod" className='shareicon'/>,
        content: 'Feelings'
    }
]
function Share() {
  return (
    <div className='share'>
     <div className="sharewrapper">
        {/* sharetop */}
        <div className="sharetop">
            <img className='shareprofileimg' src={p1} alt="profile1" />
            <input type="text" className='shareinput' placeholder="what is on your mind deedee?"/>
        </div>
        <hr className='sharehr'/>
        {/* share bottom */}
        <div className="sharebottom">
            <div className="shareoptions">
                {shareoptions.map((shareoption, index) =>
                     <div className="shareoption" key={index}>
                        {shareoption.icon}
                    <span className="shareoptiontext">{shareoption.content}</span>
                </div>
                    )}
            </div>
           <button className="sharebutton">Share</button>
        </div> 
     </div>
    </div>
  )
}

export default Share