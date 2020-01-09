import React,{Component} from 'react'
import Header from './Component/Header'
import aboutVideo from './about.mkv'
import './About.css'

export default class About extends Component{
    render(){
        return(
            <div className="container about">
                <Header>
                </Header>
                <video src={aboutVideo} controls>
                </video>
            </div>
        )
    }
}