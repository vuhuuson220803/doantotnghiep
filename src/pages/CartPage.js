import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Cart from '../components/Cart/Cart';
const CartPage = () => {
    return (
        <div
            className="Header">
            <Header />
            <div
                className="cart-page">
                    <Cart/>
            </div>
            <div
                className="Footer">
                <Footer />
            </div>
        </div>
    );
}

export default CartPage;
