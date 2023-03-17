import React, { useDebugValue, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addLikeThunk } from '../../store/likes';

import './search.css'


const Search = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const searchRes = useSelector((state) => state.search)
    const user = useSelector(state => state.session.user)
    const posts = useSelector((state) => state.posts.allPosts)

    if (!posts) return null
    const postObj = Object.values(posts)

    if (!searchRes) return null

    const searchArr = Object.values(searchRes)

    if (!searchArr.length) return <h1 className='search-title'>No results</h1>

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


    return searchRes && (
        <>
            <div>

                <div className='all-post-container'>
                    <div className='all-posts'>
                        {searchArr.map((result) => {
                            return (
                                <div className='all-post-images'>
                                    {postObj.map((post) => {
                                        return (

                                            <div>
                                                {user && user.id !== post.userId && (
                                                    <div className='save-like-button'>
                                                        <button className='save-button-overlay' onClick={(e) => handleLike(e, post.id)}>Save</button>
                                                    </div>
                                                )}
                                            </div>
                                        )
                                     })}
                                    <div className='image-post-container' key={result.id} onClick={(e) => ProductClick(e, result.id)}>
                                        <div className='getting-overlay'>
                                            <div className='getting-overlay'>
                                                <img className='img' src={result.imagesUrl}></img>
                                                <div className="overlay"></div>
                                            </div>
                                            <div style={{ display: "flex", fontWeight: 'bold', paddingBottom: "5px" }} className='title-all-posts-page2'>{result.name.slice(0, 13)}</div>
                                            <div style={{ display: "flex" }}>
                                                <div className='search-profile-picture' style={{ paddingRight: "5px" }}>
                                                    <i style={{ width: '10px', height: '10px', fontSize: '12px' }} className="fa-solid fa-user"></i>
                                                </div>
                                                <div style={{ paddingRight: "5px" }} >{result.firstName}</div>
                                                <div>{result.lastName}</div>
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
        </>
    )


}



export default Search;