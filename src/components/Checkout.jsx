import React from 'react';

const Checkout = ({ cartItems }) => {
    return (
        <div className="checkout">
            <h2>Thanh toán</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        <span>{item.name}</span>
                        <span>Số lượng: {item.quantity}</span>
                        <span>Giá: {item.price * item.quantity} VNĐ</span>
                    </li>
                ))}
            </ul>
            <div>
                <p>Tổng tiền: {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)} VNĐ</p>
                <form>
                    <input type="text" placeholder="Họ và tên" />
                    <input type="text" placeholder="Địa chỉ" />
                    <input type="email" placeholder="Email" />
                    <button type="submit">Xác nhận thanh toán</button>
                </form>
            </div>
            
        </div>
    );
}

export default Checkout;
