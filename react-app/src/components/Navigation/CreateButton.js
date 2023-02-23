import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import CreatePost from "../CreatePost";

function ProfileButton({ user }) {
    const dispatch = useDispatch();
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

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    };

    const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
    const closeMenu = () => setShowMenu(false);

    return (
        <>
            <button className="nav-bar-profile-button" onClick={openMenu}>
                Create
            </button>
            <ul className={ulClassName} ref={ulRef}>
                {user ? (
                    <>
                        <div className="nav-bar-dropdown-menu-container1">
                            <div className='nav-bar-dropdown-menu1'>
                                <div className="inside-dropdown1">
                                    <div className='loginmodal2'>
                                        <OpenModalButton
                                            className='create-post-modal-css'
                                            buttonText="create post"
                                            onItemClick={closeMenu}
                                            modalComponent={<CreatePost />}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                    </>
                )}
            </ul>
        </>
    );
}

export default ProfileButton;
