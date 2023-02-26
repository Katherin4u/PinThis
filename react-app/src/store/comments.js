const LOAD_ALL_COMMENTS = 'comments/LOAD_ALL_COMMENTS'
const CREATE_COMMENT = 'comments/CREATE_COMMENT';
const UPDATE_COMMENT = 'comments/UPDATE_COMMENT';
const DELETE_COMMENT = 'comments/DELETE_COMMENT';
const CLEAN_UP_COMMENTS = 'comments/CLEANUP_COMMENTS';

export const loadAllComments = (comments, postId) => {
    return {
        type: LOAD_ALL_COMMENTS,
        postId,
        comments
    }
};

export const createCommentAction = (postId, newComment) => {
    return {
        type: CREATE_COMMENT,
        postId,
        newComment
    }
};

export const updateCommentAction = (updatedComment) => {
    return {
        type: UPDATE_COMMENT,
        updatedComment
    }
};

export const deleteCommentAction = (badCommentId) => {
    return {
        type: DELETE_COMMENT,
        badCommentId
    }
};

export const cleanUpCommentAction = () => {
    return {
        type: CLEAN_UP_COMMENTS
    }
};


export const loadAllCommentsThunk = (postId) => async dispatch => {
    const response = await fetch(`/api/posts/${postId}/comments`);

    if (response.ok) {
        const allComments = await response.json();
        dispatch(loadAllComments(postId, allComments));
        return allComments;
    }
}


export const createCommentThunk = (postId, newComment) => async dispatch => {
    const response = await fetch(`/api/posts/${postId}/comments`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newComment),
    });

    if (response.ok) {
        const createdComment = await response.json()
        console.log('createdComment', createdComment)
        dispatch(createCommentAction(createdComment))
        return createdComment;
    } else if (response.status < 500) {
        const createdComment = await response.json()
        if (createdComment.errors) {
            return createdComment.errors;
        }
    } else {
        return ["An error occurred. Please try again."];
    }

};

export const updateCommentThunk = (id, comments) => async dispatch => {
    console.log('comment^^^^^^^^^^^^', comments)
    const response = await fetch(`/api/comments/${id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(comments),
    });


    if (response.ok) {
        const updatedComment = await response.json()
        dispatch(updateCommentAction(updatedComment))
        return updatedComment;
    } else if (response.status < 500) {
        const updatedComment = await response.json()
        if (updatedComment.errors) {
            return updatedComment.errors;
        }
    } else {
        return ["An error occurred. Please try again."];
    }

};

export const deleteCommentThunk = (badCommentId) => async dispatch => {
    const response = await fetch(`/api/comments/${badCommentId}`, {
        method: "DELETE"
    });

    if (response.ok) {
        const badComment = await response.json();
        dispatch(deleteCommentAction(badCommentId));
        return badComment;
    }
};

const normalize = (arr) => {
    const resObj = {}
    arr.forEach((ele) => { resObj[ele.id] = ele })
    return resObj
}

//reviews reducer
const initialState = {};

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ALL_COMMENTS: {
            const newState = { ...state };
            newState.postComments = normalize(action.postId)
            return newState;
        };
        case CREATE_COMMENT: {
            const newState = { ...state };
            newState.postComments[action.postId.id] = action.postId;
            return newState;
        };
        case UPDATE_COMMENT: {
            const newState = { ...state };
            newState.postComments[action.updatedComment.id] = action.updatedComment;
            return newState;
        };
        case DELETE_COMMENT: {
            const newState = { ...state };
            delete newState.postComments[action.badCommentId];
            return newState;
        };
        case CLEAN_UP_COMMENTS: {
            const newState = { ...initialState };
            return newState;
        }
        default:
            return state;
    }
};

export default commentsReducer;