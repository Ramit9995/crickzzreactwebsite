    import React from 'react';
    import { Link } from "react-router-dom";

    function CardItem(props) {
        return (
            <>
                <li className="cards-items">
                    <Link className="cards-item-link">
                        <figure className="cards-item-pic-wrap">
                            <img src={props.src} alt="Cricket" className="cards-item-img"/>
                        </figure>
                        <div className="cards-item-info">
                            <h5 className="cards-item-text">
                                {props.text}
                            </h5>
                        </div>
                    </Link>
                </li>
            </>
        );
    }
    
    export default CardItem
    