import React from "react";

const services = [
  {
    title: "Tech Hub",
    description:
      "At Lorem, we provide the perfect space for tech enthusiasts to innovate, collaborate, and grow. Our workspace is equipped with top-notch resources to help bring your vision to life.",
    image: "/techhub.jpeg",
  },
  {
    title: "Tech Training",
    description:
      "Our expert-led training programs are designed to equip individuals with the skills they need. With comprehensive courses, flexible schedules, and hands-on projects, we make learning accessible and effective.",
    image: "/techtraining.jpeg",
  },
  {
    title: "Talent Development",
    description:
      "Gain the skills, mentorship, and guidance needed to excel in your career. Learn from industry experts and be inspired by real success stories of innovators who started just like you.",
    image: "/talentdevelopment.jpeg",
  },
  {
    title: "Entrepreneurship Support",
    description:
      "Take your startup to new heights with the right guidance and funding. From securing grants to gaining access to key networks, we provide the resources you need to succeed in the tech industry.",
    image: "/ent.jpeg",
  },
  {
    title: "Innovation Initiatives",
    description:
      "Explore cutting-edge projects and dynamic solutions at the intersection of tech and social needs. Join our incubator and collaborate with industry leaders to transform groundbreaking ideas into reality.",
    image: "/innovation.jpeg",
  },
  {
    title: "Software Development",
    description:
      "We design and develop high-performance applications using the latest tools and refined models. Our process ensures seamless success stories and proven methodologies that drive innovation and results.",
    image: "/software.jpeg",
  },
];

const Services = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8" id="services">
      <h2 className="text-center text-[#192657] text-3xl sm:text-4xl font-bold mb-10 sm:mb-12">
        Our Services
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 sm:p-6 text-center border border-gray-200"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-36 sm:h-40 object-cover rounded-md mb-3 sm:mb-4"
            />
            <h3 className="text-[#192657] text-lg sm:text-xl font-semibold">
              {service.title}
            </h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
