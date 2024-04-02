import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import LoginPage from '../src/pages/LoginPage';
import CartPage from '../src/pages/CartPage';
import CheckoutPage from '../src/pages/CheckoutPage';
import ProductDetailPage from '../src/pages/ProductDetailPage';
import RegionsPage from '../src/pages/RegionsPage';
import RegisterPage from '../src/pages/RegisterPage';
import ContactPage from '../src/pages/ContactPage';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      fetch('https://fakestoreapi.com/products')
          .then((res) => res.json())
          .then((json) => setProducts(json));
  }, []);
  
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sanpham/:id' element={<ProductDetailPage products={products} />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/region' element={<RegionsPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
