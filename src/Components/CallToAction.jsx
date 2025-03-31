import React from 'react';

const CallToAction = () => {
  return (
    <div className="py-10 px-4 sm:py-20 sm:px-6 flex flex-col items-center">
      <h2 className="text-center text-[#192657] text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
        Don’t miss out on our Programs & Events
      </h2>
      <p className="text-center text-gray-600 text-sm sm:text-base max-w-lg sm:max-w-2xl mb-6 sm:mb-8">
        Stay ahead with our latest programs and events! Join expert-led seminars, interactive workshops, 
        and networking opportunities designed to fuel innovation and growth. Don’t miss out! Be a part of the experience.
      </p>
      <img 
        src="/cta.jpeg" 
        alt="Call To Action" 
        className="w-full max-w-md sm:max-w-3xl h-auto rounded-lg"
      />
    </div>
  );
};

export default CallToAction;
