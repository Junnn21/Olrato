import React, { Component } from 'react'
import './People.css'

export default class People extends Component {
    render() {
        return (
            <div className="People">
                <div className="PeopleprofilePic">
                    <img src={this.props.people.profilePic} alt="" />
                </div>
                <div className="PeopleDesc">
                    <p>{this.props.people.name}</p>
                    <p>{this.props.people.description}</p>
                </div>
            </div>
        )
    }
}