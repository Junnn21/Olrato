import React,{Component} from 'react';
import Post from './Post'
import profilePic from '../image/profilePic.jpg'
import profilePic2 from '../image/profilePic2.jpg'
import basketIcon from '../image/basketIcon.png'
import runningIcon from '../image/runningIcon.png'
import contentPic from '../image/contentPic.jpg'
import contentPic2 from '../image/contentPic2.png'
import profilePic3 from '../image/profilePic3.jpg'
import contentPic3 from '../image/contentPic3.jpg'
import badmintonIcon from '../image/badmintonIcon.png'

export default class HomePosts extends Component {
    state = {
        posts: [

        ]
    }

    componentDidMount() {
        this.setState({
            posts: [
                {
                    profilePic: profilePic,
                    name: "Christopher Hartanto",
                    category: "Basketball",
                    categoryPic: basketIcon,
                    contentPic: contentPic,
                    description: "Looking for some friends to play Basketball",
                    date: "09 December 2019, 17:00 - End",
                    place: "Apartement Mediterania Garden, Basketball Court",
                    slot: "5 Peoples remaining"
                },
                {
                    profilePic: profilePic2,
                    name: "Wilsen Zen",
                    category: "Running",
                    categoryPic: runningIcon,
                    contentPic: contentPic2,
                    description: "Come join this event!",
                    date: "29 December 2019, 15:00 - End",
                    place: "CFD Thamrin",
                    slot: "10 Peoples remaining"
                },
                {
                    profilePic: profilePic3,
                    name: "Jun Chandra",
                    category: "Badminton",
                    categoryPic: badmintonIcon,
                    contentPic: contentPic3,
                    description: "Lets do some workout!",
                    date: "02 January 2019, 15:00 - 17:00",
                    place: "Tangkas Sport Centre",
                    slot: "2 Peoples remaining"
                }
            ]
        })
    }

    render() {
        return (
            this.state.posts.map((post, idx) => (
                <Post key={idx} post={post} />
            ))
        )
    }
}