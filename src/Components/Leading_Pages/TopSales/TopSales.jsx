import React from "react";
import ImageTop from "/top.jpeg";

function TopSales() {
  return (
    <div className="w-full h-full px-[5rem] py-10 max-lg:px-[3rem] max-md:px-[2rem] max-sm:px-[1rem]">
      <h1 className="text-center text-[14vw] font-bold font-[fontFiver] max-md:text-[10vw]">
        TOP SALES
      </h1>

      <div className="mt-10 w-full flex items-center justify-between gap-8 max-sm:flex-col">
        <img src={ImageTop} alt="" className="w-[60%] rounded-[4rem] max-sm:w-full" />

        <div className="h-[50vh] max-lg:h-[35vh] max-md:h-[30vh] flex items-start justify-between flex-col max-sm:h-[20vh]">
          <div>
            <h1 className="text-[1.5vw] uppercase font-bold max-sm:text-xl">Green tea #2</h1>
            <h3 className="text-xl text-gray-700">$ 17</h3>
          </div>    

          <div>
            <p className="text-gray-700 max-lg:text-[0.5rem] max-sm:text-[0.9rem] py-4">
              Longjing is one of the ten "Famous Teas of China". It is made of
              small tea leaves and buds, thanks to which it is drunk for a long
              time, and has a bright aroma and rich taste. In the manufacture of
              thin and flat leaves are obtained.
            </p>
            <button className="uppercase font-[fontThree] text-sm text-gray-700 max-md:my-2 my-7">Shop Now <i className="ri-arrow-right-long-fill py-2 px-8 rounded-[50px] border-2 border-gray-500 text-xl ml-4 hover:ml-8 transition-all duration-[0.4s]"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSales;
