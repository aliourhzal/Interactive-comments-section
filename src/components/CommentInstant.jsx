import React, { useContext, useState } from "react";
import CommentBlock from "./UI/CommentBlock";
import InsertComment from "./InsertComment";
import './CommentInstant.css'

const CommentInstant = (props) => {
    const [ rplFieldState, setRplFieldState ] = useState(false);

    const displayRplField = () => {
        setRplFieldState(oldState => !oldState);
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
               rplFieldState && <InsertComment as='rpl' className='rpl' cmt={props.cmt}/>
            }
        </div>
    );
}

export default CommentInstant;