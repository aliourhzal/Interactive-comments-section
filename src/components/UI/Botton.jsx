import React from "react";
import './Button.css'

const Button = (props) => {
    return (
        <button className="button" onClick={props.onClick}>
            <img src={props.src} alt={props.label} />
            <span className={props.label} >{props.label}</span>
        </button>
    );
}

export default Button;