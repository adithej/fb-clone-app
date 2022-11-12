import React from 'react'
import './rightbar.css'
import {Users} from "../../dummyData"
import Online from '../online/Online'

export default function Rightbar() {
    return(
        <div className='rightbar'>
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className='birthdayImg' src="assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Pola foster</b> and <b>3 others</b> have a birthday today.
                    </span>
                </div>
                    <img className='rignhtbarAd' src="assets/ad.png" alt="" />
                    <h4 className="rightbarTitle">Online Friends</h4>
                    <ul className="rightbarfriendList">
                        {Users.map(u=>(
                            <Online key={u.id} user={u}/>
                        ))}
                        
                    </ul>
                </div>
            </div>
    )
}