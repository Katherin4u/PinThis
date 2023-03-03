import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { thunkGetAllPosts } from '../../store/posts'
import './allPosts.css'

const AllPosts = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(thunkGetAllPosts())
    }, [dispatch])

    const posts = useSelector((state) => state.posts.allPosts)
    const user = useSelector(state => state.session.user)
    if (!posts) return null
    const postObj = Object.values(posts)

    const ProductClick = (e, id) => {
        e.preventDefault()
        history.push(`/posts/${id}`)
    }

    return (
        <div>

            <div className='all-post-container'>
                <div className='all-posts'>
                    {postObj.map((post) => {
                        return (
                            <div className='all-post-images'>
                                <div className='image-post-container' key={post.id} onClick={(e) => ProductClick(e, post.id)}>
                                    <div className='getting-overlay'>
                                        <div className='getting-overlay'>
                                            <img className='img' src={post.imagesUrl}></img>
                                            <div className="overlay"></div>
                                        </div>
                                        <div style={{ display: "flex", fontWeight: 'bold', paddingBottom: "5px" }} className='title-all-posts-page2'>{post.name.slice(0, 13)}</div>
                                        <div style={{ display: "flex" }}>
                                            <div className='the-profile-picture-all-posts' style={{paddingRight: "5px"}}>
                                            <i style={{ width: '10px', height: '10px', fontSize: '12px'}} className="fa-solid fa-user"></i>
                                            </div>
                                            <div style={{ paddingRight: "5px" }} >{post.firstName}</div>
                                            <div>{post.lastName}</div>
                                        </div>

                                    </div>
                                    <div className='title-all-posts-page'>
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

export default AllPosts