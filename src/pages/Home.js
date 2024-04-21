import React from 'react';
import Header from '../components/Header/Header';
import Advertisement from '../components/Header/Advertisement';
import ProductList1 from '../components/List-sanpham/ProductList1';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <div className='Header'>
        <Header />
      </div>
      <div className='Advertisement pt-[1em] '>
        <Advertisement />
      </div>
      <div className='ProductList1'>
        <ProductList1 />
      </div>
      <div className='Footer'>
        <Footer />
      </div>
    </div>

  );
}

export default Home;
