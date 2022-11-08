import React from 'react'
import "./post.css"
import {MoreVert} from "@mui/icons-material"

export default function Post() {
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className='postProfileImg' src="/assets/persons/1.jpg" alt="" />
                <span className="postUsername">Sophia Jackson</span>
                <span className="postDate">5 mins ago</span>
            </div>
            <div className="postTopRight">
                <MoreVert />
            </div>
        </div>
        <div className="postCenter"></div>
        <div className="postBottom"></div>
      </div>
    </div>
  )
}
