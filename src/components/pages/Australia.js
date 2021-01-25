import React from 'react';
import Ausplayers from "../Ausplayers";
import Footer from "../Footer";

function Australia() {
    return (
        <>
        <div className="aus-container">
            <h1>AUSTRALIA</h1>
            <p>Year Joined: 1905</p>
            <p><a href="http://www.cricket.com.au/">Official Website</a></p>
        </div>
        <Ausplayers />
        <Footer />
        </>
    )
}

export default Australia
