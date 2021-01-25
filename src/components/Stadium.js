import React from 'react';
import venue from "../venue.json";
import "./Stadium.css";

function Stadium() {
    return (
        <div className="stadiums">
          <h1>STADIUMS</h1>
        {venue.map(post => {
            return(
                <div className="stadium-title">
                    <div className="stadium-info">
                        <img src={post.image} alt={post.name} />
                        <h3>NAME: {post.name}</h3>
                        <h4>LOCATION: {post.place}</h4>
                        <h4>CAPACITY: {post.capacity}</h4>
                        <h4>MATCHES PLAYED: {post.noOfMatches}</h4>
                        <h4>FIRST MATCH: {post.firstMatch}</h4>
                        <h4>LAST MATCH: {post.lastMatch}</h4>
                        <a href={post.site} className="links">MORE INFO</a><br/>
                    </div>
                </div>
            )
        })}
        </div>
    )
}

export default Stadium
