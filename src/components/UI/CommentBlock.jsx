import React, { useContext } from "react";
import Card from "./Card";
import Counter from "./Counter";
import Button from "./Botton";
import './CommentBody.css'
import './CommentBlock.css'
import CommentsContext from "../store/CommentsContext";

const CommentBody = (props) => {
    const { currentUser, deleteComment } = useContext(CommentsContext);
    const cmt = props.cmt;
    const isCurrent = currentUser.username === cmt.user.username;

    return (
        <div className="info">
            <div className="user--info">
                <img src={cmt.user.image.png} alt="avatar" className="avatar"/>
                <span className="username">{cmt.user.username}</span>
                <span className="Date">{cmt.createdAt}</span>
                <div className="btns">
                    {
                        !isCurrent && <Button label='Reply' src='/images/icon-reply.svg' onClick={props.displayRpl}/>
                    }
                    {
                        isCurrent && <Button label='Delete' src='/images/icon-delete.svg' onClick={() => {deleteComment(cmt.id)}}/>
                    }
                    {
                        isCurrent && <Button label='Edit' src='/images/icon-edit.svg' onClick={() => console.log('edit')}/>
                    }
                </div>
            </div>
            <p className="user--comment">{cmt.content}</p>
        </div>
    );
}

const CommentBlock = (props) => {
    return (
        <Card  className={`comment ${props.className}`}>
            <Counter>{props.cmt.score}</Counter>
            <CommentBody cmt={props.cmt} displayRpl={props.displayRpl}/>
        </Card>
    );
}

export default CommentBlock;