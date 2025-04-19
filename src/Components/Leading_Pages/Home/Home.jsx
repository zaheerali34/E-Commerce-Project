import React from "react";
import "remixicon/fonts/remixicon.css";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}

      className="w-full h-full py-12 max-lg:py-0 px-[8rem] flex items-center max-xl:px-[5rem] max-md:px-[3.5rem] max-sm:px-[1rem] max-sm:flex-col-reverse "
    >
      <div className="w-full h-[50vh] flex items-start justify-between flex-col relative">
        <div>
          <motion.h1 
             initial={{ opacity: 0, y: 70 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}
          className="text-[6vw] uppercase leading-[6vw] font-[fontFiver] relative left-[9rem] max-lg:mt-12 max-md:mt-20 max-sm:mt-3 max-xl:left-[4rem] max-sm:text-[13vw] max-sm:left-0 max-sm:leading-[12vw] ">
            Relax with
          </motion.h1>
          <motion.h1 
             initial={{ opacity: 0, y: 100 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.5 }}
          className="text-[6vw] uppercase leading-[6vw] font-[fontFiver] max-sm:text-[13vw] max-sm:leading-[12vw] ">
            Rich Red
          </motion.h1>
          <motion.h1 
             initial={{ opacity: 0, y: 120 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.8 }}
          className="text-[6vw] uppercase leading-[6vw] font-[fontFiver] max-sm:text-[13vw] max-sm:leading-[12vw] ">
            Tea #3
          </motion.h1>
        </div>

        <div className="mx-[7rem] mt-[7rem] max-lg:mx-[1rem] ">
          <motion.p 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8 }}
          className="text-gray-800 max-lg:text-[15px] max-md:text-[10px]">
            Discover the complex aroma and sweet jam taste of Golden Eyebrows -
            a deservedly popular red tea!
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.5 }}
          className="uppercase font-[fontThree] text-sm text-gray-700 max-md:my-2 my-7">
            Shop Now{" "}
            <i className="ri-arrow-right-long-fill py-2 px-8 rounded-[50px] border-2 border-gray-500 text-xl ml-4 hover:ml-8 transition-all duration-[0.4s]"></i>
          </motion.button>
        </div>
      </div>

      <div className="w-full">
        <img
          src="/home.jpeg"
          alt=""
          className="rounded-[3rem] w-full max-lg:rounded-[2rem] "
        />
      </div>
    </motion.div>
  );
}

export default Home;
