"use-client";
import React from "react";

const page = () => {
  const itinerary = [
    {
      day: "19th September 2024, Thursday",
      schedule: [
        { time: "11:00 PM", event: "Reporting at Office" },
        { time: "11:30 PM", event: "Departure from Office" },
      ],
    },
    {
      day: "Day 1: 20th September 2024, Friday",
      schedule: [
        { time: "12:00 PM (Expected)", event: "Arrival at Kumbhalgarh" },
        { time: "12:00 PM - 01:00 PM", event: "Lunch" },
        {
          time: "02:30 PM - 05:00 PM",
          event: "Kumbhalgarh Fort and Mahadev Temple",
        },
        { time: "05:00 PM - 05:30 PM", event: "Hi-Tea" },
        { time: "07:30 PM - 09:00 PM", event: "Dinner" },
        { time: "09:00 PM - Onward", event: "Garba and Fun" },
      ],
    },
    {
      day: "Day 2: 21st September 2024, Saturday",
      schedule: [
        { time: "08:00 AM - 09:00 AM", event: "Breakfast" },
        { time: "09:00 AM - 01:30 PM", event: "Team Games Activities" },
        { time: "01:30 PM - 03:00 PM", event: "Lunch" },
        {
          time: "03:00 PM - 05:00 PM",
          event: "Swimming",
        },
        { time: "05:00 PM - 05:30 PM", event: "Hi-Tea" },
        { time: "07:30 PM - 09:00 PM", event: "Dinner" },
      ],
    },
    {
      day: "Day 3: 22nd September 2024, Sunday",
      schedule: [
        { time: "07:30 AM - 10:00 AM", event: "Breakfast" },
        { time: "10:00 AM", event: "Departure from Kumbhalgarh" },
      ],
    },
  ];

  const notes = [
    "It is mandatory to carry a swimming costume with you. Without a proper costume you will not be allowed to use resort swimming facilities.",
    "It is mandatory to wear Company Tshirt (Black or blue) during activities.",
    "Company will bear the expenses of food and entry charges for sightseeing.",
    "It is compulsory to carry Aadhaar card with you.",
    "You can also carry googles and cap with you as per your need.",
    "We expect everyone to behave in a respectful manner with everyone. Any kind of bullying/Unkind behaviour/impropriety would not be tolerated.",
    "Looking at the weather conditions it is suggested to carry a raincoat and warm jacket with you.",
    "It is suggested to wear comfortable shoes as there will be a lot of walking and activities.",
  ];

  return (
    <>
      <head>
        <title>Annual Trip Schedule</title>
      </head>
      <div className="w-full container !max-w-[960px] mx-auto mt-[6rem] !mb-8 !px-4">
        <h1 className="text-4xl font-bold py-4">Annual Trip to Kumbhalgarh</h1>
        {itinerary.map((day, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold text mb-3">
              <span className="border-b-2 border-themeColor pb-1">
                {day.day}
              </span>
            </h2>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">
                    Event
                  </th>
                  <th className="border border-gray-300 p-2 text-left">Time</th>
                </tr>
              </thead>
              <tbody>
                {day.schedule.map((item, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="border border-gray-300 p-2">{item.event}</td>
                    <td className="border border-gray-300 p-2 !w-[300px]">
                      {item.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
        <div className="mt-6 trip-list">
          <h2 className="text-xl font-semibold mb-2">Notes:</h2>
          <ul className="list-disc pl-1">
            {notes.map((note, index) => (
              <li key={index} className="mb-2">
                {note}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default page;
