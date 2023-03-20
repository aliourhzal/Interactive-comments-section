import React, { useContext, useRef, useState } from "react";
import Card from "./Card";
import Counter from "./Counter";
import Button from "./Botton";
import './CommentBody.css'
import './CommentBlock.css'
import CommentsContext from "../store/CommentsContext";

const EditComment = (props) => {
    return (
        <form>
            <textarea className="user--comment user--comment-edit" value={props.oldValue} onChange={props.onChange}></textarea>
        </form>
    );
}

const CommentBody = (props) => {
    const { currentUser, deleteComment, editComments } = useContext(CommentsContext);
    const [onEdit, setOnEdit] = useState(false);
    const cmt = props.cmt;
    const [cmtValue, setCmtValue] = useState(cmt.content);
    const isCurrent = currentUser.username === cmt.user.username;

    const updateCmtValue = (e) => {
        setCmtValue(e.target.value);
    }

    const saveCmtValue = () => {
        if (onEdit)
            editComments(cmt.id, cmtValue);
        setOnEdit(state => !state)
    }

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
                        isCurrent && <Button label='Edit' src='/images/icon-edit.svg' onClick={saveCmtValue}/>
                    }
                </div>
            </div>
            {
                !onEdit ?
                    <p className="user--comment">{cmt.content}</p> :
                    <EditComment oldValue={cmtValue} onChange={updateCmtValue}/>
            }
        </div>
    );
}

const CommentBlock = (props) => {
    return (
        <Card  className={`comment ${props.className}`}>
            <Counter cmt={props.cmt}/>
            <CommentBody cmt={props.cmt} displayRpl={props.displayRpl}/>
        </Card>
    );
}

export default CommentBlock;