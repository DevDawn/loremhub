import React from 'react';

const Navbar = () => {
  return (
    <div className="flex top-0 justify-between fixed items-center py-8 bg-[#ffffff] z-50 px-5 w-full">
      {/* Logo Section */}
      <a href="#">
      <div className="flex items-center">
        <img src="/logo.png" alt="Lorem Hub Logo" className="h-10" />
      </div>
      </a>
      
      <div className="hidden md:flex space-x-6 text-[#192657] font-medium">
        <a href="#">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Service Page</a>
        <a href="#programs">Programs & Events</a>
      </div>

      <button className="bg-[#192657] w-[176px] h-[50px] p-[10px] cursor-pointer text-white font-medium rounded-[15px]">
          Contact Us
        </button>
    </div>
  );
};

export default Navbar;