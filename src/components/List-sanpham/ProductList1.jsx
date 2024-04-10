import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styledata.scss';


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((json) => setProducts(json));
    }, []);

    // useEffect(() => {
    //     const savedCartCount = localStorage.getItem('cartCount');
    //     if (savedCartCount) {
    //         setCartCount(parseInt(savedCartCount));
    //     }
    // }, []);

    const addToCart = (productId) => {
        console.log(`Đã thêm sản phẩm có id: ${productId} vào giỏ hàng.`);
        const newCartCount = cartCount + 1;
        setCartCount(newCartCount);
        
        // Lấy thẻ span để hiển thị số lượng sản phẩm
        const countSpan = document.querySelector('.cnt.count_item_pr');
        // Nếu tìm thấy thẻ span, cập nhật nội dung của nó
        if (countSpan) {
            countSpan.textContent = newCartCount;
        }
        // Lưu trữ vào Local Storage
        localStorage.setItem('cartCount', newCartCount);
    }
    
    

    return (
        <div className="product-list">
            <div className="view-all-button">
                <Link to="/sanpham">Xem tất cả</Link>
            </div>
            {products.map((product) => (
                <li key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p>Giá: {product.price} VNĐ</p>
                <div className="action">
                    <button className="CartBtn" onClick={() => addToCart(product.id)}>
                        <span className="IconContainer">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" className="cart">
                                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                            </svg>
                        </span>
                        <p className="text">ADD TO CART</p>  
                    </button>
                    <Link to={`/sanpham/${product.id}`}>
                        <button className="Deltai" onClick={() => addToCart(product.id)}>
                            <div class="default-btn">
                                <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#FFF" height="20" width="20" viewBox="0 0 24 24">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle r="3" cy="12" cx="12"></circle>
                                </svg>
                                <span className='text'>Xem Chi Tiết</span>
                            </div>
                            
                            <div class="hover-btn">
                                <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#ffd300" height="20" width="20" viewBox="0 0 24 24">
                                    <circle r="1" cy="21" cx="9"></circle>
                                    <circle r="1" cy="21" cx="20"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>
                                <span className='text'>Xem Ngay</span>
                            </div>
                        </button>
                        </Link>
                    </div>
                </li>
            ))}
        </div>
    );
}

export default ProductList;
