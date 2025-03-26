import React from 'react';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white w-full">
      {/* Logo Section */}
      <a href="#">
      <div className="flex items-center">
        <img src="/logo.png" alt="Lorem Hub Logo" className="h-10" />
      </div>
      </a>
      
      <div className="hidden md:flex space-x-6 text-[#192657] font-medium">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Service Page</a>
        <a href="#">Programs & Events</a>
      </div>

      <button className="bg-[#192657] px-6 py-3 cursor-pointer text-white font-medium rounded-md">
          Contact Us
        </button>
    </div>
  );
};

export default Navbar;