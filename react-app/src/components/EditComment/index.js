import { useState, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { useModal } from "../../context/Modal"
import { loadAllCommentsThunk, updateCommentThunk } from "../../store/comments"
import './editComment.css'



const EditComment = ({ props }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { postId, commentId } = useParams()
    const editComment = useSelector((state) => state.comments.postComments)


    const { closeModal } = useModal();
    const [comment, setComment] = useState(props.singleComment)
    console.log(comment)
    const [errors, setErrors] = useState([])
    const user = useSelector(state => state.session.user)
    const [showMenu, setShowMenu] = useState(false);
    const ulRef = useRef();
    const [submitted, setSubmitted] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = (e) => {
            if (!ulRef.current.contains(e.target)) {
                setShowMenu(false);
            }
        };

        document.addEventListener("click", closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
    const closeMenu = () => setShowMenu(false);

    useEffect(() => {
        dispatch(loadAllCommentsThunk(postId))
    }, [dispatch, postId, comment])

    // if (!editComment) return null
    // const comments = editComment.postComments[commentId]
    // if (!comments) return null



    const handleSubmit = async (e) => {
        e.preventDefault()
        if (errors.length > 0) {
            setSubmitted(true)
            return;
        };

        const payload = {
            comment
        }

        if (!user) return null

         await dispatch(updateCommentThunk(props.id, payload))
            // await setComment(data)
            history.push(`/posts/${postId}`)
            closeMenu();
    }

    useEffect(() => {
        const errors = []
        if (comment.length < 2) errors.push('Comment must be atleast 2 characters long')
        if (comment.length > 80) errors.push('Comments must be less than 80 characters long')
        setErrors(errors)
    }, [comment])


    return (
        <div>
            <button className="button-edit-comment" onClick={openMenu}>
                Edit
            </button>
            <ul className={ulClassName} ref={ulRef}>
                <div className="nav-bar-dropdown-menu-container1">
                    <div className="nav-bar-dropdown-menu1">
                        <form className='inside-dropdown3' onSubmit={handleSubmit}>
                            <ul className="validation-errors">
                                {submitted && errors.map((error, index) => <li className="errors-text" key={index}>{error}</li>)}
                            </ul>
                            <label>
                                <input
                                    className="edit-comment-input"
                                    id="comments"
                                    type="text"
                                    name="comment"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />
                            </label>
                            <div>
                                <div className="edit-review-submit-button-container">
                                    <button className="edit-review-submit-button4" type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </ul>
        </div >
    )

}

export default EditComment