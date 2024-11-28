import React, { useState, useEffect } from "react";

import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const API_URL = "https://fakestoreapi.com";

const ProductSwiper = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}/products`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch products.");
        setLoading(false);
      });
  }, []);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); 
    const halfStar = rating - fullStars >= 0.5; 
    const stars = "⭐".repeat(fullStars); 
    return stars + (halfStar ? "⭐" : ""); 
  };

  if (loading) return <div>
    <div role="status">
      <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      <span className="sr-only">Loading...</span>
    </div>      
  </div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="rounded-xl w-[60%] h-60vh bg-white p-4 text-center">
      
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              className="w-90 h-64 m-auto object-contain"
            />
            <div className="p-6 mt-4 flex flex-col gap-2">
              <h3 className="font-bold text-gray-700 text-[25px]">
                {item.title}
              </h3>
              <p className="text-slate-800 text-[15px]">
                DESCRIPTION: {item.description}
              </p>
              <p className="text-amber-700">🟡 CATEGORY: {item.category}</p>
              <p className="text-amber-700">
                🟡 RATING: {renderStars(item.rating.rate)}
              </p>
              <p className="text-green-500">
                🟢 PRICE: {item.price}💲
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSwiper;