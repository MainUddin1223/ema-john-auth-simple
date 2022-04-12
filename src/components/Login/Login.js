import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate=useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(email,password);
        signInWithEmailAndPassword(email,password);
        console.log(user);
        if (user) {
            navigate('/shop')
        }
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <p>{error?.message}</p>
                    { loading&&<p>loading.....</p>}
                    <input className='login-button' type="submit" value="Login" />
                </form>
                <p className='signUp-message'> New to Ema-john? <Link className='form-link' to="/signup">Create New Account </Link> </p>
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

export default Login;