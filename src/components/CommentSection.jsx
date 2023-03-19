import React, { useContext } from "react";
import CommentsContext from "./store/CommentsContext";
import CommentInstant from "./CommentInstant";
import './CommentSection.css'

const CommentSection = (props) => {
    const {comments} = useContext(CommentsContext);
    return (
        <div className="comment--section">
            {
                comments.map(cmt => {
                    return (
                        <CommentInstant key={cmt.id} cmt={cmt}/>
                    );
                })
            }
        </div>
    );
}

export default CommentSection;