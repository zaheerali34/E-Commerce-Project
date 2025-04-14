import React from "react";
import Journal from "../Leading_Pages/Journal/Journal";
import Get from "../Leading_Pages/Get/Get";

function About() {
  return (
    <div className="w-full h-full">
      <h1 className="text-[14vw] uppercase font-[fontFiver] px-[5rem] py-[10rem] text-zinc-900">
        about us
      </h1>

      <div className="w-full h-full bg-zinc-900 p-20">
        <div className="flex items-center justify-between">
          <img
            src="/about.jpg"
            alt=""
            className="w-[60%] h-screen object-cover rounded-[4rem] relative bottom-[12rem]"
          />
          <div className="text-white flex flex-col gap-10 pl-20">
            <p className="leading-7">
              At Tea Flow, we're committed to bringing you the highest quality
              teas while also staying true to our values of sustainability,
              fairness, and transparency. We carefully source our teas from
              organic and fair trade farms around the world, ensuring that every
              cup you enjoy supports healthy, vibrant communities.
            </p>
            <p className="text-[1.8vw] uppercase">
              tea is more than just a beverage - it's an experience that
              connects us to ourselves, each other, and the world around us.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-screen flex items-end gap-14 px-[10rem] py-20">
        <img src="/about two.jpg" alt="" className="w-[40%] object-cover" />
        <div className="w-2/4 flex flex-col gap-8 text-zinc-900">
          <h1 className="text-xl uppercase font-semibold text-zinc-700">
            Another mission of our brand is to make the world a cleaner place!
          </h1>
          <p>
            At Tea Flow, we believe it's our responsibility to make the world
            cleaner and healthier for everyone. That's why we're proud to
            introduce our newest initiative - every time you buy our premium
            tea, you help clean the ocean of plastic!
          </p>
          <p>
            We know that plastic pollution is a huge problem in our oceans, so
            we've partnered with 4ocean - a company dedicated to cleaning up our
            oceans and beaches. For every purchase you make, we invest a
            percentage of our profits into 4ocean's incredible efforts to remove
            plastic waste from our oceans.
          </p>
          <p>
            So not only will you enjoy our delicious teas, but you'll also be
            making a tangible difference in the fight against plastic pollution.
            With your help, we can create a cleaner, healthier world for
            generations to come. Join us on this mission to make a positive
            impact - one cup of tea at a time!
          </p>
          <button className="text-start uppercase font-[fontThree] text-sm text-gray-700 max-md:my-2 my-7">watch catalog<i className="ri-arrow-right-long-fill py-2 px-8 rounded-[50px] border-2 border-gray-500 text-xl ml-4 hover:ml-8 transition-all duration-[0.4s]"></i></button>
        </div>
      </div>
      <Journal />
      <Get />
    </div>
  );
}

export default About;
