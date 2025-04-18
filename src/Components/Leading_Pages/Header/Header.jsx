import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react"

function Header() {

  return (
    <>
      <motion.header 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 0.8 }}
      
      className="w-full py-4 px-[8rem] max-xl:px-[5rem] max-md:px-[3.5rem] max-sm:px-[1rem]">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-start gap-4">
            <Link to="/">
              <span className="w-[25px] h-[25px] bg-black rounded-[8px]"></span>
              <h5 className="uppercase font-semibold">Shops</h5>
            </Link>
          </div>

          <nav className="flex items-center gap-4">
            <ul className="flex items-center gap-12 cursor-pointer max-md:hidden">
              <li><Link to="/" className="text-gray-900 text-sm">Home</Link></li>
              <li><Link to="/shop" className="text-gray-900 text-sm">Shop</Link></li>
              <li><Link to="/about" className="text-gray-900 text-sm">About us</Link></li>
            </ul>

            <div className="ml-[10rem]">
              <i className="ri-shopping-bag-line text-2xl text-gray-600">
                <span className="text-[20px] pl-1">3</span>
              </i>
              <i className="ri-menu-line text-2xl text-gray-600 ml-6"></i>
            </div>
          </nav>
        </div>
      </motion.header>
    </>
  );
}

export default Header;
