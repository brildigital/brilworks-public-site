"use client";
// import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Rocket,
  Settings,
  Brain,
  Zap,
  Target,
  HeartHandshake,
} from "lucide-react";
import ButtonV2 from "../Common/ButtonV2";
import { useRouter } from "next/navigation";

export function OnboardingSteps() {
  const router = useRouter();
  const steps = [
    {
      number: "01",
      title: "Free Consultation",
      subtitle: "Idea Review & Validation",
      description:
        "Share your idea with our experts. Get honest feedback, market validation, and a custom MVP roadmap - completely free.",
      icon: Brain,
      gradient: "from-cyber-blue/30 to-cyber-purple/30",
      buttonText: "Get Free Consultation",
      isPrimary: true,
      features: [
        "Expert idea assessment",
        "Market validation research",
        "Custom MVP roadmap",
        "Technical feasibility review",
      ],
      illustration: (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Central Brain/Idea Icon */}
          <div className="relative z-10">
            <div className="w-32 h-32 bg-gradient-to-br from-cyber-blue/40 to-cyber-purple/40 rounded-full flex items-center justify-center backdrop-blur-lg shadow-2xl">
              <Brain className="h-16 w-16 text-cyber-blue" />
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 rounded-2xl flex items-center justify-center float-animation backdrop-blur-sm">
            <CheckCircle className="h-8 w-8 text-cyber-blue" />
          </div>
          <div
            className="absolute top-8 right-8 w-12 h-12 bg-gradient-to-br from-cyber-purple/20 to-cyber-blue/20 rounded-xl flex items-center justify-center float-animation backdrop-blur-sm"
            style={{ animationDelay: "1s" }}
          >
            <Target className="h-6 w-6 text-cyber-purple" />
          </div>
          <div
            className="absolute bottom-8 left-12 w-14 h-14 bg-gradient-to-br from-cyber-blue/25 to-cyber-purple/25 rounded-2xl flex items-center justify-center float-animation backdrop-blur-sm"
            style={{ animationDelay: "0.5s" }}
          >
            <Zap className="h-7 w-7 text-cyber-blue" />
          </div>

          {/* Connection Lines */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-48 h-48 border-2 border-dashed border-cyber-blue/20 rounded-full animate-spin"
              style={{ animationDuration: "20s" }}
            ></div>
          </div>
        </div>
      ),
    },
    {
      number: "02",
      title: "MVP Development",
      subtitle: "Rapid Prototyping",
      description:
        "Once validated, we build your MVP in days. See your idea come to life with core features and user feedback integration.",
      icon: Rocket,
      gradient: "from-cyber-orange/30 to-cyber-blue/30",
      buttonText: "Start MVP Build",
      isPrimary: false,
      features: [
        "Core feature development",
        "User-friendly interface",
        "Basic integrations",
        "Feedback collection system",
      ],
      illustration: (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Central Rocket */}
          <div className="relative z-10">
            <div className="w-32 h-32 bg-gradient-to-br from-cyber-orange/40 to-cyber-blue/40 rounded-full flex items-center justify-center backdrop-blur-lg shadow-2xl">
              <Rocket className="h-16 w-16 text-cyber-orange" />
            </div>
          </div>

          {/* Building Blocks */}
          <div className="absolute top-4 left-16 w-8 h-8 bg-cyber-orange/30 rounded rotate-12 float-animation"></div>
          <div
            className="absolute top-12 right-12 w-6 h-6 bg-cyber-blue/30 rounded-lg rotate-45 float-animation"
            style={{ animationDelay: "0.8s" }}
          ></div>
          <div
            className="absolute bottom-4 left-8 w-10 h-6 bg-cyber-purple/30 rounded-full float-animation"
            style={{ animationDelay: "1.2s" }}
          ></div>
          <div
            className="absolute bottom-12 right-16 w-7 h-7 bg-cyber-orange/25 rounded rotate-45 float-animation"
            style={{ animationDelay: "0.3s" }}
          ></div>

          {/* Progress Indicators */}
          <div className="absolute top-20 left-4">
            <div className="flex flex-col space-y-2">
              <div className="w-12 h-1 bg-cyber-orange rounded-full"></div>
              <div className="w-8 h-1 bg-cyber-blue rounded-full"></div>
              <div className="w-10 h-1 bg-cyber-purple rounded-full"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: "03",
      title: "Production Ready",
      subtitle: "Scale & Launch",
      description:
        "Transform your MVP into a production-ready application with advanced features, integrations, and white-glove support.",
      icon: Settings,
      gradient: "from-cyber-purple/30 to-cyber-orange/30",
      buttonText: "Scale to Production",
      isPrimary: false,
      features: [
        "Advanced feature development",
        "Full integrations & APIs",
        "Performance optimization",
        "24/7 white-glove support",
      ],
      illustration: (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Central Gear */}
          <div className="relative z-10">
            <div className="w-32 h-32 bg-gradient-to-br from-cyber-purple/40 to-cyber-orange/40 rounded-full flex items-center justify-center backdrop-blur-lg shadow-2xl">
              <Settings
                className="h-16 w-16 text-cyber-purple animate-spin"
                style={{ animationDuration: "8s" }}
              />
            </div>
          </div>

          {/* Surrounding Gears */}
          <div className="absolute top-6 left-20 w-12 h-12 bg-gradient-to-br from-cyber-orange/30 to-cyber-purple/30 rounded-full flex items-center justify-center float-animation">
            <Settings
              className="h-6 w-6 text-cyber-orange animate-spin"
              style={{ animationDuration: "6s", animationDirection: "reverse" }}
            />
          </div>
          <div className="absolute bottom-8 right-16 w-16 h-16 bg-gradient-to-br from-cyber-purple/25 to-cyber-blue/25 rounded-full flex items-center justify-center float-animation">
            <Settings
              className="h-8 w-8 text-cyber-purple animate-spin"
              style={{ animationDuration: "10s" }}
            />
          </div>

          {/* Network Connections */}
          <div className="absolute top-16 right-8 w-4 h-4 bg-cyber-orange/40 rounded-full animate-pulse"></div>
          <div
            className="absolute bottom-16 left-12 w-3 h-3 bg-cyber-purple/40 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute top-24 left-6 w-2 h-2 bg-cyber-blue/40 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      ),
    },
    {
      number: "04",
      title: "Ongoing Support",
      subtitle: "Maintain & Grow",
      description:
        "Keep your app running smoothly with ongoing maintenance, updates, new features, and scaling support as you grow.",
      icon: HeartHandshake,
      gradient: "from-cyber-blue/30 to-cyber-orange/30",
      buttonText: "Get Support",
      isPrimary: false,
      features: [
        "Regular maintenance",
        "Feature updates",
        "Performance monitoring",
        "Growth optimization",
      ],
      illustration: (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Central Support Icon */}
          <div className="relative z-10">
            <div className="w-32 h-32 bg-gradient-to-br from-cyber-blue/40 to-cyber-orange/40 rounded-full flex items-center justify-center backdrop-blur-lg shadow-2xl">
              <HeartHandshake className="h-16 w-16 text-cyber-blue" />
            </div>
          </div>

          {/* Support Elements */}
          <div className="absolute top-8 left-12 w-8 h-8 bg-gradient-to-br from-cyber-blue/30 to-cyan-400/30 rounded-full flex items-center justify-center float-animation">
            <div className="w-2 h-2 bg-cyber-blue rounded-full"></div>
          </div>
          <div
            className="absolute top-6 right-16 w-6 h-6 bg-gradient-to-br from-cyber-orange/30 to-red-400/30 rounded-lg flex items-center justify-center float-animation"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="w-2 h-2 bg-cyber-orange rounded-full"></div>
          </div>
          <div
            className="absolute bottom-6 left-8 w-10 h-10 bg-gradient-to-br from-cyber-purple/25 to-pink-400/25 rounded-2xl flex items-center justify-center float-animation"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="w-3 h-3 bg-cyber-purple rounded-full"></div>
          </div>

          {/* Growth Chart */}
          <div className="absolute bottom-8 right-8 flex items-end space-x-1">
            <div className="w-2 h-4 bg-cyber-blue/40 rounded-t"></div>
            <div className="w-2 h-6 bg-cyber-orange/40 rounded-t"></div>
            <div className="w-2 h-8 bg-cyber-purple/40 rounded-t"></div>
            <div className="w-2 h-5 bg-cyber-blue/30 rounded-t"></div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 relative">
      {/* Background Graphics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-40 h-40 transform rotate-12 float-animation">
          <div className="w-full h-full bg-gradient-to-br from-cyber-purple/10 to-cyber-blue/10 rounded-full backdrop-blur-sm border border-cyber-purple/20 shadow-2xl"></div>
        </div>
        <div className="absolute bottom-40 left-20 w-28 h-28 transform -rotate-30 float-animation">
          <div className="w-full h-full bg-gradient-to-br from-cyber-orange/10 to-cyber-purple/10 rounded-2xl backdrop-blur-sm border border-cyber-orange/20 shadow-xl"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Your Journey from{" "}
            <span className="hologram-text">Idea to Success</span>
          </h2>
          <p className="text-xl text-cyber-gray max-w-3xl mx-auto">
            Our proven process helps you validate, build, and scale your product
            with expert guidance at every step.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content Side */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="text-6xl font-bold text-cyber-blue/30">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">{step.title}</h3>
                    <p className="text-cyber-orange text-lg">{step.subtitle}</p>
                  </div>
                </div>

                <p className="text-xl text-cyber-gray leading-relaxed">
                  {step.description}
                </p>

                <ul className="space-y-3">
                  {step.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-cyber-blue flex-shrink-0" />
                      <span className="text-cyber-gray">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* <Button
                  size="lg"
                  className={`${
                    step.isPrimary
                      ? "bg-gradient-to-r from-cyber-blue to-cyber-purple"
                      : "glass-morphism border-cyber-blue/30 hover:border-cyber-blue/50"
                  } px-8 py-4 text-lg font-semibold rounded-full transition-all transform hover:scale-105`}
                  variant={step.isPrimary ? "default" : "outline"}
                >
                  <step.icon className="mr-2 h-5 w-5" />
                  {step.buttonText}
                </Button> */}
                {step.isPrimary ? (
                  <ButtonV2
                    icon={<step.icon className="mr-2 h-5 w-5" />}
                    label={step.buttonText}
                    className="w-fit md:mt-8 mt-4 !bg-gradient-to-r from-cyber-blue to-cyber-purple !border-0 transition-all transform hover:scale-105"
                  />
                ) : (
                  <button
                    type="button"
                    className="flex items-center justify-center px-[30px] py-3 font-medium rounded-md md:mt-8 mt-4 glass-morphism border-cyber-blue/30 hover:border-cyber-blue/50"
                  >
                    <step.icon className="mr-2 h-5 w-5" /> {step.buttonText}
                  </button>
                )}
              </div>

              {/* Visual Side */}
              <div className="flex-1 flex justify-center">
                <div
                  className={`relative w-80 h-80 bg-gradient-to-br ${step.gradient} rounded-3xl backdrop-blur-lg border border-cyber-blue/20 shadow-2xl card-3d overflow-hidden`}
                >
                  <div className="absolute inset-4">{step.illustration}</div>

                  {/* Step Number Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl backdrop-blur-lg flex items-center justify-center border border-white/20">
                    <span className="text-lg font-bold">{step.number}</span>
                  </div>

                  {/* Step Title at Bottom */}
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <div className="bg-black/30 rounded-xl backdrop-blur-lg p-3 border border-white/10">
                      <div className="text-lg font-bold">{step.title}</div>
                      <div className="text-cyber-orange text-sm">
                        {step.subtitle}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="glass-morphism rounded-3xl p-12 border-2 border-cyber-blue/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/5 to-cyber-purple/5"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-4">
                Ready to Validate Your Idea?
              </h3>
              <p className="text-xl text-cyber-gray !mb-8">
                Get expert feedback and a custom roadmap - completely free, no
                strings attached.
              </p>
              <ButtonV2
                icon={<CheckCircle className="mr-2 h-6 w-6" />}
                label="Get FREE Consultation Now"
                className="w-fit md:mt-8 mt-4 mx-auto !border-0 !bg-gradient-to-r from-cyber-blue to-cyber-purple hover:!shadow-2xl hover:!shadow-cyber-blue/30 transition-all transform hover:scale-105"
              />
              {/* <Button
                size="lg"
                className="bg-gradient-to-r from-cyber-blue to-cyber-purple px-12 py-6 text-xl font-bold rounded-full hover:shadow-2xl hover:shadow-cyber-blue/30 transition-all transform hover:scale-105"
              >
                <CheckCircle className="mr-2 h-6 w-6" />
                Get FREE Consultation Now
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
