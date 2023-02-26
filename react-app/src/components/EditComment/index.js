import { useState, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { useModal } from "../../context/Modal"
import { loadAllCommentsThunk, updateCommentThunk } from "../../store/comments"



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
        return () => dispatch(loadAllCommentsThunk(postId))
    }, [dispatch, postId, comment])

    // if (!editComment) return null
    // const comments = editComment.postComments[commentId]
    // if (!comments) return null



    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors([])

        const payload = {
            comment
        }

        if (!user) return null

        const data = await dispatch(updateCommentThunk(props.id, payload))
        if (Array.isArray(data)) {
            setErrors(data);
        } else {
            await setComment(data)
            history.push(`/posts/${postId}`)
            closeMenu();
        }
    }


    return (
        <div>
            <button onClick={openMenu}>
                Edit
            </button>
            <ul className={ulClassName} ref={ulRef}>
                <div className="nav-bar-dropdown-menu-container1">
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
                            <div className="edit-review-submit-button-container">
                                <button className="edit-review-submit-button" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </ul>
        </div >
    )

}

export default EditComment