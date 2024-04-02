import React from 'react';
import './checkoutpage.scss'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
    const onchange = () =>{
        alert("thanh toán thành công trở về trang chủ !")
    }

    return (
    <>
        <div className="Header">
            <Header />
            <div className="checkout-page">
                <h1>Thanh toán</h1>
                <form className="checkout-form">
                    <div className="form-group">
                        <label htmlFor="name">Họ và tên:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Địa chỉ:</label>
                        <input type="text" id="address" name="address" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">Thành phố:</label>
                        <input type="text" id="city" name="city" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="zip">Mã bưu chính:</label>
                        <input type="text" id="zip" name="zip" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cardNumber">Số thẻ:</label>
                        <input type="text" id="cardNumber" name="cardNumber" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="expiry">Ngày hết hạn:</label>
                        <input type="text" id="expiry" name="expiry" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cvv">CVV:</label>
                        <input type="text" id="cvv" name="cvv" required />
                    </div>
                    <Link to={'/'} onClick={onchange}>
                    <button className='form-submit' type="submit">Thanh toán</button>
                    </Link>
                </form>
                </div>
                <div className="Footer">
                    <Footer />
            </div>
            
        </div>
        
        </>
    );
}

export default CheckoutPage;
