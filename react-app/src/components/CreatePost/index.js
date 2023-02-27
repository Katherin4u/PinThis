import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { useModal } from "../../context/Modal"
import { thunkCreatePost } from "../../store/posts"
import UploadPicture from "../uploadImage"
import './createPost.css'


const CreatePost = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { closeModal } = useModal();
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [errors, setErrors] = useState([])
    const [createdPost, setCreatedPost] = useState()
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    

    const user = useSelector(state => state.session.user)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors([])

        const payload = {
            userId: user.id,
            name,
            description
        }
        const formData = new FormData();
        formData.append("image", image);
        setImageLoading(true);

        // create post 
        if (!user) return null;
        const data = await dispatch(thunkCreatePost(payload))
        console.log(data)

        // after post is created, we will use postId

        if (Array.isArray(data)) {
            setErrors(data);
        } else {
            await setCreatedPost(data)
            closeModal();
        }
    }

    useEffect(() => {
        // if (createdPost) {
        //     history.push(`/posts/${createdPost.id}`)
        // }
    }, [createdPost])

    const updateImage = (e) => {
        const file = e.target.files[0];
        console.log(file)
        setImage(file);
    }




    return (
        <div className="main-main-main-container">
            <div className="main-container-create-post">
                <div className="second-container-create-post">
                    <form onSubmit={handleSubmit}>
                        <ul>
                            {errors.map((error, idx) => (
                                <li key={idx}>{error}</li>
                            ))}
                        </ul>
                        <div className="container-img-title-description">
                            <div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={updateImage}
                                />
                                {/* <UploadPicture /> */}
                                {/* <label>
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
                                </label> */}
                            </div>
                            <div className="name-des-user">
                                <div className="button-save-create">
                                    <button className="save-button-create-post" type="submit">Save</button>
                                </div>
                                <div className="title-container-main">
                                    <label>
                                        <textarea
                                            className="textarea-title"
                                            id="name"
                                            placeholder="Add Your Title"
                                            type="text"
                                            name="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </label>
                                </div>
                                <div>
                                    <div className="user-div">
                                        <div className="nav-bar-profile-button2">
                                            <i className="fa-solid fa-user"></i>
                                        </div>
                                        <div>
                                            <div className="first-name-create">
                                                <div className="user-firstname-create">
                                                    {user.firstName}
                                                </div>
                                                <div className="user-lastName-create">
                                                    {user.lastName}
                                                </div>
                                            </div>
                                            <div className="followers-create">
                                                This is where the followers will go
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="title-container-main">
                                    <label>
                                        <textarea
                                            className="textarea-title1"
                                            placeholder="Tell everyone what your Post is about"
                                            id="description"
                                            type="text"
                                            name="description"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default CreatePost