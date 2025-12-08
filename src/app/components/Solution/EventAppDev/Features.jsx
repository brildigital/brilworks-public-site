import React from "react";
import {
  Users,
  Ticket,
  MessageSquare,
  Award,
  BarChartHorizontal,
  Zap,
} from "lucide-react";

const Features = () => {
  return (
    <section id="features">
      <div className="max-w-7xl mx-auto main-section-padding">
        <div className="text-center max-w-3xl mx-auto !mb-8 md:!mb-14 slg:!mb-20">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Core Features
          </h2>
          <p className="!mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Features That Drive Engagement
          </p>
          <p className="!mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Designed to remove friction for attendees and maximize value for
            sponsors.
          </p>
        </div>

        <div className="space-y-24">
          {/* Feature Group 1 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-blue-50 rounded-3xl transform -rotate-2 scale-105"></div>
              <div className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-lg">
                <ul className="space-y-4">
                  {[
                    "Branded onboarding with SSO/Social login",
                    "Smart digital tickets & QR check-in",
                    "Dynamic agenda with 'My Schedule'",
                    "Push notifications & targeted alerts",
                    "Live Q&A, polls, and session feedback",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                        <Zap size={14} />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <Ticket size={24} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Attendee Journey & Engagement
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Create a seamless experience from the first login to the final
                session. Our apps use smart recommendations and frictionless
                check-ins to keep attendees focused on content, not logistics.
              </p>
            </div>
          </div>

          {/* Feature Group 2 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 text-indigo-600">
                <Users size={24} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Networking & Community
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Turn your event into a community. Facilitate meaningful
                connections with AI-assisted matching, rich profiles, and
                integrated communication tools that extend the networking beyond
                the event floor.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-50 rounded-3xl transform rotate-2 scale-105"></div>
              <div className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-lg">
                <ul className="space-y-4">
                  {[
                    "Rich profiles with tags & interests",
                    "AI-assisted people recommendations",
                    "1:1 chat & group meeting requests",
                    "Activity feeds for updates & media",
                    "Moderated community discussions",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                        <MessageSquare size={14} />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Feature Group 3 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-green-50 rounded-3xl transform -rotate-2 scale-105"></div>
              <div className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-lg">
                <ul className="space-y-4">
                  {[
                    "Sponsor banners & featured sessions",
                    "Exhibitor virtual booths & galleries",
                    "Lead capture via QR/badge scanning",
                    "Performance reports per exhibitor",
                    "Lead scoring & CRM export",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                        <BarChartHorizontal size={14} />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-6 text-green-600">
                <Award size={24} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Sponsors, Exhibitors & Revenue
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Give sponsors the visibility and data they crave. Our apps
                provide dedicated tools for lead capture and analytics, helping
                them justify their investment and maximizing your event revenue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
