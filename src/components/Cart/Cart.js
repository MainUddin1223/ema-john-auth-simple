import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    return (
        <div className='cart-div'>
            <h1>{cart.length}</h1>
            <div className='item-summary'>
                <p className="cart-heading">Order Summary</p>
                <p>Selected Items:</p>
                <p>Total Price: $</p>
                <p>Total Shipping Charge:</p>
                <p>Tax:$ </p>
            </div>
            <h6>Grand Total: $</h6>
        </div>
    );
};

export default Cart;