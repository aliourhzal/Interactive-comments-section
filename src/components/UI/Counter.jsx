import React from "react";
import './Counter.css'

const Counter = (props) => {
    return (
        <div className="counter--container">
            <div className="counter">
                <button className="plus">
                    <img src='./images/icon-plus.svg' alt="plus" />
                </button>
                <span className="num">{props.children}</span>
                <button className="minus">
                    <img src='./images/icon-minus.svg' alt="plus" />
                </button>
            </div>
        </div>
    );
}

export default Counter;
