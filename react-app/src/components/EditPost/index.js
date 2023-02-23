import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { useModal } from "../../context/Modal"
import { thunkEditPost } from "../../store/posts"



const EditPost = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const editPost = useSelector(state => state.posts.singlePost)
    const {closeModal} = useModal()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [imagesUrl, setImagesUrl] = useState('')
    const [errors, setErrors] = useState([])

    const user = useSelector(state => state.session.user)
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors([])

        const payload = {
            ...editPost,
            name,
            description,
            imageUrl: imagesUrl
        }

        if(!user) return null

        const data = await dispatch(thunkEditPost(payload))

        if (Array.isArray(data)) {
            setErrors(data);
        } else {
            history.push(`/posts/${payload.id}`)
            closeModal();
        }
    }


    return (
        <div>
            <h1>Edit Post</h1>
            <form>
                <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <label>
                    <p>
                        Name
                    </p>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    <p>
                        Description
                    </p>
                    <input
                        id="description"
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EditPost