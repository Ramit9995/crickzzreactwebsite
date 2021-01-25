 import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
    return (
        <div className="cards">
            <h1>CRICKZZ Inshorts</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        
                        <CardItem 
                            src="https://img.cricketworld.com/images/d-087034/2020-08-06t144915z_584414276_rc2e8i9q49hs_rtrmadp_3_cricket-test-eng-pak.jpg" text="England Selectors name Test squad 
                                  for first and second Tests in India" label="HOT" 
                        />     

                        <CardItem                    
                            src="https://img.cricketworld.com/images/d-087026/australia-v-india---sydney-cricket-ground,-sydney,-australia---december-8,-2020-india-fans.jpg" text="England tour of India 2021:
                                 Venues, Player Squads - All You need to Know" label="HOT"
                        /> 
                    </ul>
                    <ul className="cards-items">
                        <CardItem                    
                            src="https://img.cricketworld.com/images/d-086995/india's-virat-kohli-.jpg" text="Kohli's Adelaide revolution bears fruit at the Gabba" label="NEW"
                        />             {/* passing the li (CardItem component) */}

                        <CardItem                    
                            src="https://img.cricketworld.com/images/d-086950/img_9069.jpg" text="BCCI congratulates Team India after impressive win" label="NEW"
                        /> 
                        <CardItem                    
                            src="https://img.cricketworld.com/images/f-082592/gettyimages-963720284-cropped-(1).jpg" text="ICC express sadness on passing of John Reid" label="NEW"
                        /> 
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
