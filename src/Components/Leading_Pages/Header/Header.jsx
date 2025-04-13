import React, { useRef, useState } from "react";
import Cards from "../Home/Cards";

function Header() {
  const [card, SetCard] = useState('');
  const ref = useRef();

  const headler = ()=> {

  }

  return (
    <>
      <div className="w-full py-4 px-[8rem] max-xl:px-[5rem] max-md:px-[3.5rem] max-sm:px-[1rem]">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-start gap-4">
            <span className="w-[25px] h-[25px] bg-black rounded-[8px]"></span>
            <h5 className="uppercase">Shops</h5>
          </div>

          <nav className="flex items-center gap-4">
            <ul className="flex items-center gap-12 cursor-pointer max-md:hidden">
              <li className="text-gray-900 text-sm">Home</li>
              <li className="text-gray-900 text-sm">Shop</li>
              <li className="text-gray-900 text-sm">About us</li>
              <li className="text-gray-900 text-sm">Contacts</li>
            </ul>

            <div className="ml-[10rem]">
              <i onClick={headler} className="ri-shopping-bag-line text-2xl text-gray-600">
                <span className="text-[20px] pl-1">3</span>
              </i>
              <i className="ri-menu-line text-2xl text-gray-600 ml-6"></i>
            </div>
          </nav>
        </div>
      </div>

      { card ? <Cards /> : '' }
    </>
  );
}

export default Header;
