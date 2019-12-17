import React from 'react';
import './LoginForm.css'
import google from '../image/google.jpg'

export default class LoginForm extends React.Component{
    render(){
        return(
            <div className = "LoginForm">
                <form>
                    <h2>Log in to your account</h2>
                    <input placeholder="Username"></input>
                    <input className = "passwordField" placeholder="Password" type="password"></input>
                    <button type="submit">Log In</button>
                    <span className="Forgot">Forgot Password?</span>
                </form>
                <div className="register">
                    <img className = "google" src={google} alt=""/>
                    <p className="googleLogin">Log In with Google</p>
                </div>
                <div className="register">
                    <p>Don't have an account?</p>
                    <p className="signUp">Sign Up Here</p>
                </div>
            </div>
        )
    }
}