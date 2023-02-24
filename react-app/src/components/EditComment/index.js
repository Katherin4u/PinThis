import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { useModal } from "../../context/Modal"
import { loadAllCommentsThunk, updateCommentThunk } from "../../store/comments"



const EditComment = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {postId} = useParams()
    const editComment = useSelector((state) => state.comments.postComments)

    const { closeModal } = useModal();
    const [comment, setComment] = useState(editComment.comment)
    const [errors, setErrors] = useState([])
    const user = useSelector(state => state.session.user)
    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors([])

        const payload = {
            ...editComment,
            comment
        }

        if (!user) return null

        const data = await dispatch(updateCommentThunk(payload))
        if (Array.isArray(data)) {
            setErrors(data);
        } else {
            await setComment(data)
            history.push(`/posts/${postId}`)
            closeModal();
        }

    }

    useEffect(() => {

        return () => dispatch(loadAllCommentsThunk(postId))

    }, [dispatch, postId])

    return (
        <div className="edit-review-form">
            <form className='edit-review-form' onSubmit={handleSubmit}>
                <ul className="validation-errors">
                    {errors.map((error, index) => <li className="errors-text" key={index}>{error}</li>)}
                </ul>
                <label>
                    <input

                        id="comments"
                        type="text"
                        name="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </label>
                <div className= "edit-review-submit-button-container">
                    <button className= "edit-review-submit-button" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )

}

export default EditComment