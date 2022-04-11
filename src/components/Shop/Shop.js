import React, { useEffect, useState } from 'react';
import useCart from '../../Hooks/useCart';
import useProduct from '../../Hooks/useProduct';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useProduct();
    const [cart, setCart] = useCart(products);
    const handleAddToCart = (selectedProduct) => {
        // console.log(products);
        let newCart = [];
        const exist = cart.find(product => product.id === selectedProduct.id);
        if (!exist) {
            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }
        setCart(newCart);
        addToDb(selectedProduct.id)
        getStoredCart()
    }
    const clearCart = () => {
        deleteShoppingCart()
        setCart([])
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
                <Cart cart={cart}>
                    <Link to="/order">
                        Review Order
                    </Link>
                    <button onClick={clearCart}>Clear Cart</button>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;

    // useEffect(() => {
    //     const storedCart = getStoredCart()
    //     const savedCart = []
    //     for (const id in storedCart) {
    //         const addedProduct = products.find(product => product.id === id)
    //         if (addedProduct) {
    //             const quantity = storedCart[id];
    //             addedProduct.quantity = quantity
    //             savedCart.push(addedProduct)
    //         }
    //     }
    //     setCart(savedCart)
    // }, [products]);