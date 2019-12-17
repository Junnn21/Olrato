import React from 'react';
import Olrato from '../image/Olrato.png'
import './Opening.css'

export default class Opening extends React.Component{
    render(){
        return(
            <div className = "all">
                <div className = "Opening">
                    <h1>OLRATO</h1>
                    <span>Find and share something related to sports here.</span>
                    <img src={Olrato} alt=""/>
                </div>
                {this.props.children}
            </div>
        )
    }
}