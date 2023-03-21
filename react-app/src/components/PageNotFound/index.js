import { useHistory } from 'react-router-dom'
import './pageNotFound.css'


const NotFound = () => {
    const history = useHistory()
    
    const headHome = (e) => {
        e.preventDefault()
        history.push('/posts')
    }
    return(
        <div className="image-not-found-css">
            <h1>Page Not Found</h1>
            <img src='https://i.pinimg.com/564x/67/68/10/6768106c896811cb1c17b2f172bbfddd.jpg'></img>
            <h2 className='headHome' onClick={headHome}>Keep Browsing</h2>
        </div>
    )
}

export default NotFound