import React from 'react'
import "./profile.css"
import Topbar from "../../components/topbar/Topbar.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Feed from "../../components/feed/Feed.jsx";
import Rightbar from "../../components/rightbar/Rightbar.jsx";

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profilerightTop">
                        <div className="profileCover">
                            <img className='profileCoverImg' src="assets/post/3.jpg" alt="" />
                            <img className='profileUserImg' src="assets/persons/4.jpg" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>Stephen Myburgh</h4>
                            <span className='profileInfoDesc'>Hello my friends</span>
                        </div>
                    </div>
                    <div className="profilerightBottom">
                        <Feed />
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}
