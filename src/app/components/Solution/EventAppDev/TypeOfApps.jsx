import React from "react";
import { Mic2, Store, Building2, Ticket, Radio } from "lucide-react";

const types = [
  {
    title: "Conferences & Summits",
    desc: "Multi-track agendas, speaker profiles, live Q&A, polls, and feedback.",
    icon: <Mic2 className="w-5 h-5" />,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Trade Shows & Expos",
    desc: "Exhibitor directories, interactive floor plans, lead capture, and follow-ups.",
    icon: <Store className="w-5 h-5" />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Corporate & Internal",
    desc: "Town halls, kickoffs, and training with secure access and tailored content.",
    icon: <Building2 className="w-5 h-5" />,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Festivals & Experiences",
    desc: "Schedules, talent profiles, ticketing alerts, and fan engagement.",
    icon: <Ticket className="w-5 h-5" />,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Hybrid & Virtual Events",
    desc: "Streaming, chat, virtual lounges, and on-demand content in one interface.",
    icon: <Radio className="w-5 h-5" />,
    color: "bg-green-100 text-green-600",
  },
];

const TypeOfApps = () => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto main-section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
              Versatile Platforms
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 !mb-6">
              Types of Event Apps We Build
            </h2>
            <p className="text-lg text-gray-600 !mb-8 leading-relaxed">
              Brilworks designs event apps that support single flagships as well
              as recurring event portfolios, adapting features to your specific
              format.
            </p>
            <div className="space-y-4">
              {types.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`p-3 rounded-lg mr-4 shrink-0 ${item.color}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-full min-h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-[2rem] transform rotate-3 scale-95 opacity-70"></div>
            <img
              src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Conference audience using mobile apps"
              className="relative rounded-[2rem] shadow-2xl w-full h-full object-cover border-4 border-white"
            />

            {/* Overlay Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg">
              <div className="flex items-center gap-4 mb-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                <p className="text-xs font-bold text-gray-500 uppercase">
                  System Status
                </p>
              </div>
              <p className="font-bold text-gray-900 text-lg">
                Supporting 50,000+ Concurrent Users
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Scalable architecture for high-traffic moments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypeOfApps;
