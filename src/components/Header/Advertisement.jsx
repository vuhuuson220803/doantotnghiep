import React, { useEffect, useState } from 'react';
import './Advertisement.scss';
// thư viện icon react
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx';
const Advertisement = () => {
  const slides = [
    {
      url: 'https://scontent.iocvnpt.com/resources/portal/Images/BGG/admin.dulich/2023/z4330299859166_8e8037959e2e796414bfdfbe3e392b59_733687414.jpg'
    },
    {
      url:'https://imagevietnam.vnanet.vn/Upload/2020/10/26/26102020092906525-04b.jpg'
    },
    {
      url:'https://cdn.tgdd.vn/Files/2022/01/25/1412805/cach-nau-pho-bo-nam-dinh-chuan-vi-thom-ngon-nhu-hang-quan-202201250230038502.jpg'
    },
    {
      url:'https://cdn.tgdd.vn/2021/06/CookProduct/com-la-gi-cach-bao-quan-com-tuoi-mua-com-lang-vong-o-dau-ngon-thumb-chu-nhat-1200x676.jpg'
    },
    {
      url:'https://dulichquynhon.binhdinh.vn/wp-content/uploads/2022/10/ruou-bau-da-binh-dinh-1.jpg'
    }
  ]

  const [currentIndex , setCurrentIndex] = useState (0)
  // back image
  const prevSlide = () => {
    const isFirstSlide =  currentIndex === 0 ;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex-1;
    setCurrentIndex (newIndex);
  }
// next image
  const nextSlide = () => {
    const isLastSlide =  currentIndex === slides.length - 1 ;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex (newIndex);
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex (slideIndex);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 2000); // Thay đổi số 5000 thành khoảng thời gian bạn muốn slide chuyển đổi (ở đây là 5 giây)

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    // slide show
    <div className="max-w-[1400px] w-full h-[46.875em] m-auto py-16 px-4 relative">
      <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-200"></div>
      {/* back : nút lùi lại*/}
      <div className='absolute top-[50%] -translate-x-0 tranlate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
        <BsChevronCompactLeft onClick={prevSlide} size={30}/>
      </div>
      
      {/* next : nút tiếp theo*/}
      <div className='absolute top-[50%] -translate-x-0 tranlate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
        <BsChevronCompactRight onClick={nextSlide} size={30}/>
      </div>
      {/* 
      // đây là dấu chấm ở phần slide (hiện tại không dùng đến )
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide , slideIndex) => (
          <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
            <RxDotFilled />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Advertisement;
