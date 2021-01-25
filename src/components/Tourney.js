import React from 'react';
import postmatches from "../postMatches.json";
import futurematches from "../futureMatches.json";
import "./Tourney.css";

function Tourney() {
    return (
        <div class="match-highlights">
        <h1>TOURNAMENT HIGHLIGHTS</h1>
        <div className="row">
            {postmatches.map(post => {
                return( 
                        <div class="column">
                            <table class="tab">
                            <tr>
                                <th>MATCH - {post.match}</th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>{post.team1}</td>
                                <td>{post.team1Score}</td>
                                
                            </tr>
                            <tr>
                                <td>{post.team2}</td>
                                <td>{post.team2Score}</td>
                                
                            </tr>
                            <tr>
                                <td>Man of the Match</td>
                                <td>{post.manOfTheMatch}</td>
                            </tr>
                            <tr>
                                <td>Bowler of the Match</td>
                                <td>{post.bowlerOfTheMatch}</td>
                            </tr>
                            <tr>
                                <td>Best Fielder</td>
                                <td>{post.bestFielder}</td>
                            </tr>
                            <tr>
                                <td>RESULT</td>
                                <td>{post.result}</td>
                                
                            </tr>
                            </table>
                        </div>
                    )
                })}       
            </div>
            
            <h1 class="upcoming-matches">UPCOMING MATCHES</h1>
                <div className="row">
                    {futurematches.map(post => {
                        return( 
                                <div class="column">
                                    <table class="tab">
                                    <tr>
                                        <th>MATCH - {post.match}</th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <td>{post.team1}</td>
                                        <td>N/A</td>
                                    </tr>
                                    <tr>
                                        <td>{post.team2}</td> 
                                        <td>N/A</td>
                                    </tr>
                                    <tr>
                                        <td>STARTS AT</td>
                                        <td>{post.start}</td> 
                                    </tr>
                                    </table>
                                </div>
                            )
                        })}       
                    </div>

        </div>
    )
}

export default Tourney
