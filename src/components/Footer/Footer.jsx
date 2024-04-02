import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>Về chúng tôi</h2>
                    <p>Chúng tôi cung cấp các sản phẩm đặc sản từ các vùng miền khắp Việt Nam, mang lại trải nghiệm ẩm thực đa dạng và phong phú cho khách hàng.</p>
                    <div className="contact">
                        <span><i className="fas fa-phone"></i> 123-456-789</span>
                        <span><i className="fas fa-envelope"></i> info@myspecialtyfood.com</span>
                    </div>
                    <div className="socials">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
                <div className="footer-section links">
                    <h2>Liên kết</h2>
                    <ul>
            <li><a href="/">Trang chủ</a></li>
            <li><Link to ="/sanpham">Sản phẩm</Link></li>
            <li><Link to ="/cart">Giỏ hàng</Link></li>
            <li><Link to ="/region">Vùng miền</Link></li>
            <li><Link to ="/checkout">Thanh Toán</Link></li>
            <li><Link to ="/contact">Liên hệ</Link></li>
          </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Website Bán Đặc Sản Vùng Miền.</p>
            </div>
        </footer>
    );
}

export default Footer;
