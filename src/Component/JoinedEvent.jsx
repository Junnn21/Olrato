import React,{Component} from 'react'
import './JoinedEvent.css'

export default class JoinedEvent extends Component{
    render(){
        return(
            <div className="JoinedEvent">
                <div className="titleEvent">
                    <p>Joined Event:</p>
                </div>
                <div className="event">
                    <p>Wilsen Zen's Event</p>
                </div>
                <div className="event">
                    <p>Jun Chandra's Event</p>
                </div>
            </div>
        )
    }
}