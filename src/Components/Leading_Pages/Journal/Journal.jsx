import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Journal() {
  const JournalRef = useRef(null);
  const JournalRef2 = useRef(null);
  const JournalInView = useInView(JournalRef, {
    once: true,
    amount: 0.1,
    margin: "-30px 0px",
  });
  const JournalInView2 = useInView(JournalRef2, {
    once: true,
    amount: 0.1,
    margin: "-50px 0px",
  });

  return (
    <div className="w-full h-screen max-sm:h-full flex items-start justify-center flex-col px-[10rem] max-md:px-[5rem] max-sm:px-[2rem]">
      <div className="overflow-hidden py-4">
        <motion.h1
          ref={JournalRef}
          initial={{ y: 80, opacity: 0 }}
          animate={JournalInView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="text-[4vw] uppercase font-semibold py-[5rem] max-sm:text-[2rem]"
        >
          <motion.span
            initial={{ y: 80 }}
            animate={JournalInView ? { y: 0 } : { y: 80 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="inline-block"
          >
            Journal
          </motion.span>
        </motion.h1>
      </div>

      <div className="w-full flex items-center flex-col gap-20">
        <motion.div
          ref={JournalRef}
          initial={{ y: 50, opacity: 0 }}
          animate={JournalInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0 }}
          className="w-full flex items-center max-sm:flex-col max-sm:gap-1 max-sm:items-start gap-20 font-[fontFour] border-b-2 py-3 border-gray-200"
        >
          <h3>Jun 8, 2023</h3>
          <p>What is matcha?</p>
        </motion.div>

        <motion.div
          ref={JournalRef}
          initial={{ y: 50, opacity: 0 }}
          animate={JournalInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          className="w-full flex items-center max-sm:flex-col max-sm:gap-1 max-sm:items-start gap-20 font-[fontFour] border-b-2 py-3 border-gray-200"
        >
          <h3>May 4, 2023</h3>
          <p>How to make tea on fire, lazy cooking</p>
        </motion.div>

        <motion.div
          ref={JournalRef}
          initial={{ y: 50, opacity: 0 }}
          animate={JournalInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
          className="w-full flex items-center max-sm:flex-col max-sm:gap-1 max-sm:items-start gap-20 font-[fontFour] border-b-2 py-3 border-gray-200"
        >
          <h3>Jun 8, 2023</h3>
          <p>What is matcha?</p>
        </motion.div>
        
        <motion.div
          ref={JournalRef}
          initial={{ y: 50, opacity: 0 }}
          animate={JournalInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
          className="w-full flex items-center max-sm:flex-col max-sm:gap-1 max-sm:items-start gap-20 font-[fontFour] border-b-2 py-3 border-gray-200"
        >
          <h3>Mar 6, 2023</h3>
          <p>
            Chaban (Tea Tray), hucheng, chachuan, and other variants of tea
            trays
          </p>
        </motion.div>
        
        <motion.div
          ref={JournalRef}
          initial={{ y: 50, opacity: 0 }}
          animate={JournalInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.8 }}
          className="w-full flex items-center max-sm:flex-col max-sm:gap-1 max-sm:items-start gap-20 font-[fontFour] border-b-2 py-3 border-gray-200"
        >
          <h3>Jan 16, 2023</h3>
          <p>How to brew Shu (ripe) Pu-erh tea correctly</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Journal;
