import React, { useContext } from "react";
import Card from "./UI/Card";
import CommentsContext from "./store/CommentsContext";
import './InsertComment.css'


const InsertComment = (props) => {
    const {currentUser, comments, updateComments, updateRplies} = useContext(CommentsContext);

    const newCommentHandler = (e) => {
        e.preventDefault();
        const newComment = {
            content: e.target[0].value,
            createdAt: 'now',
            id: Date.now(),
            replies: [],
            score: 0,
            user: {...currentUser}
        }
        updateComments(newComment);
        e.target[0].value = '';
    }
    
    const newReplyHandler = (e) => {
        e.preventDefault();
        const newRpl = {
            id: Date.now(),
            content: e.target[0].value,
            createdAt: "now",
            score: 0,
            replyingTo: props.cmt.user.username,
            user: {...currentUser}
        }
        updateRplies(props.cmt.id, newRpl);
        e.target[0].value = '';
    }

    return (
        <Card className={`insert--comment ${props.className}`}>
            <img src={currentUser.image.png} alt=""/>
            <form onSubmit={props.as === 'cmt' ? newCommentHandler : newReplyHandler}>
                <textarea placeholder="Add a comment..." rows='6'/>
                <button>SEND</button>
            </form>
        </Card>
    );
}

export default InsertComment;