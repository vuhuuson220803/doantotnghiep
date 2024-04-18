import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpg'
import './Header.css'
import 'boxicons'
const Header = ({ cartCount }) => {

  return (
    <header className="header fixed w-full z-[100] flex h-[4em] *:text-base items-center justify-between text-[#fffff] font-roboto bg-[#ff9900]">
      <div className="menu">
        <nav>
          <ul className='flex *:ml-4'>
            <li className="cursor-pointer"><a href="/">Trang chủ</a></li>
            <li className="cursor-pointer"><Link to="/sanpham">Sản phẩm</Link></li>
            {/* <li><Link to="/region">Vùng miền</Link></li> */}
            <li className="cursor-pointer"><Link to="/checkout">Thanh Toán</Link></li>
            <li className="cursor-pointer"><Link to="/contact">Liên hệ</Link></li>
          </ul>
        </nav>
      </div>

      <div className="search flex cursor-pointer items-center rounded-r bg-[#776262c1] w-[30%]">
        <input type="text" placeholder="Search..." class="outline-none text-[#000] w-[95%]" />
        <box-icon name='search' color="white" size="md"></box-icon>
      </div>
      <div className="cart flex items-center">
        Giỏ hàng
        <box-icon name='cart' color="white" class="cursor-pointer" ></box-icon>
      </div>
      <div className="account">
        <ul className='flex mr-4'>
          <box-icon type='solid' name='user-circle' color="white"></box-icon>
          <li><Link to="/login">Đăng nhập</Link></li>/
          <li><Link to="/register">Đăng ký</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
