import React from 'react';
import "./Scoreboard.css";
import score from "../score.json";

function Scoreboard() {
    return (
        <div class="score-highlights">
        <h1>TOURNAMENT LEADERBOARD</h1>
        <div className="row">
            {score.map(post => {
                return( 
                        <div class="column">
                            
                            <table class="tab0">
                            <tr>
                                <th>RANK</th>
                                <th>TEAM</th>
                                <th>PCT</th>
                                <th>POINTS</th>
                                <th>MATCHES PLAYED</th>
                                <th>WON</th>
                                <th>LOST</th>
                                <th>DRAWN</th>
                            </tr>
                            <tr>
                                <td>{post.rank}</td>
                                <td>{post.team}</td>
                                <td>{post.pct}</td>
                                <td>{post.points}</td>
                                <td>{post.matchesPlayed}</td>
                                <td>{post.won}</td>
                                <td>{post.lost}</td>
                                <td>{post.drawn}</td>
                            </tr>
                            
                            </table>
                        </div>
                    )
                })}       
            </div>
        </div>
    )
}

export default Scoreboard
