import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { deleteLikeThunk, getLikesThunk } from "../../store/likes"
import { thunkGetAllPosts } from "../../store/posts"
import Loading from "../LoadingCircle"
import './userProfile.css'



const UserProfile = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [keepImage, setKeepImage] = useState(true)
    const [showHtml, setShowHtml] = useState(true)
    const [showHtml2, setShowHtml2] = useState(false)

    useEffect(() => {
        dispatch(thunkGetAllPosts()).then(() => setKeepImage(false))
        dispatch(getLikesThunk())
    }, [dispatch])

    const user = useSelector((state) => state.session.user)
    const posts = useSelector((state) => state.posts.allPosts)
    const likes = useSelector((state) => state.likes.postLikes)

    const handleButtonHtml = () => {
        setShowHtml(true);
        setShowHtml2(false);
    }
    const handleButtonHtml2 = () => {
        setShowHtml(false);
        setShowHtml2(true);
    }




    if (!user) return null
    if (!likes) return null
    if (!posts) return <h1> You dont have any posts</h1>
    const postObj = Object.values(posts)
    const likesObj = Object.values(likes)

    // const likedPostIds = likesObj.filter((like) => like.userId === user.id).map((like) => like.postId)
    // const likedPosts = postObj.filter((post) => likedPostIds.includes(post.id))
    const likedPostIds = likesObj.filter((like) => like.userId === user.id).map((like) => like.postId)
    const likedPosts = postObj
        .map((post) => ({
            ...post,
            like: likesObj.find((like) => like.postId === post.id && like.userId === user.id),
        }))
        .filter((post) => likedPostIds.includes(post.id))
    // const likedPosts = postObj.filter((post) => likedPostIds.includes(post.id))
    



    const ProductClick = (e, id) => {
        e.preventDefault()
        history.push(`/posts/${id}`)
    }

    const deleteButton = (async (e, id) => {
        e.preventDefault()
        dispatch(deleteLikeThunk(id)).then(dispatch(getLikesThunk()))
        // history.push('/profile')
    })

    const display = () => {
        return (
            <div>
                <div className="container-profile-name-likes">
                    <div className="profile-picture">
                        <i style={{ width: "60px", height: "60px" }} className="fa-solid fa-user"></i>
                    </div>
                    <div className="user-profile-name">
                        <div style={{ paddingRight: "10px" }}>
                            {user.firstName}
                        </div>
                        <div>
                            {user.lastName}
                        </div>
                    </div>
                </div>
                <div style={{ borderBottom: "solid lightgray 1px", paddingBottom: "25px" }} className="created-title-profile">
                    <div className="container-created-button" onClick={handleButtonHtml2}>
                        <button className="created-button">Created</button>
                    </div>
                    <div className="container-saved-button" onClick={handleButtonHtml}>
                        <button className="saved-button" >Saved</button>
                    </div>
                </div>
                <div>
                    {showHtml && (
                        <div className="images-posted-by-user">
                            <div className="all-posts">
                                {likedPosts.map((post) => {
                                    return (
                                        <div>
                                            <div className='all-post-images'>
                                            <div className='getting-overlay2'>
                                                <div className='save-like-button'>
                                                    <button className="save-button-overlay" onClick={(e) => deleteButton(e, post.like.id)}>Remove</button>
                                                </div>
                                                <div className='image-post-container' key={post.id} onClick={(e) => ProductClick(e, post.id)}>
                                                    <div className='getting-overlay'>
                                                        <div className='getting-overlay'>
                                                            <img className='img' src={post.imagesUrl} onError={e => { e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/800px-No-Image-Placeholder.svg.png"; }}></img>
                                                            <div className="overlay"></div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            </div>

                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                    {showHtml2 && (

                        <div className="images-posted-by-user">
                            <div className="all-posts">
                                {postObj.map((post) => {
                                    return (
                                        <div>
                                            {user && post.userId === user.id && (
                                                <div className='all-post-images'>
                                                    <div className='image-post-container' key={post.id} onClick={(e) => ProductClick(e, post.id)}>
                                                        <div className='getting-overlay'>
                                                            <div className='getting-overlay'>
                                                                <img className='img' src={post.imagesUrl} onError={e => { e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/800px-No-Image-Placeholder.svg.png"; }}></img>
                                                                <div className="overlay"></div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
    return keepImage ? <Loading /> : display()
}

export default UserProfile