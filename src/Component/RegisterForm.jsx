import React from 'react';
import './RegisterForm.css'
import { Link, withRouter } from 'react-router-dom';

class RegisterForm extends React.Component{

    submitForm(e){
        e.preventDefault();
        this.props.history.push('/');
    }

    render(){
        return(
            <div className = "registerForm">
                <form onSubmit = {this.submitForm.bind(this)}>
                    <h2>Sign up to Olrato</h2>
                    <input type = "text" placeholder = "Username"/>
                    <input type = "email" placeholder = "Email"/>
                    <input type = "password" placeholder = "Password"/>
                    <input type = "password" placeholder = "Confirm Password"/>
                    <button className = "registerBtn" type = "submit">Sign Up</button>
                </form>
                <div className = "Login">
                    <p>Already have account?</p> 
                    <Link className ="loginLink" to = "/">Log In Here</Link>
                </div>
            </div>
        )
    }
}

export default withRouter(RegisterForm);