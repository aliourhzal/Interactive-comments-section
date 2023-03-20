import React from "react";

const CommentsContext = React.createContext({
    comments: {},
    currentUser: {},
    updateComments: (newComment) => {},
    deleteComment: (id) => {},
    updateRplies: (id, newRpl) => {},
    editComments: (id, value) => {},
    updateScore: (id,value) => {}
})

export default CommentsContext;