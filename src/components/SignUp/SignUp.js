import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setError] = useState('')
    const navigate = useNavigate()
    const [createUserWithEmailAndPassword, user ,] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }
    const handleCreatUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError(' Your password do not matched');
            return
        }
        if (password.length < 6) {
            setError('password must contain 6 characters ')
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }
    if(user){
        navigate('/shop')
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreatUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{errors}</p>
                    {/* <button onClick={handleCreatUser} className='login-button' type="submit">Sign Up</button> */}
                    <input className='login-button' type="submit" value="Sign Up" />
                </form>
                <p className='signUp-message'> Already heave an account? <Link className='form-link' to="/login">Login </Link> </p>
                <div className="divider">
                    <hr className="solid" />
                    <p>or</p>
                    <hr />
                </div>
                <div className='input-group'>
                    <button className='google-button'>
                        <img src="https://w7.pngwing.com/pngs/506/509/png-transparent-google-company-text-logo.png" alt="" />
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;