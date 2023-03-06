// const GET_LIKES = 'likes/GET_LIKES';
// const ADD_LIKES = "likes/ADD_LIKE";
// const DELETE_LIKE = 'likess/ DELETE_LIKE'


// const getLikesAction = (userId) => {
//     return {
//         type: GET_LIKES,
//         userId
//     }
// }
// const addLikesAction = (postId, add) => {
//     return {
//         type: ADD_LIKES,
//         postId,
//         add

//     }
// }
// const deleteLikeAction = (erase) => {
//     return {
//         type: DELETE_LIKE,
//         erase
//     }
// }


// export const getLikesThunk = (userId) => async (dispatch) => {
//     const response = await fetch(`/api/likes/user/${userId}`);

//     if (response.ok) {
//         const allLikes = await response.json();
//         dispatch(getLikesAction(allLikes));
//         return allLikes;
//     }
// };


// export const addLikeThunk = (postId, add) => async dispatch => {
//     const response = await fetch(`/api/posts/${postId}/likes`, {
//         method: "POST"
//     });

//     if (response.ok) {
//         const addLike = await response.json()
//         console.log('createdComment', addLike)
//         dispatch(addLikesAction(addLike))
//         return addLike;
//     }
// }

// export const deleteLikeThunk = (erase) => async dispatch => {
//     const response = await fetch(`/api/likes/${erase}`, {
//         method: "DELETE"
//     });

//     if (response.ok) {
//         const deleteLike = await response.json();
//         dispatch(deleteLikeAction(deleteLike));
//         return deleteLike;
//     }
// };

// const normalize = (arr) => {
//     const resObj = {}
//     arr.forEach((ele) => { resObj[ele.id] = ele })
//     return resObj
// }

// const initialState = {};


// const likesReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case GET_LIKES: {
//             const newState = { ...state };
//             newState.postLikes = normalize(action.postId)
//             return newState;
//         };
//         case ADD_LIKES: {
//             const newState = { ...state };
//             newState.postLikes[action.postId.id] = action.postId;
//             return newState;
//         };
//         case DELETE_LIKE: {
//             const newState = { ...state };
//             delete newState.postLikes[action.erase];
//             return newState;
//         };
//         default:
//             return state;
//     }
// };

// export default likesReducer;