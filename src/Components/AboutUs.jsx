import React from "react";

const AboutUs = () => {
  return (
    <div className="mt-[86px] flex flex-col items-center px-4 sm:px-8" id="about">
      {/* Section Title */}
      <h2 className="text-center text-[#192657] text-[28px] sm:text-[35px] font-[700] leading-[100%]">
        About Us
      </h2>

      <div className="mt-[40px] sm:mt-[70px] flex flex-col sm:flex-row items-center sm:items-start">
        {/* Image Content */}
        <div className="sm:ml-[187px] sm:w-1/2 w-full">
          <img
            src="/about.png"
            alt="About Us"
            className="object-cover h-[250px] sm:h-[474px] w-full rounded-[15.7px]"
          />
        </div>

        {/* Text Content */}
        <div className="sm:w-1/2 sm:pl-12 flex flex-col justify-between sm:h-[474px] sm:mr-[188px] mt-6 sm:mt-0 w-full">
          {/* Mission */}
          <div>
            <h3
              id="about"
              className="text-xl sm:text-2xl font-semibold border-b-2 border-black inline-block pb-2"
            >
              Mission
            </h3>
            <p className="mt-[15px] leading-relaxed text-sm sm:text-base">
              At Lorem, we exist to nurture and elevate tech talent by offering
              a space for learning, collaboration, and innovation. Through
              world-class resources, expert guidance, and a strong community,
              Lorem Hub transforms ideas into sustainable ventures that make a
              real-world impact.
            </p>
          </div>

          {/* Vision */}
          <div className="self-start sm:self-end mt-6 sm:mt-0">
            <h3
              id="vision"
              className="text-xl sm:text-2xl font-semibold border-b-2 border-black inline-block pb-2"
            >
              Vision
            </h3>
            <p className="mt-2 leading-relaxed text-sm sm:text-base">
              To be the leading global hub where technology, entrepreneurship,
              and creativity converge—empowering individuals and businesses to
              drive groundbreaking innovations that transform industries and
              improve lives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;