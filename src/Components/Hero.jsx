import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-8">
      {/* Hero Heading */}
      <h1 className="text-[#192657] mt-[50px] sm:mt-[99px] font-[700] text-[28px] sm:text-[40px] leading-[120%] font-['Poppins'] text-center">
        Fueling Innovation, Empowering Visionaries
      </h1>

      {/* Hero Subheading */}
      <p className="mt-[16px] sm:mt-[21px] w-full sm:w-[899px] text-[16px] sm:text-[18px] text-center font-[500]">
        From idea to impact—unlock the tools, training, and network to turn your tech dreams into reality. Let me know if you’d like any tweaks!
      </p>

      {/* Buttons */}
      <div className="mt-[20px] sm:mt-[30px] flex flex-col sm:flex-row gap-[16px] sm:gap-[26px]">
        <button className="bg-[#192657] w-full sm:w-[205px] rounded-[15px] h-[50px] text-white cursor-pointer">
          Register
        </button>
        <button className="w-full sm:w-[205px] h-[50px] rounded-[15px] border border-[#192657] text-[#192657] cursor-pointer">
          Learn More
        </button>
      </div>

      {/* Hero Image */}
      <div className="mt-[30px] sm:mt-[45px]">
        <img
          src="/hero.png"
          alt="Hero"
          className="w-full sm:w-[904px] h-auto sm:h-[427px] rounded-[20px]"
        />
      </div>
    </div>
  );
};

export default Hero;
