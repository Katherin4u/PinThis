import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { useHistory } from "react-router-dom";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory()
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
    history.push(`/`)
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <button className="nav-bar-profile-button" onClick={openMenu}>
        <i className="fa-solid fa-user"></i>
      </button>
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <div className="nav-bar-dropdown-menu-container">
            <div className='nav-bar-dropdown-menu'>
              <div className="inside-dropdown">
                <div className="user-username">
                <div>{user.firstName}</div>
                <div>{user.lastName}</div>
                </div>
                <div className="user-email">{user.email}</div>
                <div className="logout-button-user">
                  <button className="this-is-logout-button" onClick={handleLogout}>Log Out</button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="nav-bar-dropdown-menu-container">
            <div nav-bar-dropdown-menu>
              <div className="inside-dropdown">
            <OpenModalButton
              buttonText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />

            <OpenModalButton
              buttonText="Sign Up"
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
            />
              </div>
            </div>
          </div>
        )}
      </ul>
    </>
  );
}

export default ProfileButton;
