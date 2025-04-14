import React from "react";
import DataShop from "./DataShop.json";

function ShopPage() {
  return (
    <div className="w-full h-full py-20 px-[5rem]">
      <h1 className="text-[7vw] uppercase font-[fontFiver]">products</h1>
      <div className="flex items-start justify-center mt-10">
        <nav className="w-1/6">
          <ul className="flex flex-col gap-4">
            <li className="text-[1.1vw] text-zinc-900 font-bold">TEA TYPE</li>
            <li className="text-[1.1vw] text-zinc-900 font-bold">
              PREMIUM TEA
            </li>
            <li className="text-[1.1vw] text-zinc-900 font-bold">SETS</li>
            <li className="text-[1.1vw] text-zinc-900 font-bold">TOP SALES</li>
            <li className="text-[1.1vw] text-zinc-900 font-bold">
              NEW ARRIVALS
            </li>
            <li className="text-[1.1vw] text-zinc-900 font-bold">TEAWARE</li>
          </ul>
        </nav>

        <div className="contBox w-full flex items-center justify-center flex-wrap gap-10 ">
        {DataShop.Data.map((item, idx) => (
          <div
            key={idx}
            className="w-[30%] max-lg:w-[70%] max-sm:w-full relative"
          >
            <div className="ImageBox flex items-center justify-center">
              <img src={item.img} alt="" className="w- rounded-[2rem]" />
              <button className="btn opacity-0 transition-all duration-[0.5s] w-[90%] py-8 bg-slate-900 font-bold uppercase text-white rounded-full absolute bottom-[6rem]">
                Add To Cart
              </button>
            </div>
            <h2 className="uppercase font-[fontThree] text-[1.1rem] font-semibold py-3">
              {item.title}
            </h2>
            <p className="text-[0.9rem] text-gray-800">{item.description}</p>
            <h4 className="text-xl text-gray-400 py-2">{item.price}</h4>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default ShopPage;
