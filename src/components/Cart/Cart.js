import React, { useState } from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props
    let total = 0;
    for (const product of cart) {
        total = total + product.price
    }
    const tax = total * 0.1;
    const fixedTax = tax.toFixed(2)
    let shipping = 0;
    for (const product of cart) {
        shipping = shipping + product.shipping
    }
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart-div'>
            <div className='item-summary'>
                <p className="cart-heading">Order Summary</p>
                <p>Selected Items:{cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge:{shipping}</p>
                <p>Tax:$ {fixedTax}</p>
            </div>
            <h6>Grand Total: $ {grandTotal}</h6>
        </div>
    );
};

export default Cart;