import React from "react";

const AboutUs = () => {
  return (
    <div className="py-20 px-6 bg-white">
      {/* Section Title */}
      <h2 className="text-center text-[#192657] text-4xl font-bold mb-12">
        About Us
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start">
        {/* Image Content */}
        <div className="w-full md:w-1/2">
          <img
            src="/about.png"
            alt="About Us"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 md:pl-12 mt-6 md:mt-0 self-start">
          {/* Mission */}
          <h3  id="mission" className="text-2xl font-semibold border-b-2 border-black inline-block pb-2">Mission</h3>
          <p className="mt-2 leading-relaxed">
            At Lorem, we exist to nurture and elevate tech talent by offering a 
            space for learning, collaboration, and innovation. Through world-class 
            resources, expert guidance, and a strong community, Lorem Hub transforms 
            ideas into sustainable ventures that make a real-world impact.
          </p>

          {/* Vision */}
          <h3 id="vision" className="text-2xl font-semibold border-b-2 mt-5 border-black inline-block pb-2">Vision</h3>
          <p className="mt-2 leading-relaxed">
            To be the leading global hub where technology, entrepreneurship, and 
            creativity converge—empowering individuals and businesses to drive 
            groundbreaking innovations that transform industries and improve lives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;