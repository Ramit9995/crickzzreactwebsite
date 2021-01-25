import React from 'react';
import "../App.css";
import "./HeroSection.css";


function HeroSection() {
   
    return (
        <div className="hero-container">
            <h1>EXPERIENCE CRICKET</h1>
            <p>What are You waiting for?</p>
            <div className="hero-btns">
                <a href="https://en.wikipedia.org/wiki/Cricket_World_Cup" className="btn--large">KNOW MORE </a>
            </div>
            <div className="hero-btns">
                <a href="https://www.youtube.com/watch?v=ib-Km31OQAk" className="btn--large">WORLD CUP '19 </a>
            </div>
        </div>
    )
}


export default HeroSection
