import React from "react";
import { PieChart, TrendingUp, Users, Target } from "lucide-react";

const Analytics = () => {
  return (
    <section className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto main-section-padding relative z-10">
        <div className="text-center max-w-3xl mx-auto !mb-8 md:!mb-12 slg:!mb-16">
          <h2 className="text-blue-400 font-semibold tracking-wide uppercase text-sm">
            Actionable Insights
          </h2>
          <h3 className="!mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            In-Depth Analytics & ROI Tracking
          </h3>
          <p className="!mt-4 text-xl text-gray-400">
            Brilworks builds analytics into the core of your app so every
            decision can be backed by data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Track the Full Funnel",
              desc: "From page visits and ticket sales to check-ins and app adoption rates.",
              icon: <TrendingUp className="text-green-400" />,
            },
            {
              title: "Session Performance",
              desc: "Monitor attendance, dwell time, and feedback scores to see what resonates.",
              icon: <Users className="text-blue-400" />,
            },
            {
              title: "Sponsor Value",
              desc: "Measure booth traffic, content views, and lead quality for partners.",
              icon: <Target className="text-red-400" />,
            },
            {
              title: "Attribute Impact",
              desc: "Integrate with marketing tools to attribute revenue to specific channels.",
              icon: <PieChart className="text-yellow-400" />,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-2xl hover:bg-gray-800 transition-colors"
            >
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-4 border border-gray-700">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-500/20 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-3 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-gray-700">
            <div>
              <p className="text-4xl lg:text-5xl font-black text-white mb-2">
                +40%
              </p>
              <p className="text-blue-200 text-sm uppercase tracking-wider font-medium">
                Conversion Rate
              </p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-black text-white mb-2">
                3x
              </p>
              <p className="text-blue-200 text-sm uppercase tracking-wider font-medium">
                Sponsor Leads
              </p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-black text-white mb-2">
                95%
              </p>
              <p className="text-blue-200 text-sm uppercase tracking-wider font-medium">
                App Adoption
              </p>
            </div>
          </div>
          <p className="text-center text-gray-400 text-sm mt-8 italic">
            *Typical outcomes aimed for with Brilworks-designed event platforms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
