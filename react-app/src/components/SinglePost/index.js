import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createCommentThunk, deleteCommentThunk, loadAllCommentsThunk } from "../../store/comments";
import { thunkDeletePost, thunkSinglePost, thunkGetAllPosts } from "../../store/posts";
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
    const [keepImage, setKeepImage] = useState(false)
    const [showAlert, setShowAlert] = useState(false);
    const [showAlert2, setShowAlert2] = useState(false);
    const Allcomments = useSelector((state) => state.comments)

    const post = useSelector((state) => state.posts.singlePost)



    useEffect(() => {
        dispatch(loadAllCommentsThunk(postId))
        dispatch(thunkSinglePost(postId)).then(() => setKeepImage(true))
        dispatch(thunkGetAllPosts())
    }, [dispatch, postId])


    const user = useSelector((state) => state.session.user)
    const posts = useSelector((state) => state.posts.allPosts)
    if (!Allcomments) return null
    const comments = Object.values(Allcomments)
    if (!comments) return null
    if (!posts) return null
    const postObj = Object.values(posts)

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
                dispatch(loadAllCommentsThunk(postId))
            })
        history.push(`/posts/${postId}/comments`)
    }



    const allComments = []
    for (const key in comments[comments.length - 1]) {
        allComments.push(comments[comments.length - 1][key])
    }

    // essentially keying into state.comments.productcomments in a non-intuitive way
    // because useSelector isnt working the way we need it to

    // const deleteButton = (async (e) => {
    //     e.preventDefault()
    //     await dispatch(thunkDeletePost(post))
    //     history.push('/posts')
    // })


    // const deleteCommentButton = (async (e, commentId) => {
    //     e.preventDefault()
    //     await dispatch(deleteCommentThunk(commentId))
    //     history.push(`/posts/${postId}`)
    // })

    const checkComments = ((usersId, allTheComments) => {
        for (let i = 0; i < allTheComments.length; i++) {
            const currentCom = allTheComments[i];
            console.log(currentCom['userId'] == usersId)
            if (currentCom['userId'] == usersId) {
                return false;
            }
        }

        return true;
    })

    const ProductClick = (e, id) => {
        e.preventDefault()
        history.push(`/posts/${id}`)
    }

    const deleteButton = (async (e) => {
        e.preventDefault()
        setShowAlert2(false)
        await dispatch(thunkDeletePost(post))
        history.push('/posts')
    })
    const CancelButton = (async (e, id) => {
        e.preventDefault()
        setShowAlert2(false)
        history.push(`/posts/${id}`)
    })
    const deleteCommentButton = (async (e, commentId) => {
        e.preventDefault()
        setShowAlert(false)
        await dispatch(deleteCommentThunk(commentId))
        history.push(`/posts/${postId}`)
    })
    const CancelButton2 = (async (e, id) => {
        e.preventDefault()
        setShowAlert(false)
        history.push(`/posts/${id}`)
    })




    if (!post) return null
    if (!keepImage) return null

    

    return (
        <div style={{ scrollBehavior: "smooth" }} className="single-post-main-container">
            <div className="second-main-container">
                <div className="single-image-container">
                    <div className="single-image">
                        <img className="image-image" src={post.imagesUrl}  onError={e => { e.currentTarget.src = "https://ih1.redbubble.net/image.485923678.1240/flat,750x,075,f-pad,750x1000,f8f8f8.u4.jpg"; }} ></img>
                    </div>

                </div>
                <div className="ksksks">
                    <div className="edit-delete-user-container">
                        <div className="edit-delete-main-container">
                            {user && user.id === post.userId && (
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
                                        <button onClick={(e) => setShowAlert2(true)} className="delete-post-button">Delete Post</button>
                                        {showAlert2 && (
                                            <div className="modal">
                                                <div className="modal-content">
                                                    <p style={{fontWeight: "bold"}}>This will delete the entire Post, cant be undone!!</p>
                                                    <div className="modal-buttons">
                                                        <button style={{paddingLeft: "40px", paddingRight: "40px", paddingTop: "5px", paddingBottom: "5px", border: 'none', backgroundColor: 'lightgrey', borderRadius: "10px"}} onClick={deleteButton}>OK</button>
                                                    </div>
                                                    <div className="modal-buttons">
                                                        <button style={{paddingLeft: "30px", paddingRight: "30px", paddingTop: "5px", paddingBottom: "5px", border: 'none', backgroundColor: 'lightgrey', borderRadius: "10px"}}  onClick={(e) => CancelButton(e, post.id)}>Cancel</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
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
                                                {<span className="this-da-comment">{comment.comment}</span>}
                                                <div>
                                                    {user && user.id === comment.userId && (
                                                        <div>
                                                            <div className="edit-delete-single-comment">
                                                                <div className='edit-button-single-comment'>
                                                                    <EditComment className='edit-button-single-comment' props={{ id: comment.id, singleComment: comment.comment }} />
                                                                </div>

                                                                <button className="button-edit-comment" onClick={(e) => setShowAlert(true)}>Delete</button>
                                                                {showAlert && (
                                                                    <div className="modal">
                                                                        <div className="modal-content">
                                                                            <p style={{fontWeight: "bold"}}>This will delete the entire Comment, cant be undone!!</p>
                                                                            <div className="modal-buttons">
                                                                                <button style={{paddingLeft: "40px", paddingRight: "40px", paddingTop: "5px", paddingBottom: "5px", border: 'none', backgroundColor: 'lightgrey', borderRadius: "10px"}} onClick={(e) => deleteCommentButton(e, comment.id)}>OK</button>
                                                                            </div>
                                                                            <div className="modal-buttons">
                                                                                <button style={{paddingLeft: "30px", paddingRight: "30px", paddingTop: "5px", paddingBottom: "5px", border: 'none', backgroundColor: 'lightgrey', borderRadius: "10px"}} onClick={(e) => CancelButton2(e, post.id)}>Cancel</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>

                                                    )}
                                                </div>
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                {checkComments(user.id, allComments) &&

                                    <div className="comment-form">
                                        <form onSubmit={handleSubmit}>
                                            <ul>
                                                {errors.map((error, idx) => (

                                                    <li key={idx}>{error}</li>
                                                ))}
                                            </ul>
                                            <label>
                                                <div className="image-comment-input">
                                                    <div>
                                                        <i style={{ width: '32px', height: '32px' }} className="fa-solid fa-user"></i>
                                                    </div>
                                                    <div className="input-padding">
                                                        <input
                                                            className="add-a-comment-input"
                                                            placeholder="Add a comment"
                                                            id="comment"
                                                            type="text"
                                                            minLength={2}
                                                            maxLength={80}
                                                            name="comment"
                                                            value={comment}
                                                            onChange={(e) => setComment(e.target.value)}
                                                        />
                                                    </div>

                                                </div>
                                                <div className="edit-review-submit-button-container4">
                                                    <button className="edit-review-submit-button4" type="submit">Submit</button>
                                                </div>
                                            </label>
                                        </form>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="browse-for-more">Browse for more!</h1>
            </div>
            <div className='all-posts1'>
                {postObj.map((post) => {
                    return (
                        <div className='all-post-images'>
                            <div className='image-post-container1' key={post.id} onClick={(e) => {
                                ProductClick(e, post.id); setTimeout(() => { document.documentElement.scrollTop = 0; document.body.scrollTop = 0; }, 400);
                            }}>
                                <div className='getting-overlay'>
                                    <div className='getting-overlay'>
                                        <img className='img' src={post.imagesUrl}></img>
                                        <div className="overlay"></div>
                                    </div>
                                    <div style={{ display: "flex", fontWeight: 'bold', paddingBottom: "5px" }} className='title-all-posts-page2'>{post.name.slice(0, 20)}</div>
                                    <div style={{ display: "flex" }}>
                                        <div className="profile-single-post-all-posts" style={{ paddingRight: "5px" }}>
                                            <i style={{ width: '10px', height: '10px', fontSize: '12px' }} className="fa-solid fa-user"></i>
                                        </div>
                                        <div style={{ paddingRight: "5px" }} >{post.firstName}</div>
                                        <div>{post.lastName}</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default SinglePost