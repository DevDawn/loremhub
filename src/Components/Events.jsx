import React from 'react';

const events = [
  {
    image: 'event11.png',
    title: 'Innovative Design Thinking Summit 2025',
    date: 'Tue, Apr 1, 11:30 AM WAT',
    description: 'Free',
  },
  {
    image: 'event2.png',
    title: 'Empowering Lives with Innovation',
    date: 'Mon, Apr 14, 2:30 PM WAT',
    description: 'Free',
  },
  {
    image: 'event1.jpeg',
    title: 'Breaking into Tech: Skills and Strategies',
    date: 'Fri, Apr 25, 3:00 PM WAT',
    description: 'Free',
  },
];

const Events = () => {
  return (
    <div id='programs' className="py-20 px-4 sm:px-6 text-center">
      <h2 className="text-[#192657] text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">
        Upcoming Events Schedule
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white flex flex-col items-start p-4 rounded-lg"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-40 sm:h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-base sm:text-lg font-semibold text-[#192657]">
              {event.title}
            </h3>
            <p className="text-gray-600 text-sm mt-2">{event.date}</p>
            <span className="bg-gray-300 px-3 py-1 rounded-2xl text-[#192657] font-bold mt-2 text-sm">
              {event.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
