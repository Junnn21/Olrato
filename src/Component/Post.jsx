import React, { Component } from 'react'
import './Post.css'
import calendarIcon from '../image/calenderIcon.png'
import locationIcon from '../image/locationIcon.png'
import peopleIcon from '../image/peopleIcon.png'

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <div className="profile">
                    <div className="profilePic">
                        <img src={this.props.post.profilePic} alt={this.props.post.profilePic} />
                    </div>
                    <div className="profileDesc">
                        <p>{this.props.post.name}</p>
                        <div className="category">
                            <img src={this.props.post.categoryPic} alt={this.props.post.categoryPic} />
                            <p>{this.props.post.category}</p>
                        </div>
                    </div>
                </div>
                <div className="postContent">
                    <img src={this.props.post.contentPic} alt="" />
                    <p>{this.props.post.description}</p>
                    <div className="calendar">
                        <img src={calendarIcon} alt="" />
                        <p>{this.props.post.date}</p>
                    </div>
                    <div className="location">
                        <img src={locationIcon} alt="" />
                        <p>{this.props.post.place}</p>
                    </div>
                    <div className="slot">
                        <img src={peopleIcon} alt="" />
                        <p>{this.props.post.slot}</p>
                    </div>
                </div>
                <button>Join</button>
            </div>
        )
    }
}