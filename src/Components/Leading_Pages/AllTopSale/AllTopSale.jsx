import React from "react";
import Data from "./Data.json";

function AllTopSale() {
  return (
    <div className="w-full h-full py-[10rem] px-[5rem] flex items-center justify-center flex-col gap-10 max-lg:px-[1rem]">
      <h3 className="text-[3rem] font-[fontThree] uppercase pt-[5rem]">
        All Top Sales
      </h3>

      <div className="contBox w-full flex items-center justify-center flex-wrap gap-10 ">
        {Data.Data.map((item, idx) => (
          <div
            key={idx}
            className="w-[25%] max-lg:w-[70%] max-sm:w-full relative"
          >
            <div className="ImageBox flex items-center justify-center">
              <img src={item.img} alt="" className="w- rounded-[2rem]" />
              <button className="btn opacity-0 transition-all duration-[0.5s] w-[90%] py-8 bg-slate-900 font-bold uppercase text-white rounded-full absolute bottom-[6rem]">
                Add To Cart
              </button>
            </div>
            <h2 className="uppercase font-[fontThree] text-[1.1rem] font-semibold py-3">
              {item.title}
            </h2>
            <p className="text-[0.9rem] text-gray-800">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllTopSale;
