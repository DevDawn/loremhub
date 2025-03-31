import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="flex justify-between items-center px-5 py-4 md:px-10">
        <a href="#">
          <img src="/logo.png" alt="Lorem Hub Logo" className="h-10 w-auto" />
        </a>

        <div className="hidden md:flex gap-8 text-[#192657] font-medium">
          <a href="#" className="hover:text-gray-600">Home</a>
          <a href="#about" className="hover:text-gray-600">About Us</a>
          <a href="#services" className="hover:text-gray-600">Service Page</a>
          <a href="#programs" className="hover:text-gray-600">Programs & Events</a>
        </div>

        <button className="hidden md:flex bg-[#192657] text-white px-6 py-2 rounded-lg hover:bg-[#1a2a5c]">
          Contact Us
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-900 focus:outline-none"
        >
          {menuOpen ? <X className="w-6 h-6 text-[#192657]" /> : <Menu className="w-6 h-6 text-[#192657]" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white  flex flex-col items-center py-4 space-y-4">
          <a href="#" className="text-[#192657] hover:text-gray-600">Home</a>
          <a href="#about" className="text-[#192657] hover:text-gray-600">About Us</a>
          <a href="#services" className="text-[#192657] hover:text-gray-600">Service Page</a>
          <a href="#programs" className="bg-[#192657] text-white px-4 py-2 rounded-lg hover:bg-[#1a2a5c]">
            Programs & Events
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;