import React from 'react'
import './rightbar.css'

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
                        <li className="rightbarFriend">
                            <div className="rightbarProfileImgContainer">
                                <img className='rightbarProfileImg' src="assets/persons/3.jpg" alt="" />
                                <span className="rightbarOnline"></span>
                            </div>
                            <span className="rightbarUsername">John carter</span>
                        </li>
                        <li className="rightbarFriend">
                            <div className="rightbarProfileImgContainer">
                                <img className='rightbarProfileImg' src="assets/persons/3.jpg" alt="" />
                                <span className="rightbarOnline"></span>
                            </div>
                            <span className="rightbarUsername">John carter</span>
                        </li>
                        <li className="rightbarFriend">
                            <div className="rightbarProfileImgContainer">
                                <img className='rightbarProfileImg' src="assets/persons/3.jpg" alt="" />
                                <span className="rightbarOnline"></span>
                            </div>
                            <span className="rightbarUsername">John carter</span>
                        </li>
                        <li className="rightbarFriend">
                            <div className="rightbarProfileImgContainer">
                                <img className='rightbarProfileImg' src="assets/persons/3.jpg" alt="" />
                                <span className="rightbarOnline"></span>
                            </div>
                            <span className="rightbarUsername">John carter</span>
                        </li>
                    </ul>
                </div>
            </div>
    )
}