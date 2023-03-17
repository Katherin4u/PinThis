import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import OpenModalButton from "../OpenModalButton"
import CreatePost from '../CreatePost';
import './Navigation.css';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import { cleanUpSearchAction, thunkCreateSearch } from '../../store/search';

function Navigation({ isLoaded }) {
	const [query, setQuery] = useState('');
	
	const sessionUser = useSelector(state => state.session.user);
	const history = useHistory()
	const dispatch = useDispatch()
	
	

	const handleSearch = async (e) => {
		e.preventDefault();
		dispatch(cleanUpSearchAction())
		dispatch(thunkCreateSearch(query))
		setQuery('')
		history.push('/search')
	};

	return (
		<div className='nav-container'>
			{sessionUser ? (
				<div className='divider'>
					<div className='Inner-nav-container' >
						<div className='container-logo1'>
							<img className='logo-img' src='https://pngimg.com/d/letter_p_PNG108.png'></img>
						</div>

						{/* <div className='home-link'> */}
							<NavLink className='home-link' exact to="/posts">Home</NavLink>
						{/* </div> */}
						<div className='create-post-container'>
							{isLoaded && (
								<div className='create-post-input4'>
									<OpenModalButton className='create-post-input4' buttonText='Create Post' modalComponent={<CreatePost />} />
								</div>
							)}
							<i className="fas fa-angle-down"></i>
						</div>
					</div>
					<div className='nav-bar-search-container'>
						<form onSubmit={handleSearch} className='nav-bar-search-form'>
							<div className="nav-bar-search-wrapper">
								<input placeholder="Search for anything" className="nav-bar-search-text-field" type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
								
							</div>
						</form>
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
									{/* <div className='loginmodal'> */}
										<OpenModalButton
											className='loginmodal'
											buttonText='Login'
											modalComponent={<LoginFormModal />}
										/>
									{/* </div> */}
								</div>
								<div className='Signup1'>
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