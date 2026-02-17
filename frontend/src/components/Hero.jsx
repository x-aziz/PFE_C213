import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400 overflow-hidden">
      {/* LEFT: Text Content */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-16 sm:py-0 px-10 sm:px-16">
        <div className="text-[#414141]">
          {/* OUR BESTSELLERS */}
          <div className="flex items-center gap-2 mb-3">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base tracking-widest">
              OUR BESTSELLERS
            </p>
          </div>

          {/* Latest Arrivals */}
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>
          {/* SHOP NOW */}
          <div className="flex items-center gap-2 mt-3">
            <p className="font-semibold text-sm md:text-base tracking-widest">
              SHOP NOW
            </p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* RIGHT: Image — takes up exactly half the width */}
      <div className="w-full sm:w-1/2">
        <img
          src="https://img.ltwebstatic.com/images3_spmp/2024/09/07/69/17256444207555701262d125f05bad70fbde835403_thumbnail_900x.jpg"
          className="w-full h-full object-cover"
          alt="Latest Arrivals"
        />
      </div>
    </div>
  );
};

export default Hero;