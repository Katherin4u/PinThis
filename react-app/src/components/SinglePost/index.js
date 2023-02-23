import { useDebugValue, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { thunkDeletePost, thunkSinglePost } from "../../store/posts";
import EditPost from "../EditPost";
import OpenModalButton from "../OpenModalButton";
import './singlePost.css'


const SinglePost = () => {
    const history = useHistory()
    const { postId } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(thunkSinglePost(postId))
    }, [dispatch, postId])

    const post = useSelector((state) => state.posts.singlePost)


    const deleteButton = (async (e) => {
        e.preventDefault()
        await dispatch(thunkDeletePost(post))
        history.push('/')
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
                </div>
            </div>
        </div >
    )
}

export default SinglePost