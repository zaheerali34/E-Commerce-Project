import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'


function Footer() {
    const sectionRef = useRef(null);
    const sectionRef2 = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1, margin: "-50px 0px" });
    const isInView2 = useInView(sectionRef2, { once: true, amount: 0.1, margin: "-50px 0px" });
  return (
    <div className='w-full h-full'>
        <nav className='flex flex-row justify-between items-start p-[10rem] max-xl:p-[5rem] max-md:p-[2rem] max-md:flex-wrap max-md:gap-10'>
            <motion.ul 
                ref={sectionRef}
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            className='flex flex-col items-start gap-4'>
                <h2 className=' uppercase font-bold text-[1.5rem]'>Shop</h2>
                <li className='text-[0.9rem] text-gray-800'>About Us</li>
                <li className='text-[0.9rem] text-gray-800'>Contact Us</li>
                <li className='text-[0.9rem] text-gray-800'>Privacy Policy</li>
                <li className='text-[0.9rem] text-gray-800'>Terms of Service</li>
                <li className='text-[0.9rem] text-gray-800'>FAQ</li>
            </motion.ul>
            <motion.ul 
                ref={sectionRef}
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
            className='flex flex-col items-start gap-4'>
                <h2 className=' uppercase font-bold text-[1.5rem]'>help</h2>
                <li className='text-[0.9rem] text-gray-800'>About Us</li>
                <li className='text-[0.9rem] text-gray-800'>Contact Us</li>
                <li className='text-[0.9rem] text-gray-800'>Privacy Policy</li>
                <li className='text-[0.9rem] text-gray-800'>Terms of Service</li>
                <li className='text-[0.9rem] text-gray-800'>FAQ</li>
            </motion.ul>
            <motion.ul 
                ref={sectionRef}
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.8 }}
            className='flex flex-col items-start gap-4'>
                <h2 className=' uppercase font-bold text-[1.5rem]'>About us</h2>
                <li className='text-[0.9rem] text-gray-800'>About Us</li>
                <li className='text-[0.9rem] text-gray-800'>Contact Us</li>
                <li className='text-[0.9rem] text-gray-800'>Privacy Policy</li>
                <li className='text-[0.9rem] text-gray-800'>Terms of Service</li>
                <li className='text-[0.9rem] text-gray-800'>FAQ</li>
            </motion.ul>

            <motion.ul 
                ref={sectionRef}
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 1.2 }}
            className='flex items-start gap-8'>
                <i class="ri-twitter-x-line text-2xl"></i>
                <i class="ri-youtube-fill text-2xl"></i>
            </motion.ul>
        </nav>

        <motion.div 
            ref={sectionRef2}
            initial={{ y: 30, opacity: 0 }}
            animate={isInView2 ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 1.5 }}
        
        className='w-full flex items-center justify-between px-[10rem] max-md:px-[2rem] py-8 max-sm:flex-wrap max-sm:gap-5'>
        <div className="flex items-start gap-4">
            <span className="w-[25px] h-[25px] bg-black rounded-[8px]"></span>
            <h5 className="uppercase">Shops</h5>
          </div>
            <p className='text-[0.8rem] text-gray-800'>© 2023 All rights reserved | This template is made with by <span className='font-bold'>Colorlib</span></p>
            <p className='text-[0.8rem] text-gray-800 '>design and development by</p>
        </motion.div>
    </div>
  )
}

export default Footer