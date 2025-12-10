"use client";
import {
  Check,
  ChevronRight,
  Heart,
  MapPin,
  Search,
  PawPrint,
  Shield,
  Users,
  Home,
  Bell,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { scrollToSection } from "../lib/commonFunction";

const PetFinder = () => {
  return (
    <div>
      <section className="pt-16">
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <PawPrint className="w-4 h-4" />
                <span>Find Your Perfect Companion</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Every Pet Deserves
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#867aec] to-purple-500">
                  {" "}
                  A Loving Home
                </span>
              </h1>
              <p className="text-xl text-gray-600 md:!mb-8 !mb-5 leading-relaxed">
                Pet Finder is your go-to app for discovering adoptable pets near
                you or helping reunite lost animals with their families. Browse
                thousands of listings, filter by breed, age, and location, and
                connect directly with shelters or pet owners. Whether you're
                looking to adopt, foster, or report a missing pet, Pet Finder
                makes it simple and compassionate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#download-app"
                  onClick={(e) => scrollToSection(e, "download-app")}
                  className="group bg-gradient-to-r from-[#867aec] to-purple-500 text-white px-8 md:py-4 py-3 rounded-full font-medium hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  Start Finding Pets
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.brilworks.petfinder&hl=en"
                  target="_blank"
                  className="bg-white text-gray-900 px-8 md:py-4 py-3 rounded-full font-medium border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 text-center"
                >
                  Download on Play Store
                </Link>
              </div>
              <div className="mt-12 flex items-center md:space-x-10 space-x-5">
                <div>
                  <div className="text-3xl font-bold text-gray-900">10K+</div>
                  <div className="text-sm text-gray-600">Adoptable Pets</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">5K+</div>
                  <div className="text-sm text-gray-600">Happy Adoptions</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Partner Shelters</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#867aec] to-purple-400 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden p-2">
                <div className="flex items-center justify-center bg-gradient-to-br from-[#867aec] to-purple-500 rounded-2xl p-16">
                  <Image
                    src="https://d11qzsb0ksp6iz.cloudfront.net/assets/pet-finder-banner.webp"
                    alt="Pet Finder App"
                    width={610}
                    height={430}
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4" />
              <span>Everything You Need</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Powerful Features for Pet Lovers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the tools that make finding and helping pets easier than
              ever
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Smart Search",
                description:
                  "Filter pets by breed, age, size, and location to find your perfect match",
                color: "orange",
              },
              {
                icon: MapPin,
                title: "Location-Based",
                description:
                  "Discover adoptable pets and shelters near you with real-time location tracking",
                color: "amber",
              },
              {
                icon: Bell,
                title: "Lost & Found",
                description:
                  "Report missing pets or help reunite lost animals with their families",
                color: "orange",
              },
              {
                icon: Users,
                title: "Direct Connect",
                description:
                  "Chat directly with shelters and pet owners to arrange visits and adoptions",
                color: "amber",
              },
              {
                icon: Home,
                title: "Foster Programs",
                description:
                  "Find temporary fostering opportunities and make a difference",
                color: "orange",
              },
              {
                icon: Shield,
                title: "Verified Listings",
                description:
                  "All shelters and listings are verified for your safety and peace of mind",
                color: "amber",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className="w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom right, #867aec, #a78bfa)",
                  }}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How Pet Finder Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Finding your new best friend is just a few taps away
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Download & Sign Up",
                description: "Get the app and create your profile in minutes",
              },
              {
                step: "2",
                title: "Browse Listings",
                description: "Search for pets that match your preferences",
              },
              {
                step: "3",
                title: "Connect & Chat",
                description: "Message shelters or owners directly",
              },
              {
                step: "4",
                title: "Adopt & Love",
                description: "Complete the adoption and bring your pet home",
              },
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#867aec] to-purple-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 3 && (
                  <ChevronRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-purple-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section
        id="download-app"
        className="bg-gradient-to-r from-[#867aec] to-purple-500"
      >
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center text-white">
            <PawPrint className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Find Your Perfect Pet?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Download Pet Finder today and start your journey to finding a
              loving companion or helping reunite lost pets with their families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.brilworks.petfinder&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center space-x-3 bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-800 transition-all duration-300 hover:shadow-xl"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </a>
            </div>
            <div className="mt-10 flex items-center justify-center space-x-8">
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span>Free to Download</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span>Verified Shelters</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span>Safe & Secure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from pet lovers who found their perfect companions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Dog Adopter",
                quote:
                  "Pet Finder made it so easy to find and adopt my rescue dog, Max. The app is intuitive and the shelter communication was seamless!",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "Cat Foster Parent",
                quote:
                  "I've fostered three cats through Pet Finder. The foster program feature is amazing and really helps these animals find temporary homes.",
                rating: 5,
              },
              {
                name: "Emily Davis",
                role: "Lost Pet Owner",
                quote:
                  "When my cat went missing, Pet Finder helped me spread the word. She was found within 48 hours thanks to this wonderful community!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gray-50">
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="bg-gradient-to-br from-[#867aec] to-purple-500 rounded-3xl p-12 md:p-16 text-center text-white">
            <Heart className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Make a Difference Today
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of pet lovers who are making a difference in
              animals' lives. Whether you adopt, foster, or help reunite lost
              pets, every action counts.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center mt-8 bg-white text-[#867aec] px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all duration-300"
            >
              Get Started Now
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PetFinder;
