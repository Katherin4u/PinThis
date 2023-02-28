import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


const Search = () => {
    const history = useHistory()

    const searchRes = useSelector((state) => state.search)
    console.log(searchRes)
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
            <h1 className='search-title'>Search results:</h1>
            <h4 className='search-title search-subheader'>Items matched by name or description</h4>
            <div className='all-search-container'>
                <div className='mapped-search-container'>
                    <ul className='all-search'>
                        {searchArr.map((result) => {
                            return (
                                <div className='search-card' key={result.id} onClick={(e) => ProductClick(e, result.id)}>
                                    <div className='search-image-container'>
                                        <img className='search-image' src={result.imagesUrl} alt='product'></img>
                                    </div>
                                    <div className = 'search-name-container'>
                                        {result.name}
                                    </div>
                                   
                                </div>
                            )
                        })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}



export default Search;