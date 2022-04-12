import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Shipment = () => {
    const [user] = useAuthState(auth)

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [number, setNumber] = useState('')
    const [errors, setError] = useState('')

    const handleNameBlur = event => {
        setName(event.target.value)
    }
    const handleAddressBlur = event => {
        setAddress(event.target.value)
    }
    const handlePhoneNumberBlur = event => {
        setNumber(event.target.value)
    }
    const handleCreatUser = event => {
        event.preventDefault();
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping Information</h2>
                <form onSubmit={handleCreatUser}>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input onBlur={handleNameBlur} type="name" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handlePhoneNumberBlur} type="text" name="Phone" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{errors}</p>
                    {/* <button onClick={handleCreatUser} className='login-button' type="submit">Sign Up</button> */}
                    <input className='login-button' type="submit" value="Add shipping" />
                </form>
            </div>
        </div>
    );
};

export default Shipment;