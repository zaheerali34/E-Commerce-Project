import React, { useRef } from "react";
import DataShop from "./DataShop.json";
import { motion, useInView } from "framer-motion";

function ShopPage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1, margin: "-50px 0px" });
  return (
    <div className="w-full h-full py-20 px-[5rem] max-md:px-[2rem]">
      <h1 className="text-[7vw] uppercase font-[fontFiver]">products</h1>
      <div className="flex items-start justify-center mt-10 max-sm:flex-col max-sm:gap-8">
        <nav className="w-1/6 max-sm:w-full">
          <ul className="flex flex-col gap-4">
            <li className="text-[1.1vw] text-zinc-900 font-bold max-sm:text-[4vw]">TEA TYPE</li>
            <li className="text-[1.1vw] text-zinc-900 font-bold max-sm:text-[4vw]">
              PREMIUM TEA
            </li>
            <li className="text-[1.1vw] text-zinc-900 font-bold max-sm:text-[4vw]">SETS</li>
            <li className="text-[1.1vw] text-zinc-900 font-bold max-sm:text-[4vw]">TOP SALES</li>
            <li className="text-[1.1vw] text-zinc-900 font-bold max-sm:text-[4vw]">
              NEW ARRIVALS
            </li>
            <li className="text-[1.1vw] text-zinc-900 font-bold max-sm:text-[4vw]">TEAWARE</li>
          </ul>
        </nav>

        <div className="contBox w-full flex items-center justify-center flex-wrap gap-10 ">
        {DataShop.Data.map((item, idx) => (
          <motion.div
            ref={sectionRef}
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.5 }}
            key={idx}
            className="w-[30%] max-lg:w-[70%] max-sm:w-full relative"
          >
            <div className="ImageBox flex items-center justify-center relative">
              <img src={item.img} alt="" className="w- rounded-[2rem]" />
              <button className="btn opacity-0 transition-all duration-[0.5s] w-[90%] py-8 bg-slate-900 font-bold uppercase text-white rounded-full absolute bottom-[1.5rem] ">
                Add To Cart
              </button>
            </div>
            <h2 className="uppercase font-[fontThree] text-[1.1rem] font-semibold py-3">
              {item.title}
            </h2>
            <p className="text-[0.9rem] text-gray-800">{item.description}</p>
            <h4 className="text-xl text-gray-400 py-2">{item.price}</h4>
          </motion.div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default ShopPage;
