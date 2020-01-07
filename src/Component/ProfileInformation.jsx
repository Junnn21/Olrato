import React,{Component} from 'react'
import profilePic from '../image/profilePic.jpg'
import './ProfileInformation.css'
import JoinedEvent from './JoinedEvent'

export default class ProfileInformation extends Component{
    render(){
        return(
            <div className="profileInformation">
                <div className="profilePicImg">
                    <img src={profilePic} alt=""/>
                </div>
                <div className="profileInfo">
                    <div className="profileName">
                        <p>Christopher Hartanto</p>
                    </div>
                    <div className="profileFollows">
                        <div className="profileFollowers">
                            <p>Followers: 1000</p>
                        </div>
                        <div className="profileFollowing">
                            <p>Following: 200</p>
                        </div>
                    </div>
                    <p>1 Post</p>
                    <button>Edit Profile</button>
                </div>
                <JoinedEvent />
            </div>
        )
    }
}