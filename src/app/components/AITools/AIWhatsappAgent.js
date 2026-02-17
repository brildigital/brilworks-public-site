"use client";
import React from "react";
import Link from "next/link";
import {
  MessageSquare,
  Clock,
  Shield,
  TrendingUp,
  Zap,
  CheckCircle,
} from "lucide-react";
import Heading from "../HTMLComponents/Heading";
import { scrollToSection } from "../lib/commonFunction";

const AIWhatsappAgent = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Instant Responses",
      description:
        "Respond to customer queries instantly with AI-powered understanding and natural language processing.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description:
        "Never miss a customer inquiry. Our AI agent works around the clock to support your customers.",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description:
        "End-to-end encryption and compliance with data protection regulations to keep conversations safe.",
    },
    {
      icon: TrendingUp,
      title: "Smart Analytics",
      description:
        "Track conversations, measure satisfaction, and gain insights to continuously improve your support.",
    },
    {
      icon: Zap,
      title: "Easy Integration",
      description:
        "Connect your existing systems in minutes with our simple API and webhook integrations.",
    },
    {
      icon: CheckCircle,
      title: "Customizable",
      description:
        "Train the AI with your brand voice, FAQs, and business logic for personalized interactions.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-navyBlue">
        <div className="container max-w-[1280px] main-section-padding mx-auto">
          <div className="flex flex-col items-center gap-6 mt-20">
            <div className="flex items-center w-fit gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 text-sm font-medium text-blue-400 md:mb-6 mb-3 sm:mx-auto mr-auto">
              <Zap className="w-4 h-4" />
              <span>AI-Powered Customer Support</span>
            </div>
            <div>
              <Heading
                type="h1"
                className="!text-white sm:text-center text-left"
                text={
                  <>
                    Transform Your WhatsApp Into an&nbsp;
                    <br />
                    AI-Powered
                    <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-themeSecondary">
                      {" "}
                      Support Channel
                    </span>
                  </>
                }
              />
            </div>
            <p className="text-gray-300 lg:text-xl md:text-lg text-base sm:text-center text-left md:pr-10 pr-0 w-full max-w-4xl">
              Automate customer conversations, provide instant responses, and
              scale your support 24/7 with our intelligent WhatsApp AI agent.
            </p>

            <div className="w-full flex flex-col sm:flex-row gap-4 justify-center my-8">
              <Link
                href="#solutions"
                className="sm:w-fit w-full flex items-center justify-center px-8 py-4 bg-themeColor text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                onClick={(e) => scrollToSection(e, "solutions")}
              >
                Start Free Trial
              </Link>
              <Link
                href="#"
                className="sm:w-fit w-full flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 transition-all duration-200"
              >
                Watch Demo
              </Link>
            </div>
            <div className="flex items-center justify-center gap-8 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                14-day free trial
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="main-section-padding lg:py-10 bg-themeLight text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 text-themeColor">98%</div>
              <div className="text-slate-700 text-lg">
                Customer Satisfaction
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 text-themeColor">10x</div>
              <div className="text-slate-700 text-lg">Faster Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 text-themeColor">
                24/7
              </div>
              <div className="text-slate-700 text-lg">Always Available</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto main-section-padding">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <Heading
              type="h2"
              className="lg:!text-[40px] md:!text-3xl !text-2xl font-semibold mb-3"
              text="Powerful Features for Modern Support"
            />
            <p className="lg:text-xl md:text-lg text-base text-slate-600 max-w-3xl mx-auto">
              Everything you need to deliver exceptional customer experiences on
              WhatsApp
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-y-6 md:gap-x-8 gap-4">
            {features.map(({ icon: Icon, title, description }, index) => (
              <div
                key={index}
                className="lg:p-8 md:p-6 p-4 bg-white rounded-2xl border border-borderGray hover:border-themeColor hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-themeColor" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sectionBG">
        <div className="max-w-7xl mx-auto main-section-padding">
          <div className="text-center mb-8 md:mb-12">
            <Heading
              type="h2"
              className="lg:!text-[40px] md:!text-3xl !text-2xl font-semibold mb-3"
              text="Get Started in 3 Simple Steps"
            />
            <p className="lg:text-xl md:text-lg text-base text-slate-600 max-w-3xl mx-auto">
              Launch your AI WhatsApp agent in minutes, no technical expertise
              required
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4">
            <div className="relative">
              <div className="bg-white lg:p-8 md:p-6 p-4 rounded-2xl border border-borderGray">
                <div className="w-12 h-12 bg-themeColor text-white rounded-xl flex items-center justify-center font-bold text-xl mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Connect WhatsApp
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Link your WhatsApp Business account with our platform using
                  our secure connection process.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white lg:p-8 md:p-6 p-4 rounded-2xl border border-borderGray">
                <div className="w-12 h-12 bg-themeColor text-white rounded-xl flex items-center justify-center font-bold text-xl mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Train Your AI
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Upload your knowledge base, FAQs, and business rules to
                  customize the AI's responses.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white lg:p-8 md:p-6 p-4 rounded-2xl border border-borderGray">
                <div className="w-12 h-12 bg-themeColor text-white rounded-xl flex items-center justify-center font-bold text-xl mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Go Live
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Activate your AI agent and start automating customer
                  conversations instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-themeColor to-navyBlue">
        <div className="max-w-4xl mx-auto text-center main-section-padding">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Customer Support?
          </h2>
          <p className="text-xl text-emerald-50 md:!mb-8 !mb-5">
            Join thousands of businesses using AI to deliver exceptional
            WhatsApp experiences
          </p>
          <div>
            <Link
              href="/contact-us/"
              className="px-6 py-4 bg-white text-themeColor rounded-lg hover:bg-slate-50 font-semibold text-lg"
            >
              Start Your Free Trial
            </Link>
          </div>
          <div className="!mt-6 text-blue-100 text-sm">
            No credit card required • 14-day free trial • Cancel anytime
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIWhatsappAgent;
