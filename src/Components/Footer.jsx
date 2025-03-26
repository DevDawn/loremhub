import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0A1E4C] text-white py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <img src="/logoo.png" alt="Logo" className="w-36 mb-3" />
            <p className="text-sm text-gray-300">
              Fueling Innovation, Empowering Visionaries
            </p>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-3">About Us</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li><a href="#vision">Our Vision </a></li>
              <li><a href="#mission">Our Mission </a></li>
              <li> <a href="#team">Meet our team</a></li>
              <li> <a href="#history">History</a></li>
            </ul>
            <div className="flex flex-col mt-5 mb-5 space-x-4">
                <h3 className="text-sm font-extrabold mb-3">Connect With us</h3>
            <div className="flex gap-3">
            <a href="#">
              <img src="/instagram.png" alt="Instagram" />
            </a>
            <a href="#">
              <img src="/facebook.png" alt="Facebook" />
            </a>
            <a href="#">
              <img src="/x.png" alt="Twitter" />
            </a>
            </div>
          </div>
          </div>

          {/* More Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">More Info</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li><a href="#services">Services</a></li>
              <li> <a href="#programs">Programs and Events</a></li>
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
            <div className="flex items-center shadow-md max-w-md">
  <input
    type="email"
    placeholder="Enter your email"
    className="flex-1 px-4 py-2 border border-white text-white outline-none bg-none placeholder-gray-500"
  />
  <button className="bg-white text-[#0A1E4C] font-semibold px-5 cursor-pointer py-2">
    Subscribe
  </button>
</div>

          </div>
        </div>

        {/* Social Media & Copyright */}
        {/* <div className="mt-10 border-t border-gray-500 pt-6 flex flex-col lg:flex-row justify-between items-center text-gray-400 text-center text-sm">
          <p className="text-center mt-4 lg:mt-0">
            Logoisum &copy; {new Date().getFullYear()}, All rights reserved
          </p>
        </div> */}
      </div>
      <div>
        <hr />
        <p className="text-center p-2 mt-4 lg:mt-0">
            Logoisum &copy; {new Date().getFullYear()}, All rights reserved
          </p>
      </div>
    </footer>
  );
};

export default Footer;
