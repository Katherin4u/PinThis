import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [age, setAge] = useState('');
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState([]);
	const [submitted, setSubmitted] = useState(false);
	const { closeModal } = useModal();

	console.log(typeof age)

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (errors.length > 0) {
            setSubmitted(true)
            return;
        };
		// if (password === confirmPassword) {
		const data = await dispatch(signUp(age, firstName, lastName, email, password));

		closeModal();



	};

	useEffect(() => {
        const errors = []
        if (firstName.length === 0) errors.push('Name Field is required');
        if (lastName.length === 0) errors.push('Description is required')
        setErrors(errors)
    }, [firstName , lastName])

	return (
		<div className="modal-main-div2">
			<div className="welcome-to-container">
				<h1 className="title-modal">Welcome to Pin-It</h1>
			</div>
			<form onSubmit={handleSubmit}>
				<div className="validation-container1">
					<ul className="validations2">
						{submitted && errors.map((error, idx) => (
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
							className="email-input"
							type="text"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							required
						/>
					</label>
					<label>
						<div className="password-name">
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
						<div className="password-name">
							Password
						</div>
						<div className="input-div">

							<input
								className="email-input"
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
					</label>
					<label>
						<div className="password-name">
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