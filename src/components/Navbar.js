import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
 
function Navbar() {
    const [click, setClick] = useState(false); /*click is the name of the state */

    const handleClick = () => setClick(!click); /* !click = true */
    const closeMobileMenu = () => setClick(false);

    return (
        <>
           <nav className="navbar">
               <div className="navbar-container">
                 <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                     <i class="fab fa-cuttlefish"></i>RICKZZ 
                 </Link>
                 <div className="menu-icon" onClick={handleClick}>
                        <i className={ click ? "fas fa-times" : "fas fa-bars"} /> {/* if clicked then the state will change
                                                                                    from bars to cross and vice-versa */}
                 </div>
                 <ul className ={click ? "nav-menu active" : "nav-menu"}> {/*whenever someone click the nav-items navbar should disappear */}
                     <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                     </li>
                    <li className="nav-item">
                        <Link to="/country" className="nav-links" onClick={closeMobileMenu}>
                            Countries
                        </Link>
                    </li> 
                    <li className="nav-item">
                        <Link to="/tournaments" className="nav-links" onClick={closeMobileMenu}>
                            Tournaments
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/scores" className="nav-links" onClick={closeMobileMenu}>
                            Scoreboard
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/venue" className="nav-links" onClick={closeMobileMenu}>
                            Venues
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-links-mobile" onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>   
                 </ul>
               </div>
           </nav>
        </>
    )
}


export default Navbar
