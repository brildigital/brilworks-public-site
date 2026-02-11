"use client";
import {
  Check,
  ChevronRight,
  GraduationCap,
  Shield,
  Sparkles,
  Star,
  Users,
  Brain,
  Award,
  Clock,
  BookOpen,
  Globe,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { scrollToSection } from "../lib/commonFunction";
import Image from "next/image";

const CourseSphere = () => {
  return (
    <div>
      <section className="pt-16">
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: 'linear-gradient(to right, #ccfbf1, #b2f5ea)', color: '#0d9488' }}>
                <Sparkles className="w-4 h-4" />
                <span>Online Learning Platform</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Learn Without
                <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #359da8, #0d9488)' }}>
                  {" "}
                  Limits
                </span>
              </h1>
              <p className="text-xl text-gray-600 md:!mb-8 !mb-5 leading-relaxed">
                Discover thousands of courses from expert instructors. Build real projects, gain certifications, and grow your career with guided learning paths.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#download-app"
                  onClick={(e) => scrollToSection(e, "download-app")}
                  className="group text-white px-8 md:py-4 py-3 rounded-full font-medium hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                  style={{ background: 'linear-gradient(to right, #359da8, #0d9488)' }}
                >
                  Get Started
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="https://course-sphere-xi.vercel.app/"
                  target="_blank"
                  className="bg-white text-gray-900 px-8 md:py-4 py-3 rounded-full font-medium border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 text-center"
                >
                  Visit Website
                </Link>
              </div>
              <div className="mt-12 flex items-center md:space-x-10 space-x-5">
                <div>
                  <div className="text-3xl font-bold text-gray-900">1000+</div>
                  <div className="text-sm text-gray-600">Courses</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">50K+</div>
                  <div className="text-sm text-gray-600">Learners</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Instructors</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl transform rotate-3" style={{ background: 'linear-gradient(to bottom right, #ccfbf1, #b2f5ea)' }}></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden p-2">
                <div className="flex items-center justify-center rounded-2xl" style={{ background: 'linear-gradient(to bottom right, #359da8, #0d9488)' }}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/course-sphere-1770795626948.webp`}
                    alt="CourseSphere App"
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

      {/* Why Choose CourseSphere Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: 'linear-gradient(to right, #ccfbf1, #b2f5ea)', color: '#0d9488' }}>
              <Star className="w-4 h-4" />
              <span>Why Choose CourseSphere</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide everything you need to succeed in your learning journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: UserCheck,
                title: "Expert Instructors",
                description:
                  "Learn from industry professionals with years of real-world experience and proven teaching methods.",
              },
              {
                icon: Users,
                title: "Vibrant Community",
                description:
                  "Join thousands of learners worldwide. Collaborate, share knowledge, and grow together.",
              },
              {
                icon: Award,
                title: "Recognized Certificates",
                description:
                  "Earn certificates upon completion that are valued by employers and institutions globally.",
              },
              {
                icon: Clock,
                title: "Learn at Your Pace",
                description:
                  "Access courses anytime, anywhere. Study on your schedule with lifetime access to materials.",
              },
              {
                icon: Shield,
                title: "Quality Guaranteed",
                description:
                  "Every course is carefully reviewed to ensure high-quality content and effective learning outcomes.",
              },
              {
                icon: TrendingUp,
                title: "Always Updated",
                description:
                  "Course content is regularly updated to reflect the latest industry trends and best practices.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: 'linear-gradient(to bottom right, #359da8, #0d9488)',
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

      {/* How We Help You Section */}
      <section style={{ background: 'linear-gradient(to bottom right, #f0fdfa, #ecfdf5)' }}>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How We Help You
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you're here to learn or teach, we've got you covered
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* For Learners */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4" style={{ background: 'linear-gradient(to bottom right, #359da8, #0d9488)' }}>
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">For Learners</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Diverse Course Library</h4>
                  <p className="text-gray-600">
                    Access thousands of courses across various categories and skill levels.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Track Your Progress</h4>
                  <p className="text-gray-600">
                    Monitor your learning journey with detailed analytics and achievements.
                  </p>
                </div>
                <Link
                  href="https://course-sphere-xi.vercel.app/"
                  target="_blank"
                  className="inline-flex items-center mt-6 px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
                  style={{ background: 'linear-gradient(to right, #359da8, #0d9488)', color: 'white' }}
                >
                  Start Learning
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* For Instructors */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4" style={{ background: 'linear-gradient(to bottom right, #359da8, #0d9488)' }}>
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">For Instructors</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Easy Course Creation</h4>
                  <p className="text-gray-600">
                    Upload and manage your courses with our intuitive course builder.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Reach Global Audience</h4>
                  <p className="text-gray-600">
                    Share your expertise with learners from around the world and grow your impact.
                  </p>
                </div>
                <Link
                  href="https://course-sphere-xi.vercel.app/"
                  target="_blank"
                  className="inline-flex items-center mt-6 px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
                  style={{ background: 'linear-gradient(to right, #359da8, #0d9488)', color: 'white' }}
                >
                  Become an Instructor
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Discover Courses Across Diverse Topics
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Unlock your potential with courses in multiple categories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Development", desc: "Web, Mobile, Programming & more" },
              { name: "Business", desc: "Entrepreneurship, Management, Sales" },
              { name: "Finance & Accounting", desc: "Trading, Investing, Analysis" },
              { name: "IT & Software", desc: "Certifications, Security, DevOps" },
              { name: "Office Productivity", desc: "Microsoft, Google, SAP tools" },
              { name: "Personal Development", desc: "Leadership, Productivity, Skills" },
              { name: "Design", desc: "Graphic, Web, UX, 3D & Animation" },
              { name: "Marketing", desc: "Digital, SEO, Social Media" },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border"
                style={{ borderColor: '#359da8' }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ background: 'linear-gradient(to bottom right, #359da8, #0d9488)' }}>
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm text-center">{category.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section style={{ background: 'linear-gradient(to bottom right, #f0fdfa, #ecfdf5)' }}>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features to enhance your learning experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "📚",
                title: "Diverse Course Library",
                description: "Thousands of courses across multiple categories",
              },
              {
                icon: "👨‍🏫",
                title: "Expert Instructors",
                description: "Learn from industry professionals",
              },
              {
                icon: "🏆",
                title: "Certificates",
                description: "Earn recognized certificates upon completion",
              },
              {
                icon: "📊",
                title: "Progress Tracking",
                description: "Monitor your learning journey",
              },
              {
                icon: "🌐",
                title: "Global Community",
                description: "Join thousands of learners worldwide",
              },
              {
                icon: "⏰",
                title: "Learn at Your Pace",
                description: "Lifetime access to course materials",
              },
              {
                icon: "📱",
                title: "Mobile Access",
                description: "Learn anywhere, anytime",
              },
              {
                icon: "🔄",
                title: "Regular Updates",
                description: "Content updated with latest trends",
              },
              {
                icon: "✅",
                title: "Quality Guaranteed",
                description: "Carefully reviewed course content",
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

      {/* How It Works Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How CourseSphere Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to start your learning journey
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Explore Courses",
                description: "Browse thousands of courses across diverse topics",
              },
              {
                step: "2",
                title: "Enroll & Learn",
                description: "Start learning at your own pace",
              },
              {
                step: "3",
                title: "Build Projects",
                description: "Apply knowledge with real projects",
              },
              {
                step: "4",
                title: "Get Certified",
                description: "Earn certificates and grow your career",
              },
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(to bottom right, #359da8, #0d9488)' }}>
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 3 && (
                  <ChevronRight className="hidden md:block absolute top-8 -right-4 w-8 h-8" style={{ color: '#359da8' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section
        id="download-app"
        style={{ background: 'linear-gradient(to right, #359da8, #0d9488)' }}
      >
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center text-white">
            <GraduationCap className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start Learning Today! 🚀
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join 50K+ learners discovering thousands of courses from expert instructors. Build real projects, gain certifications, and grow your career with guided learning paths.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
              <a
                href="https://course-sphere-xi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center space-x-3 bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-800 transition-all duration-300 hover:shadow-xl"
              >
                <Globe className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">VISIT</div>
                  <div className="text-lg font-semibold">CourseSphere</div>
                </div>
              </a>
            </div>
            <div className="mt-10 flex items-center justify-center space-x-8 flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span>1000+ Courses</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span>Expert Instructors</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span>Certificates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={{ background: 'linear-gradient(to bottom right, #359da8, #0d9488)' }}>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="bg-white rounded-3xl p-12 md:p-16 text-center">
            <Brain className="w-16 h-16 mx-auto mb-6" style={{ color: '#359da8' }} />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Learn Without Limits?
            </h2>
            <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
              Discover thousands of courses from expert instructors. Build real projects, gain certifications, and grow your career with guided learning paths. Your learning journey starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Link
                href="https://course-sphere-xi.vercel.app/"
                target="_blank"
                className="inline-flex items-center text-white px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all duration-300"
                style={{ background: 'linear-gradient(to right, #359da8, #0d9488)' }}
              >
                Get Started
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

export default CourseSphere;
