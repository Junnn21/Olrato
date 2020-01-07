import React, { Component } from 'react'
import Header from './Component/Header'
import ChatPeople from './Component/ChatPeople'
import ChatContent from './Component/ChatContent'
import './Chat.css'

export default class Chat extends Component {
    render() {
        return (
            <div className="chatPage">
                <Header></Header>
                <div className="chatBox">
                    <div className="chatPeople">
                        <ChatPeople />
                    </div>
                    <div className="chatContentBox">
                        <ChatContent />
                    </div>
                </div>
            </div>
        )
    }
}