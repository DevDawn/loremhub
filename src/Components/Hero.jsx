import React from "react";

const Hero = () => {
  return (
    <div className="bg-white text-center mt-20 py-7 px-6 ">
      {/* Hero Heading */}
      <h1 className="text-[#192657] font-bold text-2xl sm:text-4xl leading-tight max-w-3xl mx-auto">
        Fueling Innovation, Empowering Visionaries
      </h1>

      {/* Hero Subheading */}
      <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto mt-4">
        From idea to impact—unlock the tools, training, and network to turn your tech dreams into reality.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
        <button className="bg-[#192657] cursor-pointer text-white px-6 py-3 text-lg rounded-lg shadow-md transition-all ">
          Register
        </button>
        <button className="border border-[#192657] text-[#192657] px-6 py-3 text-lg rounded-lg shadow-md transition-all duration-200  cursor-pointer hover:bg-gray-50">
          Learn More
        </button>
      </div>

      {/* Hero Image */}
      <div className="mt-12">
        <img
          src="/hero.png"
          alt="Hero"
          className="mx-auto max-w-full sm:max-w-[70%] rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
