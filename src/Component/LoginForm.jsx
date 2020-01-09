import React from 'react';
import './LoginForm.css'
import google from '../image/google.jpg'
import { 
    withRouter,
    Link
 } from 'react-router-dom'

class LoginForm extends React.Component{

    submitForm(e){
        e.preventDefault();
        this.props.history.push('/Home');
    }
    
    render(){
        return(
            <div className = "LoginForm">
                <form onSubmit={this.submitForm.bind(this)}>
                    <h2>Log in to your account</h2>
                    <input placeholder="Username"></input>
                    <input className = "passwordField" placeholder="Password" type="password"></input>
                    <button className="loginBtn" type="submit">Log In</button>
                    <span className="Forgot">Forgot Password?</span>
                </form>
                <div className="register">
                    <img className = "google" src={google} alt=""/>
                    <p className="googleLogin">Log In with Google</p>
                </div>
                <div className="register">
                    <p>Don't have an account?</p>
                    <Link to="/Register" className="signUp">Sign Up Here</Link>
                </div>
            </div>
        )
    }
}

export default withRouter(LoginForm);