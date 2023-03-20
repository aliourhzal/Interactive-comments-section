import React, { useContext } from "react";
import CommentsContext from "../store/CommentsContext";
import './Counter.css'

const Counter = (props) => {
    const { updateScore } = useContext(CommentsContext);
    return (
        <div className="counter--container">
            <div className="counter">
                <button className="plus" onClick={() => updateScore(props.cmt.id, props.cmt.score + 1)}>
                    <img src='./images/icon-plus.svg' alt="plus" />
                </button>
                <span className="num">{props.cmt.score}</span>
                <button className="minus" onClick={() => updateScore(props.cmt.id, props.cmt.score - 1)}>
                    <img src='./images/icon-minus.svg' alt="plus" />
                </button>
            </div>
        </div>
    );
}

export default Counter;
