import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createCommentThunk, loadAllCommentsThunk } from "../../store/comments";
import { thunkDeletePost, thunkSinglePost } from "../../store/posts";
import EditPost from "../EditPost";
import EditComment from "../EditComment";
import OpenModalButton from "../OpenModalButton";
import './singlePost.css'


const SinglePost = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { postId } = useParams()
    const [comment, setComment] = useState()
    const [errors, setErrors] = useState([])
    const Allcomments = useSelector((state) => state.comments)
    const post = useSelector((state) => state.posts.singlePost)

    useEffect(() => {
        dispatch(loadAllCommentsThunk(postId))
        dispatch(thunkSinglePost(postId))
    }, [dispatch, postId])

    const user = useSelector((state) => state.session.user)
    if (!Allcomments) return null
    const comments = Object.values(Allcomments)
    if (!comments) return null

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors([])

        const payload = {
            user_id: user.id,
            comment
        }

        if (!user) return null
        await dispatch(createCommentThunk(postId, payload))
            .then(() => {
                setComment('')
            })
        // history.push(`/posts/${postId}/comments`)
    }


    const allComments = []
    for (const key in comments[comments.length - 1]) {
        allComments.push(comments[comments.length - 1][key])
    }

    // essentially keying into state.comments.productcomments in a non-intuitive way
    // because useSelector isnt working the way we need it to

    const deleteButton = (async (e) => {
        e.preventDefault()
        await dispatch(thunkDeletePost(post))
        history.push('/posts')
    })


    if (!post) return null


    return (
        <div className="single-post-main-container">
            <div className="second-main-container">
                <div className="single-image-container">
                    <div className="single-image">
                        <img className="image-image" src={post.imagesUrl}></img>
                    </div>

                </div>
                <div className="edit-delete-user-container">
                    <div className="edit-delete-main-container">
                        <div className="edit-delete-main-container1">
                            <div className="edit-modal-container">
                                <div className='editmodal3'>
                                    <OpenModalButton
                                        className='editmodal3'
                                        buttonText='Edit Post'
                                        modalComponent={<EditPost />}
                                    />
                                </div>
                            </div>
                            <div className="delete-button-container">
                                <button onClick={deleteButton} className="delete-post-button">Delete Product</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="scroll">
                            <div className="rando-div">
                                <div className="user-container">
                                    <div className="name-title-css">
                                        {post.name}
                                    </div>
                                </div>
                                <div className="user-container3">
                                    <div className="name-title-css3">
                                        {post.description}
                                    </div>
                                </div>
                            </div>
                            <div className="comments-length">{`${allComments.length} Comments`}</div>
                            <div className="container-holding-comments">
                                {allComments?.map((comment) => (
                                    <div className="main-component-first-last-comment">
                                        <div className="image-ppp">
                                            <i className="fa-solid fa-user"></i>
                                        </div>
                                        <span className="name-comment">
                                            {<span className="firstname">{comment.firstName}</span>}
                                            {<span className="lastname">{comment.lastName}</span>}
                                            {comment.comment}
                                            {/* <div>
                                                <EditComment  />
                                            </div> */}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="comment-form">
                            <form onSubmit={handleSubmit}>
                                <ul>
                                    {errors.map((error, idx) => (
                                        <li key={idx}>{error}</li>
                                    ))}
                                </ul>
                                <label>
                                    <input
                                        placeholder="Add a comment"
                                        id="comment"
                                        type="text"
                                        name="comment"
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                    />
                                    <button type="submit">Submit</button>
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SinglePost