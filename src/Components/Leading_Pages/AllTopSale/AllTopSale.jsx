import React, { useRef } from "react";
import Data from "./Data.json";
import { useInView, motion } from "framer-motion";

function AllTopSale() {
  const sectionRef = useRef(null);
  const sectionRef2 = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1, margin: "-50px 0px" });
  const isInView2 = useInView(sectionRef2, { once: true, amount: 0.1, margin: "-50px 0px" });

  return (
    <div className="w-full h-full py-[10rem] px-[5rem] flex items-center justify-center flex-col gap-10 max-lg:px-[1rem]">
      <div className="overflow-hidden py-4">
        <motion.h1 
          ref={sectionRef}
          initial={{ y: 80, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[3rem] font-[fontThree] uppercase pt-[5rem]"
        >
          <motion.span
            initial={{ y: 80 }}
            animate={isInView ? { y: 0 } : { y: 80 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="inline-block"
          >
            All Top Sales
          </motion.span>
        </motion.h1>
      </div>

      <div className="contBox w-full flex items-center justify-center flex-wrap gap-10 ">
        {Data.Data.map((item, idx) => (
          <motion.div
          ref={sectionRef2}
          initial={{ y: 150, opacity: 0 }}
          animate={isInView2 ? { y: 0, opacity: 1 } : { y: 150, opacity: 0 }}
          transition={{ duration: 0.8, delay: idx * 0.3 }}
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
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AllTopSale;
