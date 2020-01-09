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
                    <p>Futsal 5 vs 5 Competition</p>
                </div>
                <div className="event">
                    <p>Fun Run 10k</p>
                </div>
            </div>
        )
    }
}