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

      <div className="w-full h-[60vh]flex items-start justify-between flex-col gap-5">
        <div className="overflow-hidden py-4 uppercase font-[fontThree]">
          <motion.div
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-gray-900 text-4xl font-[fontThree] text-[5vw] max-[400px]:text-[16vw] ml-[7rem]"> Relax with</h1>
          </motion.div>
        </div>
        <div className="overflow-hidden py-4 uppercase font-[fontThree]">
          <motion.div
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h1 className="text-gray-900 text-4xl font-[fontThree] text-[5vw] max-[400px]:text-[16vw]">Rich Red</h1>
          </motion.div>
        </div>
        <div className="overflow-hidden py-4 uppercase font-[fontThree]">
          <motion.div
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h1 className="text-gray-900 text-4xl font-[fontThree] text-[5vw] max-[400px]:text-[16vw]">Tea #3</h1>
          </motion.div>
        </div>

        <div className="mx-[7rem] mt-[7rem] max-lg:mx-[1rem] ">
          <div className="overflow-hidden py-1">
          <motion.p
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-800 max-lg:text-[15px] max-md:text-[10px]">
            Discover the complex aroma and sweet jam taste of Golden Eyebrows -
            a deservedly popular red tea!
          </motion.p>
          </div>
          <div className="overflow-hidden py-1">
          <motion.button
             initial={{ y: 80 }}
             animate={{ y: 0 }}
             transition={{ duration: 0.7, delay: 0.5 }}
            className="uppercase font-[fontThree] text-sm text-gray-700 max-md:my-2 my-7">
            Shop Now{" "}
            <i className="ri-arrow-right-long-fill py-2 px-8 rounded-[50px] border-2 border-gray-500 text-xl ml-4 hover:ml-8 transition-all duration-[0.4s]"></i>
          </motion.button>
          </div>
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
