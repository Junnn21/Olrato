import React, { Component } from 'react';
import './HomeContent.css'
import basketIcon from '../image/basketIcon.png'
import footballIcon from '../image/footballIcon.png'
import runningIcon from '../image/runningIcon.png'
import swimIcon from '../image/swimIcon.png'
import golfIcon from '../image/golfIcon.png'
import climbingIcon from '../image/climbingIcon.png'
import badmintonIcon from '../image/badmintonIcon.png'
import tabbleTennisIcon from '../image/tabbleTennisIcon.jpg'
import volleyIcon from '../image/volleyIcon.png'
import otherIcon from '../image/otherIcon.png'
import HomePosts from './HomePosts'
import Footer from './Footer'

class HomeContent extends Component {
    render() {
        return (
            <div className="content">
                <HomePosts />
                <div className="filterCategory">
                    <div className="titleFilter">
                        <p>Filter with category of sports</p>
                    </div>
                    <div className="filterItem">
                        <img src={basketIcon} alt="" />
                        <p>Basketball</p>
                        <input type="checkbox" name="category"></input>
                    </div>
                    <div className="filterItem">
                        <img src={footballIcon} alt="" />
                        <p>Football</p>
                        <input type="checkbox" name="category"></input>
                    </div>
                    <div className="filterItem">
                        <img src={runningIcon} alt="" />
                        <p>Running</p>
                        <input type="checkbox" name="category"></input>
                    </div>
                    <div className="filterItem">
                        <img src={swimIcon} alt="" />
                        <p>Swimming</p>
                        <input type="checkbox" name="category"></input>
                    </div>
                    <div className="filterItem">
                        <img src={golfIcon} alt="" />
                        <p>Golf</p>
                        <input type="checkbox" name="category"></input>
                    </div>
                    <div className="filterItem">
                        <img src={climbingIcon} alt="" />
                        <p>Climbing</p>
                        <input type="checkbox" name="category"></input>
                    </div>
                    <div className="filterItem">
                        <img src={badmintonIcon} alt="" />
                        <p>Badminton</p>
                        <input type="checkbox" name="category"></input>
                    </div>
                    <div className="filterItem">
                        <img src={tabbleTennisIcon} alt="" />
                        <p>Table Tennis</p>
                        <input type="checkbox" name="category"></input>
                    </div>
                    <div className="filterItem">
                        <img src={volleyIcon} alt="" />
                        <p>Volley</p>
                        <input type="checkbox" name="category"></input>
                    </div>
                    <div className="filterItemlast">
                        <img src={otherIcon} alt="" />
                        <p>Others</p>
                        <input type="checkbox" name="category"></input>
                    </div>
                    <div className="aboutFooter">
                        <Footer></Footer>    
                    </div>        
                </div>
            </div>
        )
    }
}

export default HomeContent;