const LOAD_POSTS = 'posts/LOAD_POSTS'
const LOAD_SINGLE_POST = 'post/LOAD_SINGLE_POST'
const CREATE_POST = 'post/CREATE_POST'
const EDIT_POST = 'post/EDIT_POST'
const DELETE_POST = 'post/DELETE_POST'

const loadPosts = (posts) => ({
    type: LOAD_POSTS,
    posts
})

const loadSinglePost = (post) => ({
    type: LOAD_SINGLE_POST,
    post
})

const createPost = (newpost) => ({
    type: CREATE_POST,
    newpost
})

const editPost = (updatedPost) => ({
    type: EDIT_POST,
    updatedPost
})

const deletePost = (undoPost) => ({
    type: DELETE_POST,
    undoPost
})

export const thunkGetAllPosts = () => async (dispatch) => {
    const response = await fetch('/api/posts/')

    if (response.ok){
        const posts = await response.json()
        dispatch(loadPosts(posts))
        return posts
    }
}

export const thunkSinglePost = (postId) => async (dispatch) => {
    const response = await fetch(`/api/posts/${postId}`)

    if(response.ok){
        const post = await response.json()
        dispatch(loadSinglePost(post))
        return post
    }
}

export const thunkCreatePost = (payload) => async (dispatch) => {
    const response = await fetch('/api/posts/', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })

    if (response.ok) {
        const newPost = await response.json()
        dispatch(createPost(newPost))
        return newPost;
    } else if (response.status < 500) {
        const newPost = await response.json()
        if (newPost.errors) {
			return newPost.errors;
		}
    } else {
        return ["An error occurred. Please try again."];
    }
}

export const thunkEditPost = (updatedPost) => async (dispatch) => {
    console.log('updatedPost', updatedPost)
    const response = await fetch(`/api/posts/${updatedPost.id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPost)
    })
 

    if (response.ok) {
        const updatedPost = await response.json()
        dispatch(editPost(updatedPost))
        return updatedPost;

    } else if (response.status < 500) {
        const updatedPost = await response.json()
        if (updatedPost.errors) {
            return updatedPost.errors;
		}
    } else {
        return ["An error occurred. Please try again."];
    }

}


export const thunkDeletePost = (undoPost) => async (dispatch) => {
    const response = await fetch(`/api/posts/${undoPost.id}`, {
        method: "DELETE"
    })

    if (response.ok) {
        const post = await response.json()
        dispatch(deletePost(post))
        return post
    }
}

const normalize = (arr) => {
    const resObj = {}
    arr.forEach((ele) => { resObj[ele.id] = ele })
    return resObj
}

const initialState = {}

const postReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case LOAD_POSTS:
            newState = { ...state }
            newState.allPosts = normalize(action.posts)
            return newState

        case LOAD_SINGLE_POST:
            newState = { ...state }
            newState.singlePost = action.post
            return newState

        case CREATE_POST:
            newState = { ...state }
            newState.allPosts = { ...newState.allPosts, [action.newpost.id]: action.newpost }
            newState.singlePost = { ...newState.singlePost, ...action.newpost }
            return newState

        case EDIT_POST:
            newState = { ...state }
            newState.allPosts = { ...newState.allPosts, [action.updatedPost.id]: action.updatedPost }
            newState.singlePost = { ...newState.singlePost, ...action.updatedPost }
            return newState

        case DELETE_POST:
            newState = { ...state }
            delete newState.allPosts[action.undoPost.id]
            return newState
        default:
            return state
    }
}

export default postReducer