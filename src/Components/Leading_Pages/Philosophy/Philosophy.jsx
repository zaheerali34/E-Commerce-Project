import React from "react";

function Philosophy() {
  return (
    <div className="w-full h-screen bg-[url(/Philosophy.jpeg)] bg-center bg-cover bg-no-repeat flex items-center justify-between max-lg:justify-center px-20 max-lg:flex-col max-md:px-4">
      <h2 className="text-[7vw] uppercase mb-[16rem] max-lg:mb-[6rem] text-white max-md:text-[10vw]">philosophy</h2>

      <div className="w-1/3 max-xl:w-[80%] max-md:w-full py-20 px-12 bg-[#072a2f] rounded-[50px]">
        <p className="text-gray-300">
          Let’s make the world cleaner together. At Tea Flow, we believe it's
          our responsibility to make the world cleaner and healthier for
          everyone. That's why we're proud to introduce our newest initiative -
          every time you buy our premium tea, you help clean the ocean of
          plastic!
        </p>

        <h3 className="pt-10 text-gray-300 cursor-pointer">About</h3>
      </div>
    </div>
  );
}

export default Philosophy;
