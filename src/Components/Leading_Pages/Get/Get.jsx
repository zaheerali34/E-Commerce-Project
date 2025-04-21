import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Get() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1,
    margin: "-50px 0px",
  });
  return (
    <div className="w-full h-screen max-sm:h-full max-sm:mt-[2rem] flex items-center justify-center">
      <div className="w-full h-[75vh] max-md:h-[50vh] max-md:rounded-[5rem] bg-[#F7F7F7] flex items-center justify-between py-10 px-[10rem] rounded-[10rem] max-lg:px-[5rem] max-sm:flex-col max-sm:h-[50vh] max-sm:rounded-[2rem] max-sm:px-8">
        <div className="w-2/4 max-sm:w-full">
          <div className="overflow-hidden py-4">
            <motion.h1
              ref={sectionRef}
              initial={{ y: 80, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[4vw] max-md:text-[7vw]"
            >
              <motion.span
                initial={{ y: 80 }}
                animate={isInView ? { y: 0 } : { y: 80 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="inline-block"
              >
                GET 20% OFF
              </motion.span>
            </motion.h1>
          </div>

          <div className="overflow-hidden py-0">
            <motion.p
              ref={sectionRef}
              initial={{ y: 80, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-2/3 py-8 text-black text-[1.2vw] max-sm:text-[3vw] max-sm:w-full"
            >
              <motion.span
                initial={{ y: 80 }}
                animate={isInView ? { y: 0 } : { y: 80 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="inline-block"
              >
                Your first order + future sales updates. You can safely
                unsubscribe anytime from any email footer. Here is our privacy
                policy
              </motion.span>
            </motion.p>
          </div>
        </div>

        <div className="overflow-hidden py-2">
          <motion.div
            ref={sectionRef}
            initial={{ y: 80, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-sm:w-full border-b-2 border-gray-300 bg-[#f7f7f7] flex items-center"
          >
            <motion.div
              initial={{ y: 80 }}
              animate={isInView ? { y: 0 } : { y: 80 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="flex"
            >
              <input
                type="text"
                placeholder="enter your Email"
                className="w-full bg-transparent outline-none "
              />
              <button className="uppercase font-[fontThree] text-sm text-gray-700 max-md:my-2 my-7">
                <i className="ri-arrow-right-long-fill py-2 px-8 rounded-[50px] border-2 border-gray-500 text-xl ml-4 hover:ml-8 transition-all duration-[0.4s]"></i>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Get;
