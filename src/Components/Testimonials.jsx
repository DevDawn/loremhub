import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Jane Daniel",
    role: "Web Designer",
    text: "Attending the innovative design seminar was a game-changer! The insights I gained transformed the way I approach my work.",
    image: "jane.jpeg",
  },
  {
    id: 2,
    name: "Michael John",
    role: "UI/UX Designer",
    text: "I left feeling motivated and equipped with new strategies to implement immediately.",
    image: "michael.jpeg",
  },
  {
    id: 3,
    name: "Ruth Okonkwo",
    role: "Data Analyst",
    text: "I met some of the most brilliant minds in the industry and walked away with meaningful connections.",
    image: "ruth.jpeg",
  },
  {
    id: 4,
    name: "Michael John",
    role: "UI/UX Designer",
    text: "I left feeling motivated and equipped with new strategies to implement immediately.",
    image: "michael.jpeg",
  },
  {
    id: 5,
    name: "Jane Daniel",
    role: "Web Designer",
    text: "Attending the innovative design seminar was a game-changer! The insights I gained transformed the way I approach my work.",
    image: "jane.jpeg",
  },
  {
    id: 6,
    name: "Ruth Okonkwo",
    role: "Data Analyst",
    text: "I met some of the most brilliant minds in the industry and walked away with meaningful connections.",
    image: "ruth.jpeg",
  },
  {
    id: 7,
    name: "Ruth Okonkwo",
    role: "Data Analyst",
    text: "I met some of the most brilliant minds in the industry and walked away with meaningful connections.",
    image: "ruth.jpeg",
  },
  {
    id: 8,
    name: "Jane Daniel",
    role: "Web Designer",
    text: "Attending the innovative design seminar was a game-changer! The insights I gained transformed the way I approach my work.",
    image: "jane.jpeg",
  },
  {
    id: 9,
    name: "Michael John",
    role: "UI/UX Designer",
    text: "I left feeling motivated and equipped with new strategies to implement immediately.",
    image: "michael.jpeg",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="text-center py-10 px-4">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8">
        Mind-Blowing Testimonials
      </h2>

      {/* Testimonial Cards */}
      <div className="flex flex-wrap justify-center gap-6 transition-all duration-700 ease-in-out">
        {testimonials
          .slice(index * itemsPerPage, index * itemsPerPage + itemsPerPage)
          .map((testimonial) => (
            <div
              key={testimonial.id}
              className="border-[#00000040] border-2 bg-white p-6 rounded-2xl w-full sm:w-72 md:w-80 flex flex-col items-start text-left"
            >
              <p className="text-gray-700 text-sm mb-4">"{testimonial.text}"</p>
              <div className="flex items-center gap-3 mt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center mt-6 gap-2">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              i === index ? "bg-blue-500" : "bg-gray-400"
            }`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
