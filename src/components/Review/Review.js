import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Review.css'
const Review = ({ item, removeHandeler }) => {
    const { img, name, price, quantity, shipping } = item;
    return (
        <div className='review-container'>
            <div className='item-img'>
                <img src={img} alt="" />
            </div>
            <div className="review-div">
                <div className='review-details'>
                    <p className="item-name" title={name}>
                        {name.length > 20 ? name.slice(0, 20) + '...' : name}
                    </p>
                    <p>Price: $ <span className='orange'>{price}</span></p>
                    <p> Shipping Charge: ${shipping}</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div className='delete-btn' onClick={() => { removeHandeler(item) }}>
                    <button>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Review;