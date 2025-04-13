import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import DataSlice from "./DataSlice.json";

function Slice() {
  return (
    <div className="w-full h-full flex items-start justify-center flex-col overflow-hidden py-20">
      <h1 className="text-[4vw] uppercase font-[fontFour] px-[15rem] max-[980px]:px-[10rem] max-md:px-[5rem] max-sm:px-[1rem] py-10 max-sm:text-[2rem]">Choose Your Flow</h1>

      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        modules={[Pagination]}
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          980: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="w-full flex items-center gap-4 relative left-[15rem] max-[980px]:left-[10rem] max-md:left-[5rem] max-sm:left-[1rem]"
      >
        {
        DataSlice.slice.map((item, idx) => (
          <SwiperSlide key={idx} className="w-full">
            <img src={item.img} alt="" className="w-[100%] rounded-xl" />
            <h2 className="uppercase font-[fontFour] text-[1.5rem] py-3">{item.title}</h2>
            <p className="text-[0.9rem] text-gray-800">{item.description}</p>
          </SwiperSlide>
        ))
        }
      </Swiper>
    </div>
  );
}

export default Slice;
