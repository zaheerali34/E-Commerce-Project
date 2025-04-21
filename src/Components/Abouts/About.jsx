import React, { useRef } from "react";
import Journal from "../Leading_Pages/Journal/Journal";
import Get from "../Leading_Pages/Get/Get";
import { motion, useInView } from "framer-motion";

function About() {
  const sectionRef = useRef(null);
  const section = useRef(null);
  const sectionThree = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1, margin: "-50px 0px" });
  const isInView2 = useInView(section, { once: true, amount: 0.1, margin: "-50px 0px" });
  const isInView3 = useInView(sectionThree, { once: true, amount: 0.1, margin: "-50px 0px" });
  return (
    <div className="w-full h-full">
      <motion.h1 
        ref={sectionRef}
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      className="text-[14vw] uppercase font-[fontFiver] px-[5rem] py-[10rem] max-md:py-[5rem] max-lg:px-[2rem] text-zinc-900">
        about us
      </motion.h1>

      <div className="w-full h-full bg-zinc-900 p-20 max-lg:p-10 max-sm:p-5">
        <div className="flex items-center justify-between max-sm:flex-col">
          <img
            src="/about.jpg"
            alt=""
            className="w-[60vw] h-screen max-lg:w-[50vw] max-lg:h-[80vh] max-md:h-[60vh] max-lg:rounded-[2rem] object-cover rounded-[4rem] relative bottom-[10rem] max-md:bottom-[5rem] max-sm:bottom-[3rem] max-sm:w-full"
          />
          <div className="text-white flex flex-col gap-10 pl-20 max-lg:pl-8 max-sm:pl-4">
            <motion.p 
              ref={section}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView2 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            className="leading-7 max-lg:text-[0.8rem] max-lg:leading-5 max-md:text-[0.7rem] max-md:leading-4">
              At Tea Flow, we're committed to bringing you the highest quality
              teas while also staying true to our values of sustainability,
              fairness, and transparency. We carefully source our teas from
              organic and fair trade farms around the world, ensuring that every
              cup you enjoy supports healthy, vibrant communities.
            </motion.p>
            <motion.p 
              ref={section}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView2 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
            className="text-[1.8vw] uppercase max-lg:text-[1.5vw] max-sm:text-[2vw]">
              tea is more than just a beverage - it's an experience that
              connects us to ourselves, each other, and the world around us.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="w-full h-screen max-sm:h-full flex items-end gap-14 max-md:gap-6 px-[10rem] py-20 max-lg:px-[5rem] max-md:px-[2rem] max-sm:px-[1rem] max-sm:flex-col max-sm:items-center">
        <img src="/about two.jpg" alt="" className="w-[40%] max-lg:h-[60%] max-sm:h-[40%] object-cover max-sm:w-full max-sm:rounded-3xl" />
        <div className="w-2/4 flex flex-col gap-8 text-zinc-900 max-lg:gap-4 max-sm:gap-4 max-sm:w-full ">
          <motion.h1 
            ref={sectionThree}
            initial={{ y: 50, opacity: 0 }}
            animate={isInView3 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-xl uppercase font-semibold text-zinc-700 max-lg:text-[0.9rem]">
            Another mission of our brand is to make the world a cleaner place!
          </motion.h1>
          <motion.p 
            ref={sectionThree}
            initial={{ y: 50, opacity: 0 }}
            animate={isInView3 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
            className="max-lg:text-[0.8rem] max-sm:text-[1rem]">
            At Tea Flow, we believe it's our responsibility to make the world
            cleaner and healthier for everyone. That's why we're proud to
            introduce our newest initiative - every time you buy our premium
            tea, you help clean the ocean of plastic!
          </motion.p>
          <motion.p 
            ref={sectionThree}
            initial={{ y: 50, opacity: 0 }}
            animate={isInView3 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
            className="max-lg:text-[0.8rem] max-sm:text-[1rem]">
            We know that plastic pollution is a huge problem in our oceans, so
            we've partnered with 4ocean - a company dedicated to cleaning up our
            oceans and beaches. For every purchase you make, we invest a
            percentage of our profits into 4ocean's incredible efforts to remove
            plastic waste from our oceans.
          </motion.p>
          <motion.p 
            ref={sectionThree}
            initial={{ y: 50, opacity: 0 }}
            animate={isInView3 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
            className="max-lg:text-[0.8rem] max-sm:text-[1rem]">
            So not only will you enjoy our delicious teas, but you'll also be
            making a tangible difference in the fight against plastic pollution.
            With your help, we can create a cleaner, healthier world for
            generations to come. Join us on this mission to make a positive
            impact - one cup of tea at a time!
          </motion.p>
          <motion.button 
            ref={sectionThree}
            initial={{ y: 50, opacity: 0 }}
            animate={isInView3 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.8 }}
            className="text-start uppercase font-[fontThree] text-sm text-gray-700 max-md:my-2 my-7">watch catalog<i className="ri-arrow-right-long-fill py-2 px-8 rounded-[50px] border-2 border-gray-500 text-xl ml-4 hover:ml-8 transition-all duration-[0.4s]"></i></motion.button>
        </div>
      </div>
      <Journal />
      <Get />
    </div>
  );
}

export default About;
