import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Product = (props) => {
    const { handleAddToCart, product } = props;
    const { name, price, seller, ratings, img } = product;
    return (
        <div className='product'>
            <img className='product-img' src={img} alt="" />
            <div className='product-detail'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating:{ratings} star</p>

            </div>
            <button className='btn-cart' onClick={() => { handleAddToCart(product) }}>
                    <p>Add to Cart</p>

                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;