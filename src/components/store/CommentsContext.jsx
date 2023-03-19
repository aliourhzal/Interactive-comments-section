import React from "react";

const CommentsContext = React.createContext({
    comments: {},
    currentUser: {},
    updateComments: (newComment) => {},
    deleteComment: (id) => {},
    updateRplies: (id, newRpl) => {}
})

export default CommentsContext;