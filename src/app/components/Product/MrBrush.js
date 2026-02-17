"use client";
import {
  Check,
  ChevronRight,
  Palette,
  Shield,
  Sparkles,
  Star,
  Brain,
  Image as ImageIcon,
  Wand2,
  Lock,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { scrollToSection } from "../lib/commonFunction";

const MrBrush = () => {
  return (
    <div>
      <section className="pt-16">
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: 'linear-gradient(to right, #fef3c7, #fed7aa)', color: '#92400e' }}>
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered Art Generation</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Unleash Your Creativity with
                <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #f6d651, #f97316)' }}>
                  {" "}
                  AI-Powered Art
                </span>
              </h1>
              <p className="text-xl text-gray-600 md:!mb-8 !mb-5 leading-relaxed">
                Transform your imagination into stunning visual art using advanced artificial intelligence. Whether you're a professional designer, content creator, or someone who simply loves exploring creative possibilities, Mr. Brush empowers you to generate unique, high-quality images with just a few taps.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#download-app"
                  onClick={(e) => scrollToSection(e, "download-app")}
                  className="group text-white px-8 md:py-4 py-3 rounded-full font-medium hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                  style={{ background: 'linear-gradient(to right, #f6d651, #f97316)' }}
                >
                  Start Creating Now
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.brilworksdigital.Mrbrush"
                  target="_blank"
                  className="bg-white text-gray-900 px-8 md:py-4 py-3 rounded-full font-medium border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 text-center"
                >
                  Download on Play Store
                </Link>
              </div>
              <div className="mt-12 flex items-center md:space-x-10 space-x-5">
                <div>
                  <div className="text-3xl font-bold text-gray-900">AI</div>
                  <div className="text-sm text-gray-600">Powered</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">8+</div>
                  <div className="text-sm text-gray-600">Art Styles</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Creative Freedom</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl transform rotate-3" style={{ background: 'linear-gradient(to bottom right, #fef3c7, #fed7aa)' }}></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden p-2">
                <div className="flex items-center justify-center rounded-2xl" style={{ background: 'linear-gradient(to bottom right, #f6d651, #f97316)' }}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/mrbrush-1770726392663.webp`}
                    alt="Mr. Brush App"
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

      {/* Why Choose Mr. Brush Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: 'linear-gradient(to right, #fef3c7, #fed7aa)', color: '#92400e' }}>
              <Star className="w-4 h-4" />
              <span>Why Choose Mr. Brush</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Creative AI Companion
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of digital art creation with cutting-edge AI technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Wand2,
                title: "Two Creation Modes",
                description:
                  "Text-to-Image: Describe what you want and watch AI bring it to life. Image-to-Image: Transform your photos with artistic styles and creative enhancements.",
              },
              {
                icon: Palette,
                title: "Diverse Artistic Styles",
                description:
                  "Choose from Painting, Comic, Manga, Cyberpunk, Abstract, Vaporwave, Ghibli styles, or keep it natural. Give your creations a unique personality.",
              },
              {
                icon: ImageIcon,
                title: "Flexible Aspect Ratios",
                description:
                  "Create in 1:1, 2:3, 3:2, or custom dimensions. Perfect for social media posts, portraits, landscapes, and banners.",
              },
              {
                icon: Zap,
                title: "Token-Based System",
                description:
                  "Fair token system with Starter, Pro, and Premium packs. Earn tokens by watching ads. Make creativity accessible to everyone.",
              },
              {
                icon: Shield,
                title: "Safe & Secure",
                description:
                  "Secure Firebase authentication, content reporting system, privacy policy transparency, and safe, moderated content for all users.",
              },
              {
                icon: Brain,
                title: "Intuitive Interface",
                description:
                  "Beautiful, modern interface with Home, Create, Search, Saved, and Profile sections. Navigate seamlessly through powerful tools.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className="w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6"
                  style={{
                    background: 'linear-gradient(to bottom right, #f6d651, #f97316)',
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

      {/* Key Features Section */}
      <section style={{ background: 'linear-gradient(to bottom right, #fef9e7, #fff7ed)' }}>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to create stunning AI-generated art
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🎨",
                title: "Text-to-Image",
                description: "Describe and create with incredible detail",
              },
              {
                icon: "🖼️",
                title: "Image-to-Image",
                description: "Transform photos with AI artistic styles",
              },
              {
                icon: "✨",
                title: "8+ Art Styles",
                description: "Painting, Comic, Manga, Cyberpunk & more",
              },
              {
                icon: "📐",
                title: "Flexible Ratios",
                description: "1:1, 2:3, 3:2, or custom dimensions",
              },
              {
                icon: "💎",
                title: "Token System",
                description: "Fair pricing with Starter, Pro, Premium packs",
              },
              {
                icon: "📥",
                title: "High Quality Downloads",
                description: "Download creations in high quality",
              },
              {
                icon: "📤",
                title: "Social Sharing",
                description: "Share artwork directly to social media",
              },
              {
                icon: "⭐",
                title: "Unlimited Favorites",
                description: "Save unlimited favorites for reference",
              },
              {
                icon: "🔔",
                title: "Push Notifications",
                description: "Stay updated with important notifications",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artistic Styles Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Diverse Artistic Styles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from a curated collection of artistic styles to give your creations a unique personality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Painting", desc: "Classic artistic renditions with brush stroke aesthetics" },
              { name: "Comic", desc: "Bold, graphic novel-inspired imagery" },
              { name: "Manga", desc: "Japanese anime and manga art style" },
              { name: "Cyberpunk", desc: "Futuristic, neon-lit dystopian visuals" },
              { name: "Abstract", desc: "Creative, non-representational art forms" },
              { name: "Vaporwave", desc: "Retro-futuristic aesthetic with vibrant colors" },
              { name: "Ghibli", desc: "Studio Ghibli-inspired enchanting animations" },
              { name: "Natural", desc: "Keep it natural with no style filters" },
            ].map((style, index) => (
              <div
                key={index}
                className="rounded-2xl p-6 border hover:shadow-lg transition-all duration-300"
                style={{ background: 'linear-gradient(to bottom right, #fef9e7, #fff7ed)', borderColor: '#f6d651' }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ background: 'linear-gradient(to bottom right, #f6d651, #f97316)' }}>
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                  {style.name}
                </h3>
                <p className="text-gray-600 text-sm text-center">{style.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{ background: 'linear-gradient(to bottom right, #fef9e7, #fff7ed)' }}>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How Mr. Brush Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to create stunning AI art
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                step: "1",
                title: "Choose Mode",
                description: "Select Text-to-Image or Image-to-Image",
              },
              {
                step: "2",
                title: "Describe/Upload",
                description: "Enter your prompt or upload a photo",
              },
              {
                step: "3",
                title: "Select Style",
                description: "Choose from 8+ artistic styles",
              },
              {
                step: "4",
                title: "Generate",
                description: "Watch AI create your masterpiece",
              },
              {
                step: "5",
                title: "Download & Share",
                description: "Save and share your creation",
              },
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(to bottom right, #f6d651, #f97316)' }}>
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 4 && (
                  <ChevronRight className="hidden md:block absolute top-8 -right-4 w-8 h-8" style={{ color: '#d4a017' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: 'linear-gradient(to right, #fef3c7, #fed7aa)', color: '#92400e' }}>
                <Star className="w-4 h-4" />
                <span>Perfect For</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Who Can Use Mr. Brush?
              </h2>
              <div className="space-y-4">
                {[
                  "Content creators looking for unique visuals",
                  "Social media enthusiasts wanting eye-catching posts",
                  "Artists seeking inspiration and creative tools",
                  "Marketers needing quick custom graphics",
                  "Anyone with an imagination ready to explore",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: '#f6d651' }} />
                    <p className="text-lg text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Powerful Features
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "High Quality Downloads",
                  "Social Media Sharing",
                  "Unlimited Favorites",
                  "Token Balance Tracking",
                  "Push Notifications",
                  "Creation History",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center space-x-2">
                      <Zap className="w-5 h-5" style={{ background: 'linear-gradient(to right, #f6d651, #f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} />
                      <p className="text-gray-700 font-medium">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section
        id="download-app"
        style={{ backgroundColor: '#f6d651' }}
      >
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center text-white">
            <Wand2 className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your Ideas into Art! 🎨
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Download Mr. Brush today and start creating masterpieces powered by artificial intelligence. Your creativity knows no bounds!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.brilworksdigital.Mrbrush"
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
            <div className="mt-10 flex items-center justify-center space-x-8 flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span>8+ Art Styles</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span>High Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Privacy Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="bg-white rounded-3xl p-12 md:p-16 shadow-xl border border-gray-100">
            <div className="text-center mb-12">
              <Lock className="w-16 h-16 mx-auto mb-6" style={{ background: 'linear-gradient(to right, #f6d651, #f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Safe & Secure
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Your privacy and security are our top priorities
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Secure Authentication",
                  description: "Powered by Firebase for safe account management",
                },
                {
                  title: "Content Reporting",
                  description: "System to maintain community standards",
                },
                {
                  title: "Privacy Transparency",
                  description: "Clear data usage guidelines and privacy policy",
                },
                {
                  title: "Moderated Content",
                  description: "Safe, moderated content for all users",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 rounded-xl"
                  style={{ background: 'linear-gradient(to bottom right, #fef9e7, #fff7ed)' }}
                >
                  <Shield className="w-6 h-6 mt-1 flex-shrink-0" style={{ background: 'linear-gradient(to right, #f6d651, #f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={{ backgroundColor: '#f6d651' }}>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="bg-white rounded-3xl p-12 md:p-16 text-center">
            <Palette className="w-16 h-16 mx-auto mb-6" style={{ background: 'linear-gradient(to right, #f6d651, #f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Unleash Your Creativity?
            </h2>
            <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
              Transform your ideas into breathtaking visual art. Download Mr. Brush today and start creating masterpieces powered by artificial intelligence. Your creativity knows no bounds!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center my-4">
              <Link
                href="https://play.google.com/store/apps/details?id=com.brilworksdigital.Mrbrush"
                target="_blank"
                className="inline-flex items-center text-white px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all duration-300"
                style={{ background: 'linear-gradient(to right, #f6d651, #f97316)' }}
              >
                Download Now
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-all duration-300"
              >
                Get in Touch
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MrBrush;
