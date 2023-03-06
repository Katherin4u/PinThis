import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './search.css'


const Search = () => {

    const history = useHistory()

    const searchRes = useSelector((state) => state.search)

    if (!searchRes) return null

    const searchArr = Object.values(searchRes)
    console.log(searchArr)
    if (!searchArr.length) return <h1 className='search-title'>No results</h1>

    const ProductClick = (e, id) => {
        e.preventDefault()
        history.push(`/posts/${id}`)
    }


    return searchRes && (
        <>
            <div>

                <div className='all-post-container'>
                    <div className='all-posts'>
                        {searchArr.map((result) => {
                            return (
                                <div className='all-post-images'>
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