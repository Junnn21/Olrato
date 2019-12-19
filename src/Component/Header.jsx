import React from 'react';
import plusIcon from '../image/plusIcon.jpg'
import chatIcon from '../image/chatIcon.png'
import profileIcon from '../image/profileIcon.jpg'
import searchIcon from '../image/searchIcon.png'
import './Header.css'
import { withRouter } from 'react-router-dom';

class Header extends React.Component{

    logout(e){
        e.preventDefault();
        this.props.history.push('/');
    }

    render(){
        return(
            <div className = "Header">
                <h2 className = "Olrato">OLRATO</h2>
                <input type = "text" placeholder = "Search"/>
                <div className = "navigation">
                    <img src = {plusIcon} alt=""/>
                    <img src = {chatIcon} alt=""/>
                    <img src = {profileIcon} alt=""/>
                    <button onClick={this.logout.bind(this)}>Log Out</button>
                </div>               
            </div>
        )
    }
}

export default withRouter(Header);