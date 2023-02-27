import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import OpenModalButton from "../OpenModalButton"
import CreatePost from '../CreatePost';
import './Navigation.css';
import CreateButton from './CreateButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);
	const history = useHistory()

	return (
		<div className='nav-container'>
			{sessionUser ? (
				<div className='divider'>
					<div className='Inner-nav-container' >
						<div className='container-logo1'>
							<img className='logo-img' src='https://pngimg.com/d/letter_p_PNG108.png'></img>
						</div>

						<div className='home-link'>
							<NavLink className='navlink-text' exact to="/posts">Home</NavLink>
						</div>
						<div className='create-post-container'>
							{isLoaded && (
								<div>
									<CreateButton user={sessionUser} />
								</div>
							)}
							<i className="fas fa-angle-down"></i>
						</div>
					</div>
					<div className='profile-button-container'>
						{isLoaded && (
							<div>
								<ProfileButton user={sessionUser} />
							</div>
						)}
					</div>
				</div>
			) : (
				<div>
					{isLoaded && (
						<div className='second-profile-button'>
							<div className='container-logo'>
								<img className='logo-img' src='https://pngimg.com/d/letter_p_PNG108.png'></img>
							</div>
							<div className='container-login-signup'>
								<div className='login'>
									<div className='loginmodal'>
										<OpenModalButton
											className='loginmodal'
											buttonText='Login'
											modalComponent={<LoginFormModal />}
										/>
									</div>
								</div>
								<div className='Signup'>
									{/* <div className='singup-modal-text'>Sign Up</div> */}
									<OpenModalButton
										className='Signup'
										buttonText='SignUp'
										modalComponent={<SignupFormModal />} />
								</div>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
}

export default Navigation;