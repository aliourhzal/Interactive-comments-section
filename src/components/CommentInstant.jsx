import React, { useContext, useState, useReducer } from "react";
import CommentBlock from "./UI/CommentBlock";
import InsertComment from "./InsertComment";
import './CommentInstant.css'

const checkOwnership = (state, action) => {
    if (!state.isDisplayed)
        return ({isDisplayed: true, owner: action.performer});
    else
    {
        if (state.owner === action.performer)
            return ({isDisplayed: false, owner: state.owner});
        else
            return ({isDisplayed: true, owner: action.performer});
    }
}

const CommentInstant = (props) => {
    const [ rplFieldState, dispatch ] = useReducer(checkOwnership, {isDisplayed: false, owner: ''});

    const displayRplField = (performer) => {
        dispatch({performer: performer});
    }

    return (
        <div className="comment--instant">
            <CommentBlock cmt={props.cmt} displayRpl={displayRplField}/>
            {
                props.cmt.replies.map(rpl => {
                    return (
                        <CommentBlock className='rpl' key={rpl.id} cmt={rpl} displayRpl={displayRplField}/>
                    );
                })
            }
            {
               rplFieldState.isDisplayed && <InsertComment as='rpl' className='rpl' cmt={props.cmt}>{rplFieldState.owner}</InsertComment>
            }
        </div>
    );
}

export default CommentInstant;