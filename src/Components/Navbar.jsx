import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className="flex top-0 justify-between fixed items-center pt-8 pb-2 bg-[#ffffff] z-50 px-5 w-full">
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

      {/* <button className="hidden md:flex bg-[#192657] w-[176px] h-[50px] p-[10px] cursor-pointer text-white font-medium rounded-[15px]">
          Contact Us
        </button> */}
        <button className="bg-[#192657] text-white px-6 py-2 cursor-pointer rounded-2xl hidden md:flex transition">Contact Us</button>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-900">
          {menuOpen ? <X className="text-[#192657] w-6 h-6" /> : <Menu className="w-6 h-6 text-[#192657]" />}
        </button>

        {menuOpen && (
          <div className='absolute  top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 md:hidden transition-all'>
            <a href="#" className='text-[#192657]'>Home</a>
            <a href="#about" className='text-[#192657]'>About Us</a>
            <a href="#services" className='text-[#192657]'>Service Page</a>
            <a href="#programs" className='bg-[#192657] rounded-2xl px-2 py-1 text-white'>Programs & Events</a>
          </div>
        )}
    </div>
  );
};

export default Navbar;