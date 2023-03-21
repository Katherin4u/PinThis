import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addLikeThunk } from '../../store/likes'
import { thunkGetAllPosts } from '../../store/posts'
import Loading from '../LoadingCircle'
import './allPosts.css'

const AllPosts = () => {
    const [keepImage, setKeepImage] = useState(true)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(thunkGetAllPosts()).then(() => setKeepImage(false))
    }, [dispatch])


    const posts = useSelector((state) => state.posts.allPosts)
    const user = useSelector(state => state.session.user)
    if (!posts) return null
    const postObj = Object.values(posts)

    const ProductClick = (e, id) => {
        e.preventDefault()
        history.push(`/posts/${id}`)
    }
    const handleLike = (e, id) => {
        e.preventDefault()
        const data = {
            post_id: id,
            user_id: user.id
        }
        dispatch(addLikeThunk(data))
        history.push('/profile')
    }

    const display = () => {
        return (
            <div>

                <div className='all-post-container'>
                    <div className='all-posts'>
                        {postObj.map((post) => {
                            return (
                                <div className='all-post-images'>
                                    <div className='getting-overlay2'>
                                    {user && user.id !== post.userId && (
                                        <div className='save-like-button'>
                                            <button className='save-button-overlay' onClick={(e) => handleLike(e, post.id)}>Save</button>
                                        </div>
                                    )}
                                        <div className='image-post-container' key={post.id} onClick={(e) => ProductClick(e, post.id)}>
                                            <div className='getting-overlay'>
                                                <div className='getting-overlay'>
                                                    <img id='img' className='img' src={post.imagesUrl} onError={e => { e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/800px-No-Image-Placeholder.svg.png"; }}></img>
                                                    <div className="overlay"></div>
                                                </div>
                                                <div style={{ display: "flex", fontWeight: 'bold', paddingBottom: "5px" }} className='title-all-posts-page2'>{post.name.slice(0, 13)}</div>
                                                <div style={{ display: "flex" }}>
                                                    <div className='the-profile-picture-all-posts' style={{ paddingRight: "5px" }}>
                                                        <i style={{ width: '10px', height: '10px', fontSize: '12px' }} className="fa-solid fa-user"></i>
                                                    </div>
                                                    <div style={{ paddingRight: "5px" }} >{post.firstName}</div>
                                                    <div>{post.lastName}</div>
                                                </div>

                                            </div>
                                            
                                        </div>
                                    </div>
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

export default AllPosts