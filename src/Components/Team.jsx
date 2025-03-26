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
    <div className="py-20 px-6" id="team">
      <h2 className="text-center text-[rgb(25,38,87)] text-4xl font-bold mb-12">
        Meet Our Team
      </h2>

      <div  className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {teamMembers.map ((member, index) => (
          <div key={index} className=" border-gray-500 border-2 rounded-lg p-6 text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-auto mx-auto rounded-2xl object-cover mb-4"
            />
            <h3 className="text-[#192657] text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-500 font-medium">{member.role}</p>
            <p className="text-gray-600 mt-2 text-sm">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
