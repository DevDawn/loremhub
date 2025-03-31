import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0A1E4C] text-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <img src="/logoo.png" alt="Logo" className="w-28 sm:w-36 mb-3" />
            <p className="text-sm text-gray-300">
              Fueling Innovation, Empowering Visionaries
            </p>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-3">About Us</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li><a href="#vision">Our Vision</a></li>
              <li><a href="#mission">Our Mission</a></li>
              <li><a href="#team">Meet our team</a></li>
              <li><a href="#history">History</a></li>
            </ul>
            <div className="mt-5">
              <h3 className="text-sm font-extrabold mb-3">Connect With Us</h3>
              <div className="flex gap-3">
                <a href="#">
                  <img src="/instagram.png" alt="Instagram" className="w-6 h-6" />
                </a>
                <a href="#">
                  <img src="/facebook.png" alt="Facebook" className="w-6 h-6" />
                </a>
                <a href="#">
                  <img src="/x.png" alt="Twitter" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* More Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">More Info</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li><a href="#services">Services</a></li>
              <li><a href="#programs">Programs and Events</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Subscribe to our Newsletter
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Subscribe to Loremipsum to get updates
            </p>
            <div className="flex flex-col sm:flex-row items-center max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-white text-white outline-none bg-transparent placeholder-gray-500 mb-3 sm:mb-0 sm:mr-2"
              />
              <button className="bg-white text-[#0A1E4C] font-semibold px-5 py-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-10">
          <hr className="border-gray-500" />
          <p className="text-center text-gray-400 text-sm mt-4">
            Logoisum &copy; {new Date().getFullYear()}, All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
