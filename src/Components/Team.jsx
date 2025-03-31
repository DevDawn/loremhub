import React from "react";

const teamMembers = [
  {
    name: "Prudent Stephen",
    role: "CEO Lorem Hub",
    description: "A visionary leader and innovator at the helm of Lorem Tech Hub.",
    image: "/prudent.jpeg",
  },
  {
    name: "Odelia Nku",
    role: "UI/UX Designer",
    description: "Passionate about creating intuitive and user-friendly designs.",
    image: "/odelia.jpeg",
  },
  {
    name: "Emmanuel Adeyemi",
    role: "Lead Software Engineer",
    description: "Has expertise in building robust applications using modern frameworks.",
    image: "/emmanuel.jpeg",
  },
  {
    name: "Victoria Bassey",
    role: "Head of Marketing",
    description: "Drives brand awareness and user acquisition through innovative marketing strategies.",
    image: "/victoria.jpeg",
  },
];

const Team = () => {
  return (
    <div className="mt-[100.82px] px-4 sm:px-6 lg:px-8" id="team">
      <h2 className="text-center text-[rgb(25,38,87)] text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">
        Meet Our Team
      </h2>

      <div className="ml-auto mr-auto mt-[40px] max-w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="border-[#00000045] w-full max-w-[280px] border-[3px] sm:border-[5px] rounded-lg p-4 sm:p-6 text-center mx-auto"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-[180px] h-[180px] sm:w-[222px] sm:h-[222px] mx-auto rounded-[20px] object-cover"
            />
            <h3 className="text-[#192657] mt-[16px] sm:mt-[20px] text-[18px] sm:text-[20px] font-[700]">
              {member.name}
            </h3>
            <p className="mt-[6px] sm:mt-[8px] font-[500] text-[14px] sm:text-[16px]">
              {member.role}
            </p>
            <p className="text-[12px] sm:text-[14px] mt-[8px] sm:mt-[10px] font-[400]">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
