import { Shield, Clock, Users, Zap, Target, Trophy } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: Shield,
      title: "Risk-Free Validation",
      description:
        "Get expert feedback before spending a dime. Our free consultation helps you avoid costly mistakes and validates your market fit.",
      gradient: "from-cyber-blue/30 to-cyber-purple/30",
      features: [
        "Market research included",
        "Technical feasibility check",
        "Competitive analysis",
        "Revenue model validation",
      ],
    },
    {
      icon: Clock,
      title: "Lightning Fast Delivery",
      description:
        "While others take months, we deliver working MVPs in days. Our AI-accelerated development process cuts time-to-market by 80%.",
      gradient: "from-cyber-orange/30 to-cyber-blue/30",
      features: [
        "5-7 day MVP delivery",
        "Real-time progress updates",
        "Agile development process",
        "Rapid iteration cycles",
      ],
    },
    {
      icon: Users,
      title: "White-Glove Support",
      description:
        "Personal account manager, dedicated Slack channel, and 24/7 support. You're not just a client, you're our partner in success.",
      gradient: "from-cyber-purple/30 to-cyber-orange/30",
      features: [
        "Dedicated account manager",
        "Private Slack workspace",
        "24/7 priority support",
        "Regular strategy calls",
      ],
    },
    {
      icon: Zap,
      title: "Production-Ready Code",
      description:
        "No prototype code here. Everything we build is scalable, maintainable, and production-ready from day one.",
      gradient: "from-cyber-blue/30 to-cyber-orange/30",
      features: [
        "Enterprise-grade architecture",
        "Comprehensive documentation",
        "Automated testing",
        "Security best practices",
      ],
    },
    {
      icon: Target,
      title: "Outcome Focused",
      description:
        "We don't just build features, we build businesses. Every decision is made with your success metrics and growth goals in mind.",
      gradient: "from-cyber-orange/30 to-cyber-purple/30",
      features: [
        "KPI-driven development",
        "Growth-focused features",
        "Analytics integration",
        "Performance optimization",
      ],
    },
    {
      icon: Trophy,
      title: "Proven Track Record",
      description:
        "95% success rate with 500+ validated ideas. Our founders have raised over $50M in funding after working with us.",
      gradient: "from-cyber-purple/30 to-cyber-blue/30",
      features: [
        "95% success rate",
        "$50M+ funding raised",
        "500+ ideas validated",
        "Industry recognition",
      ],
    },
  ];

  return (
    <section className="py-20 relative">
      {/* Background Graphics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-36 h-36 transform rotate-12">
          <div className="w-full h-full bg-gradient-to-br from-cyber-blue/8 to-cyber-purple/8 rounded-full backdrop-blur-sm border border-cyber-blue/15"></div>
        </div>
        <div className="absolute bottom-32 right-16 w-24 h-24 transform -rotate-30">
          <div className="w-full h-full bg-gradient-to-br from-cyber-orange/8 to-cyber-blue/8 rounded-3xl backdrop-blur-sm border border-cyber-orange/15"></div>
        </div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 transform rotate-45">
          <div className="w-full h-full bg-gradient-to-br from-cyber-purple/8 to-cyber-orange/8 rounded-2xl backdrop-blur-sm border border-cyber-purple/15"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Why Choose <span className="hologram-text">Our Studio</span>
          </h2>
          <p className="text-xl text-cyber-gray max-w-3xl mx-auto">
            Unique benefits that set us apart from traditional development
            agencies and freelancers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-morphism rounded-3xl p-8 border border-cyber-blue/20 card-3d hover:border-cyber-blue/40 group"
            >
              {/* Icon Header */}
              <div
                className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${benefit.gradient} rounded-3xl flex items-center justify-center backdrop-blur-lg shadow-2xl group-hover:shadow-cyber-blue/20 transition-all`}
              >
                <benefit.icon className="h-10 w-10 text-cyber-blue" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-center mb-4">
                {benefit.title}
              </h3>
              <p className="text-cyber-gray text-center !mb-6 leading-relaxed">
                {benefit.description}
              </p>

              {/* Feature List */}
              <ul className="space-y-3">
                {benefit.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-cyber-blue rounded-full flex-shrink-0"></div>
                    <span className="text-cyber-gray text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-cyber-orange/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyber-purple/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity delay-100"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="glass-morphism rounded-3xl p-12 border-2 border-cyber-blue/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/5 to-cyber-purple/5"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-4">
                Ready to Experience the Difference?
              </h3>
              <p className="text-xl text-cyber-gray !mb-8 max-w-3xl mx-auto">
                Join hundreds of successful founders who chose validation over
                guesswork. Get your free consultation and see why our approach
                works.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyber-blue mb-2">
                    FREE
                  </div>
                  <div className="text-cyber-gray">Initial Consultation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyber-orange mb-2">
                    5-7 DAYS
                  </div>
                  <div className="text-cyber-gray">MVP Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyber-purple mb-2">
                    24/7
                  </div>
                  <div className="text-cyber-gray">Support Included</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
