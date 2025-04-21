import React, { useRef } from "react";
import ImageTop from "/top.jpeg";
import { motion, useInView } from "framer-motion";

function TopSales() {
  const sectionRef = useRef(null);
  const sectionRef2 = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1, margin: "-50px 0px" });
  const isInView2 = useInView(sectionRef2, { once: true, amount: 0.1, margin: "-50px 0px" });

  return (
    <div className="w-full h-full px-[5rem] py-10 max-lg:px-[3rem] max-md:px-[2rem] max-sm:px-[1rem]">
      <div className="overflow-hidden py-4">
        <motion.h1
          ref={sectionRef2}
          initial={{ y: 80, opacity: 0 }}
          animate={isInView2 ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-[14vw] font-bold font-[fontFiver] max-md:text-[10vw]"
        >
          <motion.span
            initial={{ y: 80 }}
            animate={isInView2 ? { y: 0 } : { y: 80 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="inline-block"
          >
            TOP SALES
          </motion.span>
        </motion.h1>
      </div>

      <div className="mt-10 w-full flex items-center justify-between gap-8 max-sm:flex-col">
        <motion.img
          ref={sectionRef}
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          src={ImageTop} alt="" className="w-[60%] rounded-[4rem] max-sm:w-full" />

        <div className="h-[50vh] max-lg:h-[35vh] max-md:h-[30vh] flex items-start justify-between flex-col max-sm:h-[20vh]">
          <div>
            <div className="overflow-hidden py-4">
              <motion.h1
                ref={sectionRef}
                initial={{ y: 80, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[1.5vw] uppercase font-bold max-sm:text-xl"
              >
                <motion.span
                  initial={{ y: 80 }}
                  animate={isInView ? { y: 0 } : { y: 80 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="inline-block"
                >
                  Green tea #2
                </motion.span>
              </motion.h1>
            </div>



            <div className="overflow-hidden py-1">
              <motion.h1
                ref={sectionRef}
                initial={{ y: 80, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-700"
              >
                <motion.span
                  initial={{ y: 80 }}
                  animate={isInView ? { y: 0 } : { y: 80 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="inline-block"
                >
                  $ 17
                </motion.span>
              </motion.h1>
            </div>
          </div>

          <div>
            <motion.p
              ref={sectionRef}
              className="text-gray-700 max-lg:text-[0.5rem] max-sm:text-[0.9rem] py-4">
              <motion.span
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >Longjing is one of the ten "Famous Teas of China". It is made of</motion.span>
              <motion.span
                initial={{ y: 80, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >small tea leaves and buds, thanks to which it is drunk for a long</motion.span>
              <motion.span
                initial={{ y: 70, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 70, opacity: 0 }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
              >time, and has a bright aroma and rich taste. In the manufacture of</motion.span>
              <motion.span
                initial={{ y: 80, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
              >thin and flat leaves are obtained.</motion.span>
            </motion.p>
            <motion.button
              ref={sectionRef}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="uppercase font-[fontThree] text-sm text-gray-700 max-md:my-2 my-7">
              Shop Now <i className="ri-arrow-right-long-fill py-2 px-8 rounded-[50px] border-2 border-gray-500 text-xl ml-4 hover:ml-8 transition-all duration-[0.4s]"></i>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSales;
