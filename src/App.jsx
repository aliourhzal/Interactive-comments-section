import { useState, useReducer } from 'react'
import data  from '../design/data.json'
import CommentSection from './Components/CommentSection';
import CommentsContext from './Components/store/CommentsContext';
import InsertComment from "./Components/InsertComment";

const reducer = (state, action) => {

	const updateElement = (e) => {
		let target;
		target = state.findIndex(cmt => cmt.id === action.id);
		if (target < 0)
		{
			const updatedComments = state.map(cmt => {
				const target = cmt.replies.find(rpl => rpl.id === action.id);
				if (target)
					target[e] = action.value;
				return (cmt);
			})
			return (updatedComments);
		}
		else
		{
			state[target][e] = action.value;
			const updatedComments = [...state];
			return (updatedComments);
		}
	}

	if (action.type === 'ADD_CMNT')
		return ([...state, action.value])
	if (action.type === 'ADD_RPL')
	{
		const target = state.findIndex((cmt => cmt.id === action.id));
		const newState = [...state];
		newState[target].replies = [...state[target].replies, {...action.value}];
		return (newState);
	}
	if (action.type === 'DLT_CMNT')
	{
		let updatedComments;
		updatedComments = state.filter(cmt => cmt.id != action.id);
		if (JSON.stringify(updatedComments) === JSON.stringify(state))
		{
			updatedComments = state.map(cmt => {
				const updateRpl = cmt.replies.filter(rpl => rpl.id !== action.id);
				const newCmt = {...cmt};
				newCmt.replies = [...updateRpl];
				return (newCmt);
			});
		}
		return (updatedComments);
	}
	if (action.type === 'EDIT_CMNT')
		return (updateElement('content'));
	if (action.type === 'UPDT_SCR')
		return (updateElement('score'));
}

function App() {
	const [comments, dispatch] = useReducer(reducer, data.comments);

	const addComments = (newComment) => {
		dispatch({type: 'ADD_CMNT', value: newComment});
	}

	const addReplies = (id, newRpl) => {
		dispatch({type: 'ADD_RPL', id: id, value: newRpl});
	}

	const removeComment = (id) => {
		dispatch({type: 'DLT_CMNT', id: id});
	}

	const editComment = (id, value) => {
		dispatch({type: 'EDIT_CMNT', id: id, value: value});
	}

	const updateScore = (id, value) => {
		dispatch({type: 'UPDT_SCR', id: id, value: value});
	}

	const initContext = {
		comments: comments,
		currentUser: data.currentUser,
		updateComments: addComments,
		deleteComment: removeComment,
		updateRplies: addReplies,
		editComments: editComment, 
		updateScore: updateScore
	}
	return (
		<main>
			<CommentsContext.Provider value={initContext}>
				<CommentSection/>
				<InsertComment as='cmt'/>
			</CommentsContext.Provider>
		</main>
	);
}

export default App
