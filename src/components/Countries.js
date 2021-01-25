import React from 'react';
import { Link } from 'react-router-dom';
import data from "../data.json";
import "./Countries.css";

function Countries() {
    return (
        <div className="countryz-container">
          <h1>COUNTRY PROFILES</h1>
        {data.map(post => {
            return(
                <div className="countryz-title">
                    <div className="countryz-info">
                        <img src={post.image} alt={post.title} />
                        <h3>NAME: {post.title}</h3>
                        <h4>YEAR JOINED: {post.year}</h4>
                        <h4>NUMBER OF MATCHES: {post.noOfMatches}</h4>
                        <h4>VICTORIES: {post.win}</h4>
                        <h4>DEFEATS: {post.loss}</h4>
                        <h4>TIES: {post.ties}</h4>
                        <Link class="player-page" to={post.path}>VIEW PLAYERS</Link>
                    </div>
                </div>
            )
        })}
        </div>
    )
}

export default Countries
