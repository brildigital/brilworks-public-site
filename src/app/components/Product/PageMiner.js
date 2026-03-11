"use client";
import {
  Check,
  ChevronRight,
  Workflow,
  Shield,
  Sparkles,
  Star,
  Video,
  Play,
  Code,
  Zap,
  Lock,
  Globe,
  Database,
  Webhook,
  Bug,
  FolderOpen,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { scrollToSection } from "../lib/commonFunction";

const PageMiner = () => {
  return (
    <div>
      <section className="pt-16">
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: 'linear-gradient(to right, #dbeafe, #bfdbfe)', color: '#1e40af' }}>
                <Sparkles className="w-4 h-4" />
                <span>Browser Automation & Web Scraping</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Automate Browser Workflows
                <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #3c74cb, #60a5fa)' }}>
                  {" "}
                  & Web Scraping
                </span>
              </h1>
              <p className="text-xl text-gray-600 md:!mb-8 !mb-5 leading-relaxed">
                PageMiner is a Chrome extension for browser automation, web scraping, and workflow building. Record actions, build custom automation flows, and automate repetitive web tasks directly in your browser.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://chromewebstore.google.com/detail/pageminer-browser-automat/ndnlpeknaoiemjgodbcippiidifcblac?hl=en-GB&utm_source=ext_sidebar"
                  target="_blank"
                  className="group text-white px-8 md:py-4 py-3 rounded-full font-medium hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                  style={{ background: 'linear-gradient(to right, #3c74cb, #60a5fa)' }}
                >
                  Install for Chrome
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#download-app"
                  onClick={(e) => scrollToSection(e, "download-app")}
                  className="bg-white text-gray-900 px-8 md:py-4 py-3 rounded-full font-medium border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 text-center"
                >
                  Learn More
                </Link>
              </div>
              <div className="mt-12 flex items-center md:space-x-10 space-x-5">
                <div>
                  <div className="text-3xl font-bold text-gray-900">Visual</div>
                  <div className="text-sm text-gray-600">Flow Builder</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">No-Code</div>
                  <div className="text-sm text-gray-600">Automation</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Secure</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl transform rotate-3" style={{ background: 'linear-gradient(to bottom right, #dbeafe, #bfdbfe)' }}></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden p-2">
                <div className="flex items-center justify-center rounded-2xl" style={{ background: 'linear-gradient(to bottom right, #3c74cb, #60a5fa)' }}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/pageminer-1770796389079.webp`}
                    alt="PageMiner - Browser Automation & Web Scraping"
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

      {/* What PageMiner Does Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: 'linear-gradient(to right, #dbeafe, #bfdbfe)', color: '#1e40af' }}>
              <Star className="w-4 h-4" />
              <span>What PageMiner Does</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Automate & Extract with Ease
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              PageMiner helps automate interactions with websites and extract data by letting users create step-by-step workflows. These workflows can be recorded automatically or built manually using a visual interface.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Video,
                title: "Record Actions",
                description:
                  "Start recording from the extension interface, perform actions on any webpage, stop recording and review captured steps, then edit and save the flow.",
              },
              {
                icon: Code,
                title: "Build Flows Manually",
                description:
                  "Select command types from the interface, configure required fields, add commands step by step, and save the completed flow.",
              },
              {
                icon: Play,
                title: "Run Flows",
                description:
                  "Open a saved flow, navigate to the target website, run the flow and observe execution, then review results and logs after completion.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: 'linear-gradient(to bottom right, #3c74cb, #60a5fa)',
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

      {/* Core Features Section */}
      <section style={{ background: 'linear-gradient(to bottom right, #eff6ff, #dbeafe)' }}>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Core Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful automation and scraping capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Workflow,
                title: "Visual Flow Builder",
                description:
                  "Create automation flows using a visual interface. Record browser actions such as clicks, typing, and navigation. Manually add and edit automation commands. Drag and reorder steps in a flow. View the flow structure in real time while building.",
              },
              {
                icon: Zap,
                title: "Workflow Automation",
                description:
                  "Run automated sequences on any website. Click buttons and links, fill and submit forms, navigate between pages, scroll and interact with dynamic content, execute custom JavaScript, and extract and store data during execution.",
              },
              {
                icon: Database,
                title: "Web Scraping",
                description:
                  "Extract data from websites using selectors. Scrape text, links, and element attributes. Use CSS selectors for targeting elements. Handle paginated content, store scraped data in variables, and export extracted data in JSON or CSV format.",
              },
              {
                icon: Webhook,
                title: "Integrations",
                description:
                  "Connect PageMiner workflows with external services. Webhooks for triggering external automation platforms, REST API calls with authentication, Google Sheets for data export, Slack and Discord notifications, and Airtable and Notion for structured data storage.",
              },
              {
                icon: Bug,
                title: "Debugging and Logs",
                description:
                  "Monitor and troubleshoot automation runs with step-by-step execution, detailed execution logs, variable inspection, and error tracking and reporting.",
              },
              {
                icon: FolderOpen,
                title: "Flow Management",
                description:
                  "Organize and reuse automation workflows. Save and manage multiple flows, import and export flows as JSON, use templates for common automation tasks, and support for variable substitution within flows.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: 'linear-gradient(to bottom right, #3c74cb, #60a5fa)',
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
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How PageMiner Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple ways to create and run automation workflows
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Record Actions",
                description: "Start recording, perform actions, stop and review, then edit and save",
              },
              {
                step: "2",
                title: "Build Manually",
                description: "Select commands, configure fields, add steps, and save the flow",
              },
              {
                step: "3",
                title: "Run Flows",
                description: "Open flow, navigate to site, run and observe, review results",
              },
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(to bottom right, #3c74cb, #60a5fa)' }}>
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 2 && (
                  <ChevronRight className="hidden md:block absolute top-8 -right-4 w-8 h-8" style={{ color: '#60a5fa' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section style={{ background: 'linear-gradient(to bottom right, #eff6ff, #dbeafe)' }}>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What You Can Do
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Automate repetitive tasks and extract data efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🔄",
                title: "Automate Repetitive Actions",
                description: "Automate repetitive browser actions",
              },
              {
                icon: "📊",
                title: "Scrape Structured Data",
                description: "Scrape structured data from web pages",
              },
              {
                icon: "🔧",
                title: "Build Reusable Workflows",
                description: "Build reusable automation workflows",
              },
              {
                icon: "🔗",
                title: "Integrate with Tools",
                description: "Integrate browser automation with external tools",
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

      {/* Integrations Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect PageMiner with your favorite tools and services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Webhooks", desc: "Trigger external automation platforms" },
              { name: "REST API", desc: "API calls with authentication" },
              { name: "Google Sheets", desc: "Export data to spreadsheets" },
              { name: "Slack", desc: "Send notifications to Slack" },
              { name: "Discord", desc: "Discord notifications" },
              { name: "Airtable", desc: "Structured data storage" },
              { name: "Notion", desc: "Store data in Notion" },
              { name: "JSON/CSV", desc: "Export data in multiple formats" },
            ].map((integration, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border"
                style={{ borderColor: '#3c74cb' }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ background: 'linear-gradient(to bottom right, #3c74cb, #60a5fa)' }}>
                  <Webhook className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                  {integration.name}
                </h3>
                <p className="text-gray-600 text-sm text-center">{integration.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section
        id="download-app"
        style={{ background: 'linear-gradient(to right, #3c74cb, #60a5fa)' }}
      >
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center text-white">
            <Workflow className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start Automating Today! 🚀
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Install PageMiner and start automating browser workflows, scraping data, and building custom automation flows. Record actions, build flows manually, or run saved workflows—all directly in your browser.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
              <a
                href="https://chromewebstore.google.com/detail/pageminer-browser-automat/ndnlpeknaoiemjgodbcippiidifcblac?hl=en-GB&utm_source=ext_sidebar"
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
                <span>Visual Flow Builder</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span>No-Code Automation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span>100% Secure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Security Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="bg-white rounded-3xl p-12 md:p-16 shadow-xl border border-gray-100">
            <div className="text-center mb-12">
              <Lock className="w-16 h-16 mx-auto mb-6" style={{ color: '#3c74cb' }} />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Privacy & Security
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Your data privacy is our priority
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "No Data Collection",
                  description: "The developer has disclosed that it will not collect or use your data",
                },
                {
                  title: "Not Sold to Third Parties",
                  description: "Your data is not being sold to third parties outside approved use cases",
                },
                {
                  title: "Privacy Policy",
                  description: "See the developer's privacy policy for complete details",
                },
                {
                  title: "Secure Processing",
                  description: "All automation runs locally in your browser for maximum security",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 rounded-xl"
                  style={{ background: 'linear-gradient(to bottom right, #eff6ff, #dbeafe)' }}
                >
                  <Shield className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: '#3c74cb' }} />
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
      <section style={{ background: 'linear-gradient(to bottom right, #3c74cb, #60a5fa)' }}>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="bg-white rounded-3xl p-12 md:p-16 text-center">
            <Zap className="w-16 h-16 mx-auto mb-6" style={{ color: '#3c74cb' }} />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Automate Your Browser?
            </h2>
            <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
              PageMiner makes browser automation and web scraping simple. Record actions, build custom flows, and automate repetitive tasks—all with a visual interface. Start automating today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Link
                href="https://chromewebstore.google.com/detail/pageminer-browser-automat/ndnlpeknaoiemjgodbcippiidifcblac?hl=en-GB&utm_source=ext_sidebar"
                target="_blank"
                className="inline-flex items-center text-white px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all duration-300"
                style={{ background: 'linear-gradient(to right, #3c74cb, #60a5fa)' }}
              >
                Install PageMiner
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

export default PageMiner;
