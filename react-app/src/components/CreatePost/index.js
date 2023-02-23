import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { useModal } from "../../context/Modal"
import { thunkCreatePost } from "../../store/posts"


const CreatePost = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { closeModal } = useModal();
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [errors, setErrors] = useState([])
    const [createdPost, setCreatedPost] = useState()

    const user = useSelector(state => state.session.user)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors([])

        const payload = {
            userId: user.id,
            name,
            description,
            imageUrl
        }

        if (!user) return null;

        const data = await dispatch(thunkCreatePost(payload))

        if (Array.isArray(data)) {
            setErrors(data);
        } else {
            await setCreatedPost(data)
            closeModal();
        }
    }

    useEffect(() => {
        if (createdPost) {
            history.push(`/posts/${createdPost.id}`)
        }
    }, [createdPost])

    return (
        <div>
            <h1>Create post</h1>
            <form  onSubmit={handleSubmit}>
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
                <label>
                    <p>
                        Image URL
                    </p>
                    <input
                        id="imageUrl"
                        type="url"
                        name="imageUrl"
                        placeholder="https://www.example.com/image.jpg"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreatePost