import React from "react";
import 'remixicon/fonts/remixicon.css'

function Home() {
  return (
    <div className="w-full h-full py-12 max-lg:py-0 px-[8rem] flex items-center max-xl:px-[5rem] max-md:px-[3.5rem] max-sm:px-[1rem] max-sm:flex-col-reverse ">
      <div className="w-full h-[50vh] flex items-start justify-between flex-col relative">
        <div>
          <h1 className="text-[6vw] uppercase leading-[6vw] font-[fontFiver] relative left-[9rem] max-lg:mt-12 max-md:mt-20 max-sm:mt-3 max-xl:left-[4rem] max-sm:text-[13vw] max-sm:left-0 max-sm:leading-[12vw] ">Relax with</h1>
          <h1 className="text-[6vw] uppercase leading-[6vw] font-[fontFiver] max-sm:text-[13vw] max-sm:leading-[12vw] ">Rich Red</h1>
          <h1 className="text-[6vw] uppercase leading-[6vw] font-[fontFiver] max-sm:text-[13vw] max-sm:leading-[12vw] ">Tea #3</h1>
        </div>

        <div className="mx-[7rem] mt-[7rem] max-lg:mx-[1rem] ">
          <p className="text-gray-800 max-lg:text-[15px] max-md:text-[10px]">
            Discover the complex aroma and sweet jam taste of Golden Eyebrows -
            a deservedly popular red tea!
          </p>
          <button className="uppercase font-[fontThree] text-sm text-gray-700 max-md:my-2 my-7">Shop Now <i className="ri-arrow-right-long-fill py-2 px-8 rounded-[50px] border-2 border-gray-500 text-xl ml-4 hover:ml-8 transition-all duration-[0.4s]"></i></button>
        </div> 
      </div>

      <div className="w-full">
        <img src="/home.jpeg" alt="" className="rounded-[3rem] w-full max-lg:rounded-[2rem] " />
      </div>
    </div>
  );
}

export default Home;
