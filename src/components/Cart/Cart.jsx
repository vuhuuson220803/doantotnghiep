import React, { useState, useEffect } from 'react';
import './cart.scss';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/carts')
            .then(res => res.json())
            .then(json => setCarts(json));
    }, []);

    return (
        <div className="cart-container">
            {carts.map((cart) => (
                <div className="cart-item" key={cart.id}>
                    <h3>Cart ID: {cart.id}</h3>
                    <p>User ID: {cart.userId}</p>
                    <p>Date: {cart.date}</p>
                    <ul>
                        {cart.products.map((product) => (
                            <li key={product.productId}>
                                Product ID: {product.productId} - Quantity: {product.quantity}
                            </li>
                    
                        ))}
                        <Link to={`/checkout`}>
                        <button>
                            Thanh Toán Ngay
                        </button>
                        </Link>
                    </ul>
                </div>
            ))}
            
        </div>
        
    );
};

export default Cart;
