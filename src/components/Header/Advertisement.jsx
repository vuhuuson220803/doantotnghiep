import React, { useEffect } from 'react';
import './Advertisement.scss';
import r2Image from './r2.jpg'; // Import ảnh vào component
import r1Image from './r1.jpeg';
import r3Image from './r3.jpg';
const Advertisement = () => {
  useEffect(() => {
    const slider = document.getElementById('bxslider-home4'); // Lấy phần tử ul chứa các slide
    const slides = slider.getElementsByTagName('li'); // Lấy tất cả các slide

    let currentSlideIndex = 0; // Index của slide hiện tại
    let slideInterval; // Biến lưu trữ interval cho việc tự động chuyển slide

    // Hiển thị slide theo index truyền vào
    const showSlide = (index) => {
      for (let i = 0; i < slides.length; i++) {
        if (i === index) {
          slides[i].style.display = 'block'; // Hiển thị slide đang được chọn
        } else {
          slides[i].style.display = 'none'; // Ẩn các slide còn lại
        }
      }
    };

    // Chuyển sang slide tiếp theo
    const nextSlide = () => {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Tăng index lên 1, quay lại 0 nếu vượt qua slide cuối cùng
      showSlide(currentSlideIndex); // Hiển thị slide tiếp theo
    };

    // Bắt đầu tự động chuyển slide
    const startSlideShow = () => {
      slideInterval = setInterval(nextSlide, 2000); // Chuyển slide sau mỗi 2 giây
    };

    // Dừng tự động chuyển slide khi rê chuột vào slider
    const stopSlideShow = () => {
      clearInterval(slideInterval);
    };

    // Gán sự kiện hover vào slider
    slider.addEventListener('mouseenter', stopSlideShow);
    slider.addEventListener('mouseleave', startSlideShow);

    // Bắt đầu tự động chuyển slide khi component được render
    startSlideShow();

    // Cleanup
    return () => {
      clearInterval(slideInterval); // Dừng interval khi component unmount
      slider.removeEventListener('mouseenter', stopSlideShow); // Xóa sự kiện hover
      slider.removeEventListener('mouseleave', startSlideShow); // Xóa sự kiện hover
    };
  }, []); // Sử dụng empty dependency array để chỉ gọi useEffect một lần sau khi component mount

  return (
    <div className="slider-area">
      <div className="block-slider block-slider4">
        <ul className="" id="bxslider-home4">
          <li>
            <img src={r2Image} alt="Slide" /> {/* Sử dụng đường dẫn của ảnh */}
            <div className="caption-group">
              <h2 className="caption title">
                Chè Thái Nguyên <span className="primary">Đặc Sản Thái Nguyên!<strong></strong></span>
              </h2>
              <h4 className="caption subtitle">Miền Bắc</h4>
            
              <a className="caption button-radius" href="#"><span className="icon"></span>Shop now</a>
             
            </div>
          </li>

          <li>
            <img src={r1Image} alt="Slide" /> {/* Sử dụng đường dẫn của ảnh */}
            <div className="caption-group">
              <h2 className="caption title">
                Bún bò Huế  <span className="primary">Đặc sản Huế !<strong></strong></span>
              </h2>
              <h4 className="caption subtitle">Miền Trung</h4>
              <a className="caption button-radius" href="#"><span className="icon"></span>Shop now</a>
            </div>
          </li>

          <li>
            <img src={r3Image} alt="Slide" /> {/* Sử dụng đường dẫn của ảnh */}
            <div className="caption-group">
              <h2 className="caption title">
                Cơm Tấm<span className="primary">Đặc Sản Sài Gòn!<strong></strong></span>
              </h2>
              <h4 className="caption subtitle">Miền Nam</h4>
              <a className="caption button-radius" href="#"><span className="icon"></span>Shop now</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Advertisement;
