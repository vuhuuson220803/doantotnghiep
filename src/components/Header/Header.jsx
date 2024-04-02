import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import logo from './logo.jpg'

const Header = ({cartCount}) => {
  
  return (
    <header className="header">
      <div className="container">
        <Link to={'/'}>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        </Link>
        
        <nav className="menu">
          <ul>
            <li><a href="/">Trang chủ</a></li>
            <li><Link to="/sanpham">Sản phẩm</Link></li>
            {/* <li><Link to="/region">Vùng miền</Link></li> */}
            <li><Link to="/checkout">Thanh Toán</Link></li>
            <li><Link to="/contact">Liên hệ</Link></li>
          </ul>
        </nav>

        <div className="search-bar">
          <input type="text" placeholder="Tìm kiếm..." />
          <button type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
        </div>

        <div className="cart-megamenu hidden-lg hidden-md">
          <div className="cart-hover">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
            <Link to="/cart">Giỏ hàng</Link>
            <span className="cnt count_item_pr">{cartCount}</span>
          </div>
        </div>

        <div className="user-actions">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
          </svg>
          <ul>
            <li><Link to="/login">Đăng nhập</Link></li>
            <li><Link to="/register">Đăng ký</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
