import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
//import Meun from "./Meun";

function Header() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
    document.body.classList.toggle("show-menu");
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}

        className="w-full py-4 px-[8rem] max-xl:px-[5rem] max-md:px-[3.5rem] max-sm:px-[1rem]">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-start gap-4 relative z-30">
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

            <div className="ml-[10rem] relative z-30 flex items-center">
              <i className="ri-shopping-bag-line text-2xl text-gray-600">
                <span className="text-[20px] pl-1">3</span>
              </i>
              <i className="ri-menu-line text-2xl text-gray-600 ml-6 relative z-30" onClick={handleMenu}></i>
            </div>
          </nav>
        </div>
      </motion.header>

      {
        menu &&
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className="w-full h-screen bg-white absolute top-0 left-0 right-0 z-20 flex items-center justify-center "
        >
          <nav className="w-full h-full flex flex-col items-center justify-center">
            <ul className="flex flex-col items-start gap-5 cursor-pointer">
              <li className="overflow-hidden py-2 uppercase font-[fontThree]">
                <motion.div
                  initial={{ y: 80 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Link to="/" className="text-gray-900 text-4xl font-[fontThree] text-[5vw] max-[400px]:text-[16vw]" onClick={handleMenu}>Home</Link>
                </motion.div>
              </li>
              <li className="overflow-hidden py-2 uppercase ">
                <motion.div
                  initial={{ y: 80 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link to="/shop" className="text-gray-900 text-4xl font-[fontThree] text-[5vw] max-[400px]:text-[16vw]" onClick={handleMenu}>Shop</Link>
                </motion.div>
              </li>
              <li className="overflow-hidden py-2 uppercase ">
                <motion.div
                  initial={{ y: 80 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Link to="/about" className="text-gray-900 text-4xl font-[fontThree] text-[5vw] max-[400px]:text-[16vw]" onClick={handleMenu}>About us</Link>
                </motion.div>
              </li>
            </ul>
          </nav>
        </motion.div>
      }
    </>
  );
}

export default Header;
