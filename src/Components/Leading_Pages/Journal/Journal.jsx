import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function Journal() {

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1, margin: "-50px 0px" });

    return (
        <div className='w-full h-screen max-sm:h-full flex items-start justify-center flex-col px-[10rem] max-md:px-[5rem] max-sm:px-[2rem]'>
            <motion.h1
                ref={sectionRef}
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}

                className='text-[4vw] uppercase font-semibold py-[5rem] max-sm:text-[2rem]'>Journal</motion.h1>

            <div className='w-full flex items-center flex-col gap-20'>
                <motion.div 
                    ref={sectionRef}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
                    className='w-full flex items-center max-sm:flex-col max-sm:gap-1 max-sm:items-start gap-20 font-[fontFour] border-b-2 py-3 border-gray-200'>
                    <h3>Jun 8, 2023</h3>
                    <p>What is matcha?</p>
                </motion.div>
                <motion.div 
                    ref={sectionRef}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
                    className='w-full flex items-center max-sm:flex-col max-sm:gap-1 max-sm:items-start gap-20 font-[fontFour] border-b-2 py-3 border-gray-200'>
                    <h3>May 4, 2023</h3>
                    <p>How to make tea on fire, lazy cooking</p>
                </motion.div>
                <motion.div 
                    ref={sectionRef}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.9 }}
                    className='w-full flex items-center max-sm:flex-col max-sm:gap-1 max-sm:items-start gap-20 font-[fontFour] border-b-2 py-3 border-gray-200'>
                    <h3>Jun 8, 2023</h3>
                    <p>What is matcha?</p>
                </motion.div>
                <motion.div 
                    ref={sectionRef}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 1.2 }}
                    className='w-full flex items-center max-sm:flex-col max-sm:gap-1 max-sm:items-start gap-20 font-[fontFour] border-b-2 py-3 border-gray-200'>
                    <h3>Mar 6, 2023</h3>
                    <p>Chaban (Tea Tray), hucheng, chachuan, and other variants of tea trays</p>
                </motion.div>
                <motion.div 
                    ref={sectionRef}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 1.5 }}
                    className='w-full flex items-center max-sm:flex-col max-sm:gap-1 max-sm:items-start gap-20 font-[fontFour] border-b-2 py-3 border-gray-200'>
                    <h3>Jan 16, 2023</h3>
                    <p>How to brew Shu (ripe) Pu-erh tea correctly</p>
                </motion.div>
            </div>
        </div>
    )
}

export default Journal