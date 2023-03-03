import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
	const dispatch = useDispatch();
	const history = useHistory()
	const [email, setEmail] = useState("");
	const [age, setAge] = useState('');
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState([]);

	const { closeModal } = useModal();

	console.log(typeof age)

	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrors([])

		if (password === confirmPassword) {
			const data = await dispatch(signUp(age, firstName, lastName, email, password));
			if (Array.isArray(data)) {
				const formattedData = data.map((data) => data.split(': ')[1])
				setErrors(formattedData);

			} else {
				history.push('/posts')
				closeModal();
			}
		} else {
			setErrors([
				"Confirm Password and Password field must match",
			]);
		}
	};



	return (
		<div className="modal-main-div2">
			<div className="welcome-to-container">
				<h1 className="title-modal">Welcome to Pin-It</h1>
			</div>
			<form onSubmit={handleSubmit}>
				<div className="validation-container1">
					<ul className="validations2">
						{errors.map((error, idx) => (
							<li key={idx}>{error}</li>
						))}
					</ul>

				</div>
				<div className="login-form-modal-container">
					<label>
						<div className="password-name1">
							Email
						</div>
						<div className="input-div">

							<input
								minLength={15}
								className="email-input"
								type="text"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
					</label>
					<label>
						<div className="password-name1">
							firstName
						</div>
						<input
							minLength={2}
							maxLength={50}
							className="email-input"
							type="text"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							required
						/>
					</label>
					<label>
						<div className="password-name1">
							LastName
						</div>
						<input
							minLength={2}
							maxLength={50}
							className="email-input"
							type="text"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							required
						/>
					</label>
					<label>
						<div className="password-name1">
							Age
						</div>
						<div className="input-div">

							<input
								className="email-input"
								type="number"
								value={age}
								onChange={(e) => setAge(e.target.value)}
								required
							/>
						</div>
					</label>
					<label>
						<div className="password-name1">
							Password
						</div>
						<div className="input-div">

							<input
							minLength={5}
								className="email-input"
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
					</label>
					<label>
						<div className="password-name1">
							Confirm Password
						</div>
						<div className="input-div">

							<input
								className="email-input"
								type="password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								required
							/>
						</div>
					</label>
					<div className="login-button-modal-padding">
						<button className='loginmodal1' type="submit">Sign Up</button>
					</div>
				</div>
			</form>
		</div >
	);
}

export default SignupFormModal;