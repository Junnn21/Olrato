import React from 'react';
import plusIcon from '../image/plusIcon.jpg'
import chatIcon from '../image/chatIcon.png'
import profileIcon from '../image/profileIcon.jpg'
import './Header.css'
import { withRouter } from 'react-router-dom';

class Header extends React.Component {
    logout(e) {
        e.preventDefault();
        this.props.history.push('/');
    }

    home(e){
        e.preventDefault();
        this.props.history.push('/Home')
    }

    add(e){
        e.preventDefault();
        this.props.history.push('/AddPost');
    }
    chat(e){
        e.preventDefault();
        this.props.history.push('/Chat')
    }
    profile(e){
        e.preventDefault();
        this.props.history.push('./Profile')
    }

render(){
    return (
        <div className="Header">
            <div className="Headerr">
                <div className="HeaderTitle" onClick={this.home.bind(this)}>
                    <h2 className="Olrato">OLRATO</h2>
                </div>
                <input type="text" placeholder="Search" />
                <div className="navigation">
                    <div className="plus" onClick={this.add.bind(this)}>
                        <img src={plusIcon} alt="" />
                    </div>
                    <div className="chat" onClick={this.chat.bind(this)}>
                        <img src={chatIcon} alt="" />
                    </div>
                    <div className="profile" onClick={this.profile.bind(this)}>
                        <img src={profileIcon} alt="" />
                    </div>
                    <button onClick={this.logout.bind(this)}>Log Out</button>
                </div>
            </div>
            {this.props.children}
        </div>
    )
}
}

export default withRouter(Header);