import React from "react";

const History = () => {
  return (
    <div className="py-20 px-6" id="history">
      {/* Section Title */}
      <h2 className="text-center text-[#192657] text-4xl font-bold mb-12">
        History
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-12">
        {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <h3 className="text-2xl font-semibold inline-block pb-2">
              <span className="border-b-2 border-black inline-block">
                Our History
              </span>
            </h3>
            <p className="mt-6 leading-relaxed text-gray-700">
              Lorem Hub was founded on a simple yet powerful belief: Innovation thrives when visionaries are empowered. With the rapid evolution of technology, we recognized the need for a space where aspiring entrepreneurs, developers, and change-makers could transform bold ideas into real-world solutions.
              
              What began as a small collective of passionate tech enthusiasts has now grown into a dynamic ecosystem driving innovation at every level. Through mentorship, state-of-the-art training, and strategic networking, we have helped startups scale, individuals upskill, and ideas evolve into groundbreaking ventures.
            
              From launching accelerator programs to forging partnerships with industry leaders, our journey has been defined by a relentless commitment to nurturing talent, fostering creativity, and pushing the boundaries of possibility. Today, Lorem Hub stands as a beacon for the next generation of innovators—fueling dreams, shaping industries, and paving the way for a future driven by technology and entrepreneurship.
            </p>
          </div>

          {/* Image Content */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/history.png"
            alt="Our History"
            className="w-full max-w-md h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default History;