"use client";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductsPage = () => {
  const products = [
    {
      title: "Pet Finder",
      slug: "pet-finder",
      description:
        "Discover adoptable pets near you or help reunite lost animals with their families. Browse thousands of listings, filter by breed, age, and location.",
      image: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/petly-pet-finder-app-1759145787607.webp`,
      color: "from-[#867aec] to-purple-500",
      badge: "Pet Adoption",
    },
    {
      title: "MindSync",
      slug: "mind-sync",
      description:
        "AI-powered dating app that revolutionizes how you connect with others. Our advanced AI matches you with people who share your values, interests, and personality traits.",
      image: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/mindsync-mockup-1759756960049.webp`,
      color: "from-purple-600 to-pink-600",
      badge: "AI Matchmaking",
    },
    {
      title: "Enclave Connect",
      slug: "enclave-connect",
      description:
        "A unified digital platform that simplifies daily society tasks and keeps every resident connected in real time.",
      image: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/enclave-connect-mockup-1759756976416.webp`,
      color: "from-blue-600 to-cyan-600",
      badge: "Society Management",
    },
    {
      title: "Exora",
      slug: "exora",
      description:
        "Two-sided healthcare platform that helps doctors manage patients, assign follow-ups, share exercises, and stay in touch through real-time chat.",
      image: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/exora-banner-1759756411673.webp`,
      color: "from-green-600 to-teal-600",
      badge: "Healthcare",
    },
    {
      title: "Kinderland",
      slug: "kinderland",
      description:
        "Unlock a world of fun and learning! Educational games for curious young minds that make learning phonics, numbers, alphabets, and shapes an exciting adventure.",
      image: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/kinderland-case-study-1759145795626.webp`,
      color: "from-sky-400 to-green-400",
      badge: "Kids Learning",
    },
    {
      title: "Pink Signal",
      slug: "pink-signal",
      description:
        "Women safety app with instant SOS alerts, real-time location tracking, and trusted contacts. Stay safe, stay connected with 24/7 protection.",
      image: "/images/pin-signap-banner-image.png",
      color: "from-pink-600 to-rose-600",
      badge: "Women Safety",
    },
    {
      title: "FitOrbit",
      slug: "fit-orbit",
      description:
        "Your ultimate fitness companion. Build custom workout routines, track progress with detailed analytics, and achieve your fitness goals with an extensive exercise library.",
      image: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/fitnest-app-mockup-1759749065112.webp`,
      color: "from-[#58CBD1] to-[#3da9b0]",
      badge: "Fitness & Workout",
    },
    {
      title: "ServiceSquad",
      slug: "service-squad",
      description:
        "Professional home services at your doorstep. Book verified professionals for cleaning, repairs, beauty, and more with live tracking and secure payments.",
      image: "/images/service-squad-banner.webp",
      color: "from-[#FF6B35] to-[#004E89]",
      badge: "Home Services",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="">
        <div className="container max-w-7xl mx-auto main-section-padding-top">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Innovative Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Products
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore our cutting-edge products designed to solve real-world
              problems and enhance everyday experiences through innovative
              technology.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container max-w-7xl mx-auto main-section-padding-bottom !pt-0">
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Link
              key={index}
              href={`/x/product-listing/${product.slug}`}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Image Section */}
              <div className="relative lg:max-h-[400px] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-10`}
                />
                <Image
                  src={product.image}
                  alt={product.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-block bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-medium shadow-lg`}
                  >
                    {product.badge}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5">
                <h2
                  className={`text-3xl font-bold text-gray-900 mb-4 group-hover:text-opacity-60 group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${product.color} transition-all duration-300`}
                >
                  {product.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                  {product.description}
                </p>

                {/* CTA */}
                <div
                  className={`inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r ${product.color} font-semibold group-hover:gap-2 transition-all duration-300`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 text-purple-600 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

              {/* Decorative Gradient Border on Hover */}
              <div
                className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
              >
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r ${product.color} opacity-5`}
                ></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Have a Product Idea?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's bring your vision to life. Our team specializes in building
              innovative products that make a difference.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 mt-6"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
