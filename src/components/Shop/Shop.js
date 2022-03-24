import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    useEffect(() => {
        const storedCart = getStoredCart()
        console.log(storedCart);
        for (const id in storedCart) {
            console.log(id);
            const addedProduct = products.find(product => product.id == id)
            console.log(addedProduct);

        }
    }, [])
    const handleAddToCart = (products) => {
        // console.log(products);
        const newCart = [...cart, products];
        setCart(newCart);
        addToDb(products.id)
        getStoredCart()
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id}
                        product={product} handleAddToCart={handleAddToCart}></Product>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default Shop;