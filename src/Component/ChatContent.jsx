import React,{Component} from 'react'
import './ChatContent.css'
import profilePic from '../image/profilePic.jpg'
import profilePic2 from '../image/profilePic2.jpg'
import sendIcon from '../image/sendIcon.png'

export default class ChatContent extends Component{
    render(){
        return(
            <div className="chatContent">
                <div className="chatContent1">
                    <img src={profilePic2} alt=""/>
                    <div className="chatText">
                        <p>Did you see the match yesterday?</p>
                    </div>
                </div>
                <div className="chatContent2">                
                    <div className="chatText2">
                        <p>No, What happened?</p>
                    </div>
                    <img src={profilePic} alt=""/>
                </div>
                <div className="chatContent1">
                    <img src={profilePic2} alt=""/>
                    <div className="chatText">
                        <p>The match is crazy</p>
                    </div>
                </div>
                <div className="inputMessage">
                    <input type="text" placeholder="Input a message here"/>
                    <div className="inputImage">
                        <img src={sendIcon} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}