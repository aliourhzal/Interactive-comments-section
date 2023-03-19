import React, { useContext, useState } from "react";
import Card from "./Card";
import Counter from "./Counter";
import Button from "./Botton";
import './CommentBody.css'
import './CommentBlock.css'
import CommentsContext from "../store/CommentsContext";

const EditComment = (props) => {
    return (
        <form>
            <textarea value={props.oldValue} rows='5'></textarea>
        </form>
    );
}

const CommentBody = (props) => {
    const { currentUser, deleteComment } = useContext(CommentsContext);
    const [onEdit, setOnEdit] = useState(false);
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
                        isCurrent && <Button label='Edit' src='/images/icon-edit.svg' onClick={() => setOnEdit(state => !state)}/>
                    }
                </div>
            </div>
            {
                !onEdit && <p className="user--comment">{cmt.content}</p>
            }
            {
                onEdit && <EditComment oldValue={cmt.content} />
            }
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