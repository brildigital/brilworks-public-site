"use client";
import {
  Check,
  ChevronRight,
  Bot,
  Shield,
  Sparkles,
  Star,
  Video,
  FileText,
  Eye,
  Zap,
  Globe,
  BarChart3,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { scrollToSection } from "../lib/commonFunction";
import Image from "next/image";

const BrowseX = () => {
  return (
    <div>
      <section className="pt-16">
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: 'linear-gradient(to right, #f3e8ff, #e9d5ff)', color: '#6b21a8' }}>
                <Sparkles className="w-4 h-4" />
                <span>AI Web Automation</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Automate Any Web Task with
                <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #8c0edf, #a855f7)' }}>
                  {" "}
                  AI-Powered Intelligence
                </span>
              </h1>
              <p className="text-xl text-gray-600 md:!mb-8 !mb-5 leading-relaxed">
                BrowseX uses advanced AI to understand websites, extract data, fill forms, and complete complex workflows—all through simple natural language commands. Transform your browser into an intelligent assistant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://chromewebstore.google.com/detail/browsex-ai-web-automation/efedbcpajeeokngjgjebfnabmdlnealj?hl=en-GB&utm_source=ext_sidebar"
                  target="_blank"
                  className="group text-white px-8 md:py-4 py-3 rounded-full font-medium hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                  style={{ background: 'linear-gradient(to right, #8c0edf, #a855f7)' }}
                >
                  Install for Chrome
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#download-app"
                  onClick={(e) => scrollToSection(e, "download-app")}
                  className="bg-white text-gray-900 px-8 md:py-4 py-3 rounded-full font-medium border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 text-center"
                >
                  Watch Demo
                </Link>
              </div>
              <div className="mt-12 flex items-center md:space-x-10 space-x-5">
                <div>
                  <div className="text-3xl font-bold text-gray-900">No-Code</div>
                  <div className="text-sm text-gray-600">Automation</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">AI</div>
                  <div className="text-sm text-gray-600">Powered</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Secure</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl transform rotate-3" style={{ background: 'linear-gradient(to bottom right, #f3e8ff, #e9d5ff)' }}></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden p-2">
                <div className="flex items-center justify-center rounded-2xl" style={{ background: 'linear-gradient(to bottom right, #8c0edf, #a855f7)' }}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/browsex-1770795649689.webp`}
                    alt="BrowseX - AI Web Automation"
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

      {/* Why Choose BrowseX Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: 'linear-gradient(to right, #f3e8ff, #e9d5ff)', color: '#6b21a8' }}>
              <Star className="w-4 h-4" />
              <span>Why Choose BrowseX</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Intelligent Web Automation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stop clicking. Start automating. Transform your browser into an intelligent assistant.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: "Intelligent Task Automation",
                description:
                  "Tell BrowseX what you want in plain English. Our AI agent understands your goal, plans the steps, and executes them automatically—no coding required.",
              },
              {
                icon: Video,
                title: "Record & Replay Workflows",
                description:
                  "Record any web workflow once, then replay it with a single click. Perfect for repetitive tasks with parameterization and data-driven testing.",
              },
              {
                icon: BarChart3,
                title: "Smart Data Extraction",
                description:
                  "Extract structured data from any website with AI precision. Export to CSV, handle dynamic content, and extract from tables automatically.",
              },
              {
                icon: FileText,
                title: "Automated Form Filling",
                description:
                  "Let AI fill out forms based on your instructions or imported data. Perfect for job applications, surveys, and bulk data submission.",
              },
              {
                icon: Eye,
                title: "Vision-Powered Navigation",
                description:
                  "Our vision-enabled AI sees web pages like a human, understanding layouts and identifying elements even when traditional selectors fail.",
              },
              {
                icon: Shield,
                title: "Built-in Security",
                description:
                  "Firewall rules, URL filtering, privacy-first design with local processing, and anti-detection features for legitimate use cases.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: 'linear-gradient(to bottom right, #8c0edf, #a855f7)',
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
      <section style={{ background: 'linear-gradient(to bottom right, #faf5ff, #f3e8ff)' }}>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful automation capabilities at your fingertips
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🤖",
                title: "Natural Language Commands",
                description: "Describe tasks in plain English",
              },
              {
                icon: "🎥",
                title: "Workflow Recording",
                description: "Record and replay workflows",
              },
              {
                icon: "📊",
                title: "Data Extraction",
                description: "Extract structured data from websites",
              },
              {
                icon: "📝",
                title: "Form Automation",
                description: "Automated form filling",
              },
              {
                icon: "👁️",
                title: "Vision-Powered",
                description: "AI sees pages like a human",
              },
              {
                icon: "🗣️",
                title: "Voice Commands",
                description: "Speech-to-text for hands-free control",
              },
              {
                icon: "🛡️",
                title: "Security Features",
                description: "Firewall rules and privacy controls",
              },
              {
                icon: "🔄",
                title: "Multi-Tab Support",
                description: "Handle complex workflows",
              },
              {
                icon: "📈",
                title: "Google Sheets Integration",
                description: "Data-driven testing",
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
              How BrowseX Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to automate your web workflows
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Install & Configure",
                description: "Add BrowseX to Chrome and connect your AI model",
              },
              {
                step: "2",
                title: "Give Commands",
                description: "Describe what you want in natural language",
              },
              {
                step: "3",
                title: "Watch the Magic",
                description: "AI plans and executes your task automatically",
              },
              {
                step: "4",
                title: "Save & Reuse",
                description: "Record workflows and replay anytime",
              },
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(to bottom right, #8c0edf, #a855f7)' }}>
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 3 && (
                  <ChevronRight className="hidden md:block absolute top-8 -right-4 w-8 h-8" style={{ color: '#a855f7' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section style={{ background: 'linear-gradient(to bottom right, #faf5ff, #f3e8ff)' }}>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Perfect for various professionals and use cases
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "For Marketers & Researchers",
                items: [
                  "Scrape competitor pricing and product data",
                  "Monitor social media mentions",
                  "Collect market research data across multiple sites",
                ],
              },
              {
                title: "For QA Testers",
                items: [
                  "Automate repetitive test scenarios",
                  "Data-driven testing with spreadsheet integration",
                  "Cross-browser workflow validation",
                ],
              },
              {
                title: "For Sales & Recruitment",
                items: [
                  "Automate LinkedIn outreach",
                  "Bulk job application submissions",
                  "CRM data entry and updates",
                ],
              },
              {
                title: "For Data Analysts",
                items: [
                  "Extract tables and structured data",
                  "Monitor website changes",
                  "Aggregate data from multiple sources",
                ],
              },
              {
                title: "For Personal Productivity",
                items: [
                  "Fill out repetitive forms",
                  "Schedule appointments across platforms",
                  "Track package deliveries",
                ],
              },
            ].map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {useCase.title}
                </h3>
                <ul className="space-y-2">
                  {useCase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8c0edf' }} />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Highlights Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technical Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with advanced technology for reliability and performance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Advanced AI Architecture",
                items: [
                  "Planner Agent: Creates strategic execution plans",
                  "Navigator Agent: Executes with element-level precision",
                  "Vision Integration: Multimodal understanding",
                  "Retry Logic: Intelligent error handling",
                ],
              },
              {
                title: "Developer-Friendly",
                items: [
                  "Built with TypeScript & React",
                  "Puppeteer-core integration",
                  "Extensible action system",
                  "LangChain-powered agent framework",
                ],
              },
              {
                title: "Performance & Reliability",
                items: [
                  "Efficient DOM tree processing",
                  "Smart element detection",
                  "Network request monitoring",
                  "Background service worker architecture",
                ],
              },
            ].map((highlight, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border"
                style={{ borderColor: '#8c0edf' }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {highlight.title}
                </h3>
                <ul className="space-y-2">
                  {highlight.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2">
                      <Zap className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8c0edf' }} />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported AI Models Section */}
      <section style={{ background: 'linear-gradient(to bottom right, #faf5ff, #f3e8ff)' }}>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Supported AI Models
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect BrowseX with your choice of AI provider
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              "OpenAI (GPT-4, GPT-4 Vision)",
              "Anthropic (Claude 3.5 Sonnet)",
              "Google (Gemini)",
              "Azure OpenAI",
              "Custom OpenAI-compatible endpoints",
            ].map((model, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border"
                style={{ borderColor: '#8c0edf' }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ background: 'linear-gradient(to bottom right, #8c0edf, #a855f7)' }}>
                  <Check className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700 font-medium text-center text-sm">
                  {model}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-lg border-2" style={{ borderColor: '#8c0edf' }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Free Tier</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-2">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8c0edf' }} />
                  <span className="text-gray-600">Core automation features</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8c0edf' }} />
                  <span className="text-gray-600">Manual recording & replay</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8c0edf' }} />
                  <span className="text-gray-600">Basic data extraction</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8c0edf' }} />
                  <span className="text-gray-600">Bring your own AI API key</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
              <div className="mb-4">
                <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ background: '#f3e8ff', color: '#6b21a8' }}>
                  Coming Soon
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pro</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-2">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-400" />
                  <span className="text-gray-600">Advanced vision features</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-400" />
                  <span className="text-gray-600">Unlimited recordings</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-400" />
                  <span className="text-gray-600">Priority support</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-400" />
                  <span className="text-gray-600">Team collaboration</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-400" />
                  <span className="text-gray-600">Google Sheets integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section
        id="download-app"
        style={{ background: 'linear-gradient(to right, #8c0edf, #a855f7)' }}
      >
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center text-white">
            <Bot className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Started Today! 🚀
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Ready to automate your web workflows? Install BrowseX for Chrome and transform your browser into an intelligent assistant. No credit card required. Bring your own AI API key.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
              <a
                href="https://chromewebstore.google.com/detail/browsex-ai-web-automation/efedbcpajeeokngjgjebfnabmdlnealj?hl=en-GB&utm_source=ext_sidebar"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center space-x-3 bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-800 transition-all duration-300 hover:shadow-xl"
              >
                <Globe className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">INSTALL FROM</div>
                  <div className="text-lg font-semibold">Chrome Web Store</div>
                </div>
              </a>
            </div>
            <div className="mt-10 flex items-center justify-center space-x-8 flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span>Bring Your Own AI Key</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span>100% Secure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Do I need coding skills to use BrowseX?",
                a: "No! BrowseX is designed for everyone. Just describe what you want in natural language.",
              },
              {
                q: "Is my data safe?",
                a: "Yes. BrowseX processes everything locally in your browser. Your AI API keys are stored securely and never leave your device.",
              },
              {
                q: "What websites does BrowseX work with?",
                a: "BrowseX works with almost any modern website, including dynamic JavaScript applications.",
              },
              {
                q: "Can I use BrowseX for commercial purposes?",
                a: "Yes, but please review our terms of service and respect website terms of use and robots.txt files.",
              },
              {
                q: "What AI models do you recommend?",
                a: "For best results, we recommend GPT-4 or Claude 3.5 Sonnet. Vision models are recommended for complex layouts.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={{ background: 'linear-gradient(to bottom right, #8c0edf, #a855f7)' }}>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="bg-white rounded-3xl p-12 md:p-16 text-center">
            <Zap className="w-16 h-16 mx-auto mb-6" style={{ color: '#8c0edf' }} />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Automate the Web?
            </h2>
            <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
              Stop clicking. Start automating. Transform your browser into an intelligent assistant with BrowseX. Save hours daily with AI-powered web automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Link
                href="https://chromewebstore.google.com/detail/browsex-ai-web-automation/efedbcpajeeokngjgjebfnabmdlnealj?hl=en-GB&utm_source=ext_sidebar"
                target="_blank"
                className="inline-flex items-center text-white px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all duration-300"
                style={{ background: 'linear-gradient(to right, #8c0edf, #a855f7)' }}
              >
                Install BrowseX
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

export default BrowseX;
