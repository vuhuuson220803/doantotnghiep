import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpg'
import './Header.css'
import 'boxicons'

const Header = ({cartCount}) => {
  
  return (
    <header className="header flex h-[4em] *:text-sm items-center justify-around text-[#fff] font-roboto bg-[#161516]">
      <div className="menu flex">
        <nav>
          <ul className='flex'>
            <li><a href="/">Trang chủ</a></li>
            <li><Link to="/sanpham">Sản phẩm</Link></li>
            {/* <li><Link to="/region">Vùng miền</Link></li> */}
            <li><Link to="/checkout">Thanh Toán</Link></li>
            <li><Link to="/contact">Liên hệ</Link></li>
          </ul>
        </nav>
      </div>
      <div className="search text-[#000] flex h-[50%]">
        <input  type="text" placeholder="Search..." class="noOutline w-[95%]" />
        <box-icon name='search' color="white" ></box-icon>
      </div>
      <div className="cart cursor-pointer flex items-center">
        Giỏ hàng
        <box-icon name='cart' color="white"></box-icon>
      </div>
      <div className="account">
        <ul className='flex'>
          <box-icon type='solid' name='user-circle' color="white"></box-icon>
          <li><Link to="/login">Đăng nhập /</Link></li>
          <li><Link to="/register">Đăng ký</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
