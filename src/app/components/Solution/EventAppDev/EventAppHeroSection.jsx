import { ArrowRight, BarChart2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const EventAppHeroSection = () => {
  return (
    <section className="max-w-7xl main-section-padding mx-auto mt-20 overflow-hidden">
      <div className="relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Data-Driven Event Tech
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] !mb-5">
              Event App Development Company for{" "}
              <span className="text-blue-600">High-Impact Events</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl leading-relaxed md:w-4/5">
              Build an event app that unifies registration, engagement, and
              analytics-engineered for conferences, trade shows, corporate
              events, and hybrid experiences.
            </p>

            {/* <p className="text-base text-gray-500 max-w-xl">
              Brilworks helps organizers turn every touchpoint into measurable
              outcomes. Our custom apps boost attendance, increase engagement,
              and prove ROI to stakeholders.
            </p> */}

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact-us/"
                className="inline-flex justify-center items-center px-6 py-3.5 border border-transparent text-base font-semibold rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Talk to our event app experts
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
          <div>
            <Image
              src="/images/v2/event-app-dev-banner.webp"
              width="570"
              height="600"
              alt="event-app-development-banner"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventAppHeroSection;
