"use client";
import { useState } from "react";
import {
  ChevronDown,
  ExternalLink,
  Smartphone,
  Monitor,
  Database,
  Brain,
} from "lucide-react";
import { useRouter } from "next/navigation";
import ButtonV2 from "../Common/ButtonV2";

export function WorkGallery() {
  const router = useRouter();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "MediConnect",
      category: "HealthTech",
      icon: Monitor,
      gradient: "from-cyber-blue/30 to-cyber-purple/30",
      mockup: (
        <div className="relative w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl p-6 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative z-10">
            <div className="bg-white/10 rounded-xl p-4 mb-4 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              </div>
              <div className="text-xs font-mono text-white/70">
                MediConnect Dashboard
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-cyan-500/20 rounded-lg p-2 text-xs text-white/80">
                Patient Data
              </div>
              <div className="bg-blue-500/20 rounded-lg p-2 text-xs text-white/80">
                AI Insights
              </div>
            </div>
          </div>
        </div>
      ),
      description:
        "AI-powered patient management platform that connects healthcare providers with patients seamlessly.",
      timeline: "MVP in 5 days → Production in 3 weeks",
      results: [
        "500K+ seed funding raised",
        "2,000+ healthcare providers onboarded",
        "50,000+ patients served",
        "Featured in TechCrunch",
      ],
      tech: ["React", "Node.js", "AI/ML", "PostgreSQL"],
      challenge:
        "Complex healthcare compliance requirements and real-time patient data synchronization.",
      solution:
        "Built HIPAA-compliant architecture with real-time synchronization and AI-powered insights.",
    },
    {
      id: 2,
      title: "AutoFlow AI",
      category: "Business Automation",
      icon: Brain,
      gradient: "from-cyber-orange/30 to-cyber-blue/30",
      mockup: (
        <div className="relative w-full h-full bg-gradient-to-br from-orange-500/20 to-red-600/20 !rounded-2xl p-6 overflow-hidden">
          <div className="absolute inset-0 bg-circuit-pattern opacity-20"></div>
          <div className="relative z-10">
            <div className="bg-white/10 rounded-xl p-4 mb-4 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-bold text-white">
                  Workflow Automation
                </div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div className="space-y-2">
                <div className="bg-orange-500/30 rounded p-1 text-xs text-white/80">
                  Email Processing
                </div>
                <div className="bg-red-500/30 rounded p-1 text-xs text-white/80">
                  AI Analysis
                </div>
                <div className="bg-yellow-500/30 rounded p-1 text-xs text-white/80">
                  Auto Response
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      description:
        "Intelligent workflow automation platform that eliminates repetitive business tasks using AI.",
      timeline: "MVP in 4 days → Production in 2 weeks",
      results: [
        "150% user growth in 2 months",
        "40+ enterprise clients",
        "80% task automation rate",
        "$2M ARR in first year",
      ],
      tech: ["Python", "FastAPI", "OpenAI", "Redis"],
      challenge:
        "Creating AI agents that understand complex business workflows and can adapt to different industries.",
      solution:
        "Developed multi-agent AI system with custom training for various business verticals.",
    },
    {
      id: 3,
      title: "RetailOptimize",
      category: "E-commerce",
      icon: Smartphone,
      gradient: "from-cyber-purple/30 to-cyber-orange/30",
      mockup: (
        <div className="relative w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-2xl p-6 overflow-hidden">
          <div className="absolute inset-0 bg-hex-pattern opacity-15"></div>
          <div className="relative z-10">
            <div className="bg-white/10 rounded-xl p-3 mb-3 backdrop-blur-sm">
              <div className="text-xs font-bold text-white mb-2">
                Price Optimization
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-1 bg-purple-400 rounded"></div>
                <div className="text-xs text-white/80">+25% profit</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-1">
              <div className="bg-purple-500/20 rounded p-1 text-xs text-center text-white/70">
                Products
              </div>
              <div className="bg-pink-500/20 rounded p-1 text-xs text-center text-white/70">
                Analytics
              </div>
              <div className="bg-orange-500/20 rounded p-1 text-xs text-center text-white/70">
                Optimize
              </div>
            </div>
          </div>
        </div>
      ),
      description:
        "Smart inventory and pricing optimization platform for e-commerce businesses.",
      timeline: "MVP in 6 days → Production in 4 weeks",
      results: [
        "Scaled to 10K+ users",
        "25% increase in profit margins",
        "60% reduction in inventory costs",
        "Top 10 in Product Hunt",
      ],
      tech: ["Vue.js", "Django", "TensorFlow", "MongoDB"],
      challenge:
        "Real-time price optimization across multiple channels with complex inventory constraints.",
      solution:
        "Built ML-powered pricing engine with real-time market analysis and inventory forecasting.",
    },
    {
      id: 4,
      title: "DataVault",
      category: "Data Analytics",
      icon: Database,
      gradient: "from-cyber-blue/30 to-cyber-orange/30",
      mockup: (
        <div className="relative w-full h-full bg-gradient-to-br from-blue-500/20 to-green-600/20 rounded-2xl p-6 overflow-hidden">
          <div className="absolute inset-0 bg-data-pattern opacity-10"></div>
          <div className="relative z-10">
            <div className="bg-white/10 rounded-xl p-3 mb-3 backdrop-blur-sm">
              <div className="text-xs font-bold text-white mb-2">
                Real-time Analytics
              </div>
              <div className="flex space-x-1">
                <div className="w-1 h-6 bg-blue-400 rounded"></div>
                <div className="w-1 h-4 bg-green-400 rounded"></div>
                <div className="w-1 h-8 bg-cyan-400 rounded"></div>
                <div className="w-1 h-3 bg-blue-300 rounded"></div>
              </div>
            </div>
            <div className="text-xs text-white/60">500TB+ processed</div>
          </div>
        </div>
      ),
      description:
        "Enterprise data visualization platform that turns complex datasets into actionable insights.",
      timeline: "MVP in 7 days → Production in 5 weeks",
      results: [
        "50+ enterprise clients",
        "99.9% uptime achieved",
        "500TB+ data processed",
        "Series A funding secured",
      ],
      tech: ["React", "D3.js", "Apache Spark", "Elasticsearch"],
      challenge:
        "Processing massive datasets in real-time while maintaining intuitive user experience.",
      solution:
        "Implemented distributed data processing with intelligent caching and progressive loading.",
    },
  ];

  return (
    <section className="py-20 relative">
      {/* Background Graphics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-10 w-28 h-28 transform rotate-30 float-animation">
          <div className="w-full h-full bg-gradient-to-br from-cyber-purple/10 to-cyber-blue/10 rounded-3xl backdrop-blur-sm border border-cyber-purple/20"></div>
        </div>
        <div className="absolute bottom-32 left-16 w-20 h-20 transform -rotate-45 float-animation">
          <div className="w-full h-full bg-gradient-to-br from-cyber-orange/10 to-cyber-purple/10 rounded-xl backdrop-blur-sm border border-cyber-orange/20"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Our <span className="hologram-text">Success Stories</span>
          </h2>
          <p className="text-xl text-cyber-gray max-w-3xl mx-auto">
            Real projects built for real founders. From idea to production-ready
            applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-morphism !rounded-3xl border border-cyber-blue/20 overflow-hidden card-3d hover:border-cyber-blue/40"
            >
              {/* Project Header */}
              <div className="h-48 relative overflow-hidden">
                {project.mockup}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="flex items-center space-x-3"></div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-cyber-blue/30 rounded-full backdrop-blur-sm"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 bg-cyber-orange/30 rounded-full backdrop-blur-sm"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center backdrop-blur-lg shadow-xl`}
                  >
                    <project.icon className="h-6 w-6 text-cyber-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-cyber-orange text-sm">
                      {project.category}
                    </p>
                  </div>
                </div>
                <p className="text-cyber-gray !mb-4">{project.description}</p>

                <div className="inline-flex items-center space-x-2 bg-cyber-blue/10 px-3 py-1 rounded-full mb-4">
                  <div className="w-2 h-2 bg-cyber-blue rounded-full"></div>
                  <span className="text-sm font-semibold text-cyber-blue">
                    {project.timeline}
                  </span>
                </div>

                <button
                  onClick={() =>
                    setSelectedProject(
                      selectedProject === project.id ? null : project.id
                    )
                  }
                  variant="outline"
                  className="w-full flex items-center justify-center px-[30px] py-3 font-medium rounded-md glass-morphism border-cyber-blue/30 hover:border-cyber-blue/50 mb-4"
                >
                  <span>View Details</span>
                  <ChevronDown
                    className={`ml-2 h-4 w-4 transition-transform ${
                      selectedProject === project.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Expanded Details */}
                {selectedProject === project.id && (
                  <div className="space-y-4 pt-4 border-t border-[#017eeb33]">
                    <div>
                      <h5 className="font-semibold text-cyber-orange mb-2">
                        Challenge
                      </h5>
                      <p className="text-cyber-gray text-sm">
                        {project.challenge}
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-cyber-orange mb-2">
                        Solution
                      </h5>
                      <p className="text-cyber-gray text-sm">
                        {project.solution}
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-cyber-orange mb-2">
                        Key Results
                      </h5>
                      <ul className="space-y-1">
                        {project.results.map((result, index) => (
                          <li
                            key={index}
                            className="text-cyber-gray text-sm flex items-center"
                          >
                            <div className="w-1.5 h-1.5 bg-cyber-blue rounded-full mr-2"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-cyber-orange mb-2">
                        Tech Stack
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-cyber-blue/10 text-cyber-blue text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <ButtonV2
                      icon={<ExternalLink className="mr-2 h-4 w-4" />}
                      className="flex items-center justify-center px-[30px] py-3 !border-0 font-medium rounded-md !bg-gradient-to-r from-cyber-blue to-cyber-purple w-full"
                      label="Learn More"
                      redirect="/portfolio/"
                    ></ButtonV2>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
