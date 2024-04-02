import React from 'react';
import Header from '../components/Header/Header';
import Advertisement from '../components/Header/Advertisement';
import ProductList1 from '../components/List-sanpham/ProductList1';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className="Header">
      <Header/>
      <h1>Chào mừng bạn đến với website của tôi </h1>

      <div className="Advertisement">
        <Advertisement />
      </div>

      <div className="ProductList">
        <ProductList1 />
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
