import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { thunkGetAllPosts } from "../../store/posts"
import Loading from "../LoadingCircle"
import './userProfile.css'



const UserProfile = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [keepImage, setKeepImage] = useState(true)

    useEffect(() => {
        dispatch(thunkGetAllPosts()).then(() => setKeepImage(false))
    }, [dispatch])

    const user = useSelector((state) => state.session.user)
    const posts = useSelector((state) => state.posts.allPosts)


    if (!user) return null
    if (!posts) return <h1> You dont have any posts</h1>
    const postObj = Object.values(posts)
    console.log(postObj)

    const ProductClick = (e, id) => {
        e.preventDefault()
        history.push(`/posts/${id}`)
    }

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
                    <div >
                        <h4>Created</h4>
                    </div>
                </div>
                <div>
                    <div>

                    </div>
                </div>
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
            </div>
        )
    }
    return keepImage ? <Loading /> : display()
}

export default UserProfile