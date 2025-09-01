import { Star, Quote } from "lucide-react";

export function SocialProof() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder, HealthTech Startup",
      company: "MediConnect",
      content:
        "The free consultation saved me months of development time. They identified critical flaws in my initial approach and provided a roadmap that actually works.",
      rating: 5,
      avatar: "SC",
      gradient: "from-cyber-blue/30 to-cyber-purple/30",
      result: "Raised $500K seed round",
    },
    {
      name: "Marcus Rodriguez",
      role: "Tech Entrepreneur",
      company: "AutoFlow AI",
      content:
        "From idea to working MVP in 8 days. The validation process was thorough and the technical execution was flawless. Best investment I've made.",
      rating: 5,
      avatar: "MR",
      gradient: "from-cyber-orange/30 to-cyber-blue/30",
      result: "150% user growth in 2 months",
    },
    {
      name: "Emily Watson",
      role: "Product Manager",
      company: "RetailOptimize",
      content:
        "Their white-glove support during scaling was incredible. We went from MVP to enterprise-ready in record time with zero downtime.",
      rating: 5,
      avatar: "EW",
      gradient: "from-cyber-purple/30 to-cyber-orange/30",
      result: "Scaled to 10K+ users",
    },
  ];

  const logos = [
    { name: "TechCrunch", width: "w-32" },
    { name: "Product Hunt", width: "w-28" },
    { name: "Y Combinator", width: "w-36" },
    { name: "AngelList", width: "w-30" },
    { name: "Forbes", width: "w-24" },
  ];

  return (
    <section className="py-20 relative">
      {/* Background Graphics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 transform rotate-45">
          <div className="w-full h-full bg-gradient-to-br from-cyber-blue/10 to-cyber-orange/10 rounded-lg backdrop-blur-sm border border-cyber-blue/20"></div>
        </div>
        <div className="absolute bottom-20 right-32 w-32 h-32 transform -rotate-12">
          <div className="w-full h-full bg-gradient-to-br from-cyber-purple/10 to-cyber-blue/10 rounded-2xl backdrop-blur-sm border border-cyber-purple/20"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Featured In Section */}
        <div className="text-center mb-16">
          <p className="text-cyber-gray !mb-8">
            Trusted by founders featured in
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {logos.map((logo, index) => (
              <div
                key={index}
                className={`${logo.width} h-12 bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20 rounded-lg backdrop-blur-sm border border-cyber-blue/10 flex items-center justify-center`}
              >
                <span className="text-sm font-semibold text-cyber-gray">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            What <span className="hologram-text">Builders</span> Say
          </h2>
          <p className="text-xl text-cyber-gray max-w-3xl mx-auto">
            Real feedback from founders who turned their ideas into successful
            products
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-morphism rounded-3xl p-8 border border-cyber-blue/20 card-3d hover:border-cyber-blue/40"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${testimonial.gradient} rounded-2xl flex items-center justify-center backdrop-blur-lg shadow-xl`}
                >
                  <span className="text-lg font-bold">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-cyber-orange text-sm">
                    {testimonial.role}
                  </p>
                  <p className="text-cyber-gray text-xs">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-cyber-orange text-cyber-orange"
                  />
                ))}
              </div>

              <blockquote className="text-cyber-gray mb-6 relative">
                <Quote className="h-6 w-6 text-cyber-blue/30 absolute -top-2 -left-2" />
                <p className="pl-4">{testimonial.content}</p>
              </blockquote>

              <div className="pt-4 border-t border-cyber-blue/20">
                <div className="inline-flex items-center space-x-2 bg-cyber-blue/10 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-cyber-blue rounded-full"></div>
                  <span className="text-sm font-semibold text-cyber-blue">
                    {testimonial.result}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="glass-morphism rounded-3xl p-12 text-center border-2 border-cyber-purple/30">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-cyber-blue mb-2">
                500+
              </div>
              <div className="text-cyber-gray">Ideas Validated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyber-orange mb-2">
                200+
              </div>
              <div className="text-cyber-gray">MVPs Built</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyber-purple mb-2">
                95%
              </div>
              <div className="text-cyber-gray">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyber-blue mb-2">
                $50M+
              </div>
              <div className="text-cyber-gray">Funding Raised</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
