import React from "react";

const Hero = () => {
  return (
    <div className="text-center py-20 bg-white">
      {/* Hero Heading */}
      <h1 className="text-[#192657] text-3xl font-[900]">
        Fueling Innovation, Empowering Visionaries
      </h1>

      {/* Hero Subheading */}
      <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
        From idea to impact—unlock the tools, training, and network to turn your tech dreams into reality.
      </p>

      {/* Buttons */}
      <div className="flex items-center justify-center space-x-4 mt-8">
        <button className="bg-[#192657] px-6 py-3 text-white font-medium cursor-pointer rounded-md shadow-md ">
          Register
        </button>
        <button className="border border-[#192657] cursor-pointer px-6 py-3 text-[#192657] font-medium rounded-md hover:bg-gray-200 transition duration-300">
          Learn More
        </button>
      </div>

      {/* Hero Image */}
      <div className="mt-12">
        <img
          src="/hero.png"
          alt="Hero Image"
          className="mx-auto w-[70%] rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Hero;