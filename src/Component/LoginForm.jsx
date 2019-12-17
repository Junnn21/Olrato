import React from 'react';
import './LoginForm.css'

export default class LoginForm extends React.Component{
    render(){
        return(
            <div className = "LoginForm">
                <form>
                    <h2>Log in to your account</h2>
                    <input placeholder="Username"></input>
                    <input placeholder="Password" type="password"></input>
                    <button type="submit">Log In</button>
                    <span>Forgot Password?</span>
                </form>
            </div>
        )
    }
}