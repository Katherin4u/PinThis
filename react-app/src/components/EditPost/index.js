import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { useModal } from "../../context/Modal"
import { thunkEditPost } from "../../store/posts"
import './editpost.css'



const EditPost = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const editPost = useSelector(state => state.posts.singlePost)
    const { closeModal } = useModal()
    const [name, setName] = useState(editPost.name)
    const [description, setDescription] = useState(editPost.description)
    const [imagesUrl, setImagesUrl] = useState(editPost.imagesUrl)
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

        if (!user) return null

        const data = await dispatch(thunkEditPost(payload))

        if (Array.isArray(data)) {
            setErrors(data);
        } else {
            history.push(`/posts/${payload.id}`)
            closeModal();
        }
    }


    return (
        <div className="modal-main-div1">
            <div className="welcome-to-container">
                <h1>Edit Post</h1>
            </div>
            <form onSubmit={handleSubmit} >
                <div className="validation-container1">
                    <ul className="validations2">
                        {errors.map((error, idx) => (
                            <li key={idx}>{error}</li>
                        ))}
                    </ul>
                </div>
                <div className="login-form-modal-container">
                    <label>
                        <div>
                            Name
                        </div>
                        <input
                        className="email-input"
                            id="name"
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label>
                        <div className="password-name">
                            Description
                        </div>
                        <textarea
                        className="email-input1"
                            id="description"
                            type="text"
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </label>
                    <div className="login-button-modal-padding">
                    <button  className='loginmodal1' type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditPost