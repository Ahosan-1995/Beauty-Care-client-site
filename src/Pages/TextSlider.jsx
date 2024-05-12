import React from "react";
import Marquee from "react-fast-marquee";

const TextSlider = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/vhKJ3pc/bg-text-slider.jpg')]  rounded-2xl text-white font-bold text-3xl h-36 bg-cover mb-10 w-full">
      <div className="flex flex-row ">
        <button className="bg-[#cb8d5c] h-full w-1/2"></button>
        
        <div className="mx-auto"><Marquee>
       <p className="mt-12">Transform Your Look with Our Highlighting Services!
        Achieve the Perfect Balance of Color and Shine.
        Experience Expertly Crafted Highlights for Your Hair.
        Illuminate Your Style and Embrace Your Unique Glow.
        Discover the Art of Highlighting with Us Today!</p>
      </Marquee></div>



      </div>
    </div>
  );
};

export default TextSlider;
