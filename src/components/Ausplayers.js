import React from 'react';
import Player from "../playersAus.json";
import "./General.css";
import Footer from "./Footer";

function Ausplayers() {
    return (
        <>
        <div className="players">
          <h1>PLAYER PROFILES</h1>
        {Player.map(post => {
            return(
                <div className="player-title">
                    <div className="aus-player-info">
                        <img src={post.playerImage} alt={post.fullName} />
                        <h3>FULL NAME: {post.fullName}</h3>
                        <h4>DATE OF BIRTH: {post.born}</h4>
                        <h4>CURRENT AGE: {post.currentAge}</h4>
                        <h4>MAJOR TEAMS: {post.majorTeams}</h4>
                        <h4>PLAYING ROLE: {post.playingRole}</h4><br/>
                    </div>
                </div>
            )
        })}
        </div>
        <Footer />
        </>
    )
}

export default Ausplayers
