import React,{Component} from 'react'
import profilePic from '../image/profilePic2.jpg'
import profilePic2 from '../image/profilePic3.jpg'
import People from './People'

export default class ChatPeople extends Component{
    state = {
        peoples: [

        ]
    }

    componentDidMount(){
        this.setState({
            peoples: [
                {
                    name: "Wilsen Zen",
                    profilePic: profilePic,
                    description: "The match is crazy"
                },
                {
                    name: "Jun Chandra",
                    profilePic: profilePic2,
                    description: "Hello"
                }
            ]
        })
    }
    render(){
        return(
            this.state.peoples.map((people, idx) => (
                <People key={idx} people={people} />
            ))
        )
    }
}