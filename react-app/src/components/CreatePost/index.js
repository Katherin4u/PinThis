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
    const [imageUrl, setImageUrl] = useState(null)
    const [errors, setErrors] = useState([])
    const [createdPost, setCreatedPost] = useState()
    const [submitted, setSubmitted] = useState(false);
    const [imageLoading, setImageLoading] = useState(false);
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null)


    const user = useSelector(state => state.session.user)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setImageLoading(true)

        if (errors.length > 0) {
            setSubmitted(true)
            return;
        };

        let image;
        if (imageUrl) {
            const formData = new FormData();
            formData.append("imageUrl", imageUrl);

            const res = await fetch('/api/images', {
                method: "POST",
                body: formData,
            });
            if (res.ok) {
                image = await res.json();
                console.log('response from image fetch', image)
            }
            else {
                setErrors(["Failed to upload image"]);
                setImageLoading(false);
                return;
            }
        }

        const payload = {
            userId: user.id,
            name,
            description,
            imageUrl: image?.url
        }


        // create post 
        if (!user) return null;
        const data = await dispatch(thunkCreatePost(payload))


        // after post is created, we will use postId     
        await setCreatedPost(data)
        closeModal();
    }

    useEffect(() => {
        if (createdPost) {
            history.push(`/posts/${createdPost.id}`)
        }
    }, [createdPost])

    useEffect(() => {
        const errors = []
        if (description.length === 0) errors.push('Description is required.')
        if (description.length > 60) errors.push('Description must be less than 60 characters long.')
        if (description.length < 3) errors.push('Description must be at least 3 characters long.')
        if (name.length === 0) errors.push('Name Field is required.');
        if (name.length > 50) errors.push("Name must be less than 50 characters long.")
        if (name.length < 3) errors.push("Name must be at least 3 characters long.")
        setErrors(errors)
    }, [name, description, imageUrl])






    return (
        <div className="main-main-main-container">
            <div className="main-container-create-post">
                <div className="second-container-create-post">
                    <form onSubmit={handleSubmit}>
                        <div className="container-img-title-description">
                            <div className="name-des-user">
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: "53rem", height: "33rem", boxShadow: ' 10px 10px 20px 0.5px rgba(179, 175, 175, 0.7)', borderRadius: '15px'}}>
                                    <div style={{ borderRadius:'10px', height: '27rem', width: '19rem', paddingLeft: '5px' , backgroundColor: '#efefef', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                        <div className='product-image-input-container'>
                                            <label htmlFor="product-image-upload" className="product-image-upload">
                                                <div className="upload-photo-button" >
                                                    <div className="inner-upload-photo">

                                                    </div>
                                                    <i class="fa-solid fa-circle-chevron-up"></i>
                                                    Click to Upload
                                                </div>
                                                <div className='upload-loading-container'>
                                                    {(imageLoading) && <p>Loading...</p>}
                                                    {!imageLoading && imageUrl && <div className='uploaded-image-name'>{imageUrl.name}</div>}
                                                </div>
                                            </label>
                                            <input
                                                id="product-image-upload"
                                                className="post-image-upload"
                                                type="file"
                                                name="file"
                                                accept="image/*"
                                                onChange={(e) => setImageUrl(e.target.files[0])}
                                            />
                                        </div>
                                    </div>
                                    <div style={{ height: '30rem', paddingLeft: "50px" }}>
                                        <div className="button-save-create">
                                            <button className="save-button-create-post" type="submit">Save</button>
                                        </div>
                                        <div className="validation-container3">
                                            <ul className="validations3">
                                                {submitted && errors.map((error, idx) => (
                                                    <li key={idx}>{error}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="title-container-main">
                                            <label>
                                                <textarea
                                                    minLength={3}
                                                    maxLength={50}
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
                                                    minLength={3}
                                                    maxLength={60}
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
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default CreatePost