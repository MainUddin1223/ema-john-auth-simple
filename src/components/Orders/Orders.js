import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProduct from '../../Hooks/useProduct';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Review from '../Review/Review';
import './Order.css'

const Orders = () => {
    const [products, setProducts] = useProduct()
    const [cart, setCart] = useCart(products);
    console.log(cart);
    const removeHandeler = (product) => {
        const rest = cart.filter(pd => pd.id != product.id)
        setCart(rest)
        removeFromDb(product.id)
    }
    const clearCart = () => {
        deleteShoppingCart()
        setCart([])
    }
    const navigate = useNavigate();
    return (
        <div className="shop-container">
            <div>
                {
                    cart.map(item => <Review
                        key={item.id}
                        item={item}
                        removeHandeler={removeHandeler}
                    ></Review>)
                }
            </div>
            <div className="">
                <Cart cart={cart}>
                    {/* <Link to='/inventory'>
                        <button>Proceed Checkout</button>
                    </Link> */}
                    <button onClick={() => navigate('/shipment')}>Proceed shipping</button>
                    <button onClick={clearCart}>Clear Cart</button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;