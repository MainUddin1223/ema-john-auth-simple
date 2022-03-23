import React from 'react';
import './Cart.css'
const Cart = (props) => {
    console.log(props.cart);
    return (
        <div className='cart-div'>
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