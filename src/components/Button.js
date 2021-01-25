import React from 'react';
import "./Button.css";
import { Link } from "react-router-dom";

const styles = ["btn--primary", "btn--outline"]; /*creating an array of styles and it has 2 button classes [0,1] */

const sizes = ["btn--medium", "btn--large"];

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {      /* passing properties */
  const checkButtonStyle = styles.includes(buttonStyle) ? buttonStyle : styles[0];  /* creating button style function */

  const checkButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[0];       /* creating button size fucntion */

  return(
    <Link to="/" className = "btn-mobile">
        <button className = {`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children} {/* whatever you put inside the button it will render that */}
        </button>
        
    </Link>
  )

};