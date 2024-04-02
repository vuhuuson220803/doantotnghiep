import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProductDetail from '../components/List-sanpham/ProductDetail';

const ProductDetailPage = ({ products }) => {
    return (
        <div className="Header">
            <Header />
            <div className="product-detail-page">
                <h1>Chi tiết sản phẩm</h1>
            </div>
            <div className="ProductDetailList">
                <ProductDetail products={products} />
            </div>
            <div className="Footer">
                <Footer />
            </div>
        </div>
    );
}

export default ProductDetailPage;
