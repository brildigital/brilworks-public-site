"use-client";
import React from "react";

const page = () => {
  const itinerary = [
    {
      day: "Day 1",
      schedule: [
        { time: "03:00 AM - 03:45 AM", event: "Gathering at Office" },
        { time: "04:00 AM", event: "Leaving the Office" },
        { time: "08:00 AM", event: "Breakfast Break" },
        { time: "12:00 PM", event: "Welcome to Resort" },
        { time: "12:30 PM", event: "Get the Rooms" },
        { time: "01:00 PM", event: "Lunch" },
        { time: "03:00 PM - 06:00 PM", event: "Nature Trail" },
        { time: "06:00 PM", event: "Hi-Tea" },
        { time: "09:00 PM", event: "Dinner" },
        { time: "10:00 PM", event: "Bon-Fire: B'Town" },
        { time: "End of Day", event: "End of Day 1" },
      ],
    },
    {
      day: "Day 2",
      schedule: [
        { time: "09:00 AM", event: "Breakfast" },
        { time: "09:30 AM", event: "Games & Team Activities" },
        { time: "01:00 PM", event: "Lunch" },
        {
          time: "02:00 PM - 06:00 PM",
          event: "Pool / Cricket / Volleyball / Visit to Places",
        },
        { time: "06:00 PM", event: "Hi-Tea" },
        { time: "07:00 PM", event: "Garba (Speaker)" },
        { time: "09:00 PM", event: "Dinner" },
        { time: "10:00 PM", event: "Gatherings to share experience and fun" },
        { time: "End of Day", event: "End of Day 2" },
      ],
    },
    {
      day: "Day 3",
      schedule: [
        { time: "09:00 AM", event: "Breakfast" },
        { time: "10:00 AM", event: "Submit the Keys" },
        { time: "11:00 AM", event: "Leave the Resort" },
        { time: "01:00 PM", event: "Stop for Lunch" },
        { time: "03:00 PM", event: "Drop off at Ahmedabad" },
        { time: "End of Trip", event: "End of Trip" },
      ],
    },
  ];

  //   const itinerary = [
  //     {
  //       day: "Day 1: 22nd August 2025, Friday",
  //       schedule: [
  //         { time: "11:00 PM (Thursday)", event: "Reporting at Office" },
  //         { time: "11:30 PM (Thursday)", event: "Departure from Office" },
  //         { time: "12:00 PM (Expected)", event: "Arrival at Kumbhalgarh" },
  //         { time: "12:00 PM - 01:00 PM", event: "Lunch" },
  //         {
  //           time: "02:30 PM - 05:00 PM",
  //           event: "Kumbhalgarh Fort and Mahadev Temple",
  //         },
  //         { time: "05:00 PM - 05:30 PM", event: "Hi-Tea" },
  //         { time: "07:30 PM - 09:00 PM", event: "Dinner" },
  //         { time: "09:00 PM - Onward", event: "Garba and Fun" },
  //       ],
  //     },
  //     {
  //       day: "Day 2: 23rd August 2025, Saturday",
  //       schedule: [
  //         { time: "08:00 AM - 09:00 AM", event: "Breakfast" },
  //         { time: "09:00 AM - 01:30 PM", event: "Team Games Activities" },
  //         { time: "01:30 PM - 03:00 PM", event: "Lunch" },
  //         {
  //           time: "03:00 PM - 05:00 PM",
  //           event: "Swimming",
  //         },
  //         { time: "05:00 PM - 05:30 PM", event: "Hi-Tea" },
  //         { time: "05:30 PM - 07:30 PM", event: "Activities" },
  //         { time: "07:30 PM - 09:00 PM", event: "Dinner" },
  //       ],
  //     },
  //     {
  //       day: "Day 3: 24th August 2025, Sunday",
  //       schedule: [
  //         { time: "07:30 AM - 10:00 AM", event: "Breakfast" },
  //         { time: "11:00 AM", event: "Departure from Kumbhalgarh" },
  //       ],
  //     },
  //   ];

  const notes = [
    "It is mandatory to wear Company Tshirt (Black or blue) during games & team activities.",
    "It is compulsory to carry Aadhaar card with you.",
    "We expect everyone to behave in a respectful manner with everyone. Any kind of bullying/Unkind behaviour/impropriety would not be tolerated.",
    "It is mandatory to carry a swimming costume with you. Without a proper costume you will not be allowed to use resort swimming facilities.",
    // "Company will bear the expenses of food and entry charges for sightseeing.",
    "Looking at the weather conditions it is suggested to carry a raincoat and warm jacket with you.",
    // "It is suggested to wear comfortable shoes as there will be a lot of walking and activities.",
    // "Considering the weather conditions and other factors, our Agile Volunteers and Organizers may make necessary adjustments. We will keep you informed and updated in a timely manner.",
  ];

  return (
    <>
      <head>
        <title>Annual Trip Schedule</title>
      </head>
      <div className="w-full container !max-w-[960px] mx-auto mt-[6rem] !mb-8 !px-4">
        <h1 className="text-4xl font-bold py-4">Annual Trip 2025</h1>
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
                    <td className="border border-gray-300 md:p-2 p-1.5">
                      {item.event}
                    </td>
                    <td className="border border-gray-300 md:p-2 p-1.5 w-[120px] sm:w-[200px] md:w-[250px] lg:w-[300px]">
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
          <ul className="list-disc list-outside pl-5">
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
