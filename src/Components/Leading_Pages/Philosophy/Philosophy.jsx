import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Philosophy() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1,
    margin: "-50px 0px",
  });
  return (
    <div className="w-full h-screen bg-[url(/Philosophy.jpeg)] bg-center bg-cover bg-no-repeat flex items-center justify-between max-lg:justify-center px-20 max-lg:flex-col max-md:px-4">
      <div className="overflow-hidden py-4">
        <motion.h1
          ref={sectionRef}
          initial={{ y: 80, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[7vw] uppercase mb-[16rem] max-lg:mb-[6rem] text-white max-md:text-[10vw]"
        >
          <motion.span
            initial={{ y: 80 }}
            animate={isInView ? { y: 0 } : { y: 80 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="inline-block"
          >
            philosophy
          </motion.span>
        </motion.h1>
      </div>
      <div className="w-1/3 max-xl:w-[80%] max-md:w-full py-20 px-12 bg-[#072a2f] rounded-[50px]">
        <div className="overflow-hidden py-4">
          <motion.p
            ref={sectionRef}
            initial={{ y: 80, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300"
          >
            <motion.span
              initial={{ y: 80 }}
              animate={isInView ? { y: 0 } : { y: 80 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="inline-block"
            >
              Let’s make the world cleaner together. At Tea Flow, we believe
              it's our responsibility to make the world cleaner and healthier
              for everyone. That's why we're proud to introduce our newest
              initiative - every time you buy our premium tea, you help clean
              the ocean of plastic!
            </motion.span>
          </motion.p>
        </div>

        <motion.h3
          ref={sectionRef}
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="pt-10 text-gray-300 cursor-pointer"
        >
          About
        </motion.h3>
      </div>
    </div>
  );
}

export default Philosophy;
