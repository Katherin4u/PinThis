import React, { useEffect, useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";
import { useHistory } from "react-router-dom";

function LoginFormModal() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();
  const [submitted, setSubmitted] = useState(false);
  console.log(errors)

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors([])
    if (errors.length > 0) {
      setSubmitted(true)
      return;
    };
    
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
      history.push('/posts')
        closeModal()
    }
  };
  const demoLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login('demo@aa.io', 'password'));
    history.push(`/posts`)
    if (data) {
      setErrors(data);
    } else {
      closeModal()
    }
  };

  useEffect(() => {
    const errors = []
    if (email.length === 0) errors.push('Email Field is required');
    if (password.length === 0) errors.push('Password is required')
    if(!email.includes('@' && ".com")) errors.push("Must be a valid email")
    setErrors(errors)
  }, [email, password])

  return (
    <div >

      <div className="modal-main-div">
        <div className="welcome-to-container">
          <h1 className="title-modal">Welcome to Pin-It</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="validation-container">
            <ul className="validations1">
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
              <div className="password-name">
                Password
              </div>
              <div className="input-div">
                <input
                  className="password-input"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </label>
            <div className="login-button-modal-padding">
              <button className='loginmodal1' type="submit">Log In</button>
            </div>

            <div className="or">
              Or
            </div>
            <div>
              <div className="login-button-modal-padding">
                <button className='loginmodal1' type="submit" onClick={(e) => demoLogin(e)}>Demo Login</button>
              </div>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginFormModal;
