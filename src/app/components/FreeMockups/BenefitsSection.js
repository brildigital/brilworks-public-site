import { Smartphone, Palette, Lightbulb, Share } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Smartphone className="text-white text-xl" />,
      title: "Clickable Mockups",
      description:
        "Your idea transformed into interactive prototypes that feel like the real thing.",
    },
    {
      icon: <Palette className="text-white text-xl" />,
      title: "Professional Design",
      description:
        "Skip the designer hunt. Get pixel-perfect mockups that impress investors and co-founders.",
    },
    {
      icon: <Lightbulb className="text-white text-xl" />,
      title: "Crystal Clear Vision",
      description:
        "Finally see how your product flows, looks, and feels before writing a single line of code.",
    },
    {
      icon: <Share className="text-white text-xl" />,
      title: "Shareable Files",
      description:
        'Get files you can instantly share with your team, investors, or anyone who needs to "get it."',
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center lg:mb-16 md:mb-12 mb-8 scroll-reveal">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            data-testid="text-benefits-headline"
          >
            What You'll <span className="gradient-text">Actually Get</span>
          </h2>
          <p
            className="md:text-xl text-lg text-[#94a3b8] max-w-2xl mx-auto"
            data-testid="text-benefits-subheadline"
          >
            No fluff. No filler. Just what you need to make your idea feel real
            and shareable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl md:p-8 p-6 hover:bg-card/50 transition-all duration-300 scroll-reveal"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              data-testid={`card-benefit-${index}`}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-themeColor to-accent rounded-2xl flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3
                className="text-xl font-bold mb-4"
                data-testid={`text-benefit-title-${index}`}
              >
                {benefit.title}
              </h3>
              <p
                className="text-[#94a3b8]"
                data-testid={`text-benefit-description-${index}`}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center scroll-reveal">
          <div className="inline-flex items-center gap-4 bg-card/30 flex-wrap rounded-full px-8 py-4 border border-border">
            <span className="text-[#94a3b8]">Process:</span>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-[#017eeb33] text-themeColor rounded-full text-sm font-semibold">
                Idea
              </span>
              <span className="text-[#94a3b8]">→</span>
              <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                Mockup
              </span>
              <span className="text-[#94a3b8]">→</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                Share
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
