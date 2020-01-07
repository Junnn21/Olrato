import React,{Component} from 'react'
import profilePic from '../image/profilePic.jpg'
import contentPic from '../image/contentPic.jpg'
import basketIcon from '../image/basketIcon.png'
import calendarIcon from '../image/calenderIcon.png'
import locationIcon from '../image/locationIcon.png'
import peopleIcon from '../image/peopleIcon.png'
import './ProfilePost.css'

export default class ProfilePost extends Component{
    render(){
        return(
            <div className="profilePost">
                <div className="profile">
                    <div className="profilePic">
                        <img src={profilePic}/>
                    </div>
                    <div className="profileDesc">
                        <p>Christopher Hartanto</p>
                        <div className="category">
                            <img src={basketIcon} />
                            <p>BasketBall</p>
                        </div>
                    </div>
                </div>
                <div className="postContent">
                    <img src={contentPic} alt="" />
                    <p>Looking for some friends to play Basketball</p>
                    <div className="calendar">
                        <img src={calendarIcon} alt="" />
                        <p>09 December 2019, 17:00 - End</p>
                    </div>
                    <div className="location">
                        <img src={locationIcon} alt="" />
                        <p>Apartemen Mediterania Garden, Basketball Courd</p>
                    </div>
                    <div className="slot">
                        <img src={peopleIcon} alt="" />
                        <p>5 Peoples Remaining</p>
                    </div>
                </div>
                <button>Join</button>
            </div>
        )
    }
}