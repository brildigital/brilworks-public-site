import React from "react";
import { Smartphone, Ticket, Layout, Puzzle } from "lucide-react";

const eventAppServicesData = [
  {
    title: "Custom Mobile & Web Apps",
    description:
      "Native iOS and Android apps plus responsive web portals for attendees, organizers, and sponsors.",
    icon: <Smartphone className="w-6 h-6 text-white" />,
  },
  {
    title: "Registration & Ticketing",
    description:
      "Multi-tier ticketing workflows, discounts, and seamless registration experiences integrated directly into the app.",
    icon: <Ticket className="w-6 h-6 text-white" />,
  },
  {
    title: "Admin & Organizer Portals",
    description:
      "Centralized dashboards to manage content, speakers, sessions, sponsors, and real-time communications.",
    icon: <Layout className="w-6 h-6 text-white" />,
  },
  {
    title: "Deep Integrations",
    description:
      "Connect with CRMs, marketing automation, ticketing, and streaming tools so data flows where you need it.",
    icon: <Puzzle className="w-6 h-6 text-white" />,
  },
];
const EventAppServices = () => {
  return (
    <section id="services">
      <div className="max-w-7xl mx-auto main-section-padding">
        <div className="text-center !mb-8 md:!mb-12 slg:!mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            End-to-End Solutions
          </h2>
          <p className="!mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Event App Development Services
          </p>
          <p className="!mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            From product strategy and UX to engineering and analytics, we build
            the full event technology stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {eventAppServicesData.map((service, index) => (
            <div
              key={index}
              className="flex gap-6 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 bg-white hover:border-blue-100 group"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventAppServices;
