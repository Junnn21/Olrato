import React,{Component} from 'react'
import Header from './Component/Header'
import ProfileInformation from './Component/ProfileInformation'
import ProfilePost from './Component/ProfilePost'

export default class Profile extends Component{
    render(){
        return(
            <div>
                <Header></Header>
                <ProfileInformation />
                <ProfilePost />
            </div>
        )
    }
}