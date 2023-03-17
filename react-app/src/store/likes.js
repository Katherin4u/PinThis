const GET_LIKES = 'likes/GET_LIKES';
const ADD_LIKES = "likes/ADD_LIKE";
const DELETE_LIKE = 'likes/ DELETE_LIKE'


const getLikesAction = (likes) => ({
    type: GET_LIKES,
    likes
})

const addLikesAction = (add) => {
    return {
        type: ADD_LIKES,
        add
    }
}
const deleteLikeAction = (erase) => {
    return {
        type: DELETE_LIKE,
        erase
    }
}


export const getLikesThunk = () => async (dispatch) => {
    const response = await fetch(`/api/likes/`);

    if (response.ok) {
        const likes = await response.json();
        dispatch(getLikesAction(likes));
        return likes;
    }
};


export const addLikeThunk = (data) => async dispatch => {
    const response = await fetch(`/api/likes/`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        const addLike = await response.json()
        dispatch(addLikesAction(addLike))
        return addLike;
    }
}

export const deleteLikeThunk = (erase) => async dispatch => {
    const response = await fetch(`/api/likes/${erase}`, {
        method: "DELETE"
    });

    if (response.ok) {
        const deleteLike = await response.json();
        dispatch(deleteLikeAction(deleteLike));
        return deleteLike;
    }
};

const normalize = (arr) => {
    const resObj = {}
    arr.forEach((ele) => { resObj[ele.id] = ele })
    return resObj
}

const initialState = {};


const likesReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case GET_LIKES:
            newState = { ...state }
            newState.postLikes = normalize(action.likes)
            return newState;

        case ADD_LIKES: {
            newState = { ...state }
            newState.postLikes = { ...newState.postLikes, [action.add.id]: action.add }
            return newState;
        };
        case DELETE_LIKE: {
            const newState = { ...state };
            delete newState.postLikes[action.erase];
            return newState;
        };
        default:
            return state;
    }
};

export default likesReducer;