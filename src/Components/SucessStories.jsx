import React from "react";

const stories = [
  {
    id: 1,
    name: "Aisha Malik",
    position: "CEO of SafeNet",
    story:
      "Lorem Hub gave me the confidence and resources to launch a business that’s making the digital world safer.",
    image: "aisha.jpeg",
  },
  {
    id: 2,
    name: "Blessing Stephen",
    position: "CEO of TravelEase",
    story:
      "Lorem Hub turned my idea into a top-rated travel app, helping thousands plan stress-free trips.",
    image: "blessing.jpeg",
  },
  {
    id: 3,
    name: "Samuel Okon",
    position: "CEO of Fresh Harvest",
    story:
      "With Lorem Hub’s guidance, my farm went from local to national, making organic food accessible to more people.",
    image: "samuel.jpeg",
  },
  {
    id: 4,
    name: "Delight Saidu",
    position: "CEO of CodeCrafters",
    story:
      "Lorem Hub gave me the tools to turn my passion for coding education into a thriving business.",
    image: "delight.jpeg",
  },
  {
    id: 5,
    name: "Peter Nku",
    position: "CEO of GreenSolutions",
    story:
      "Lorem Hub helped me refine my pitch and scale my eco-friendly business to five new cities.",
    image: "peter.jpeg",
  },
  {
    id: 6,
    name: "Joshua Kunle",
    position: "CEO of Swift Pay",
    story:
      "Lorem Hub connected me with investors and now, my fintech startup is helping thousands of small businesses process payments effortlessly.",
    image: "joshua.jpeg",
  },
];

const SuccessStories = () => {
  return (
    <div className="py-10">
      <h2 className="text-4xl text-center font-bold text-gray-800 mb-8">
        Success Stories
      </h2>

      {/* Grid Layout for Responsiveness */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-20">
        {stories.map((story) => (
          <div
            key={story.id}
            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
          >
            <p className="text-gray-700 text-sm mb-4">"{story.story}"</p>
            <div className="flex flex-start text-left gap-3 mt-4">
              <img
                src={story.image}
                alt={story.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900">{story.name}</h4>
                <p className="text-sm text-gray-500">{story.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
