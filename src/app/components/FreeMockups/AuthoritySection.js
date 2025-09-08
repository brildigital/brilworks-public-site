"use client";
import { Check } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AuthoritySection() {
  const router = useRouter();
  const achievements = [
    {
      title: "15+ Years Design Experience",
      description:
        "From Fortune 500 to seed-stage startups—I've seen what works.",
    },
    {
      title: "$50M+ in Funding Raised",
      description: "My mockups have helped founders secure serious funding.",
    },
    {
      title: "48-Hour Turnaround",
      description: "While others take weeks, you'll have mockups by Wednesday.",
    },
  ];

  const portfolioItems = [
    {
      name: "FinTech App",
      colors: "from-cyan-500/20 to-blue-600/20",
      accent: "bg-cyan-500/40",
      image:
        "https://brilworks-storyblok-assets.s3.eu-central-1.amazonaws.com/assets/b1a7a16ed4_stock-view-app.webp",
      redirect:
        "/portfolio/ai-driven-stock-prediction-platform-to-provide-traders-with-insights/",
      secondary: "bg-blue-500/30",
    },
    {
      name: "E-commerce",
      colors: "from-blue-500/20 to-cyan-600/20",
      accent: "bg-blue-500/40",
      image:
        "https://brilworks-storyblok-assets.s3.eu-central-1.amazonaws.com/assets/93672878ad_powerful-inventory-app.webp",
      redirect:
        "/portfolio/a-powerful-inventory-management-app-to-reduce-order-processing-time/",
      secondary: "bg-cyan-500/30",
    },
    {
      name: "Social Platform",
      colors: "from-teal-500/20 to-cyan-600/20",
      accent: "bg-teal-500/40",
      image:
        "https://brilworks-storyblok-assets.s3.eu-central-1.amazonaws.com/assets/d47ae82eac_connecting-pet-owners.webp",
      redirect: "/portfolio/pet-finding-app/",
      secondary: "bg-cyan-500/30",
    },
    {
      name: "HealthTech",
      colors: "from-cyan-600/20 to-teal-500/20",
      accent: "bg-cyan-600/40",
      image:
        "https://brilworks-storyblok-assets.s3.eu-central-1.amazonaws.com/assets/ed7dbf1d9c_healthcare-mobile-app.webp",
      redirect: "/portfolio/healthcare-mobile-app/",
      secondary: "bg-teal-500/30",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="scroll-reveal">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              data-testid="text-authority-headline"
            >
              Why I Do This <span className="gradient-text">Differently</span>
            </h2>
            <p
              className="text-lg md:text-xl text-[#94a3b8] !mb-8"
              data-testid="text-authority-description"
            >
              I've turned 200+ napkin sketches into funded startups. I know the
              exact shortcuts that make an idea feel real fast—without the usual
              designer drama or month-long waits.
            </p>

            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                  data-testid={`achievement-${index}`}
                >
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <Check className="text-[#0d0f11] text-sm" />
                  </div>
                  <div>
                    <h4
                      className="font-semibold mb-2"
                      data-testid={`text-achievement-title-${index}`}
                    >
                      {achievement.title}
                    </h4>
                    <p
                      className="text-[#94a3b8]"
                      data-testid={`text-achievement-description-${index}`}
                    >
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="scroll-reveal" style={{ animationDelay: "0.2s" }}>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="space-y-6">
                {portfolioItems.slice(0, 2).map((item, index) => (
                  <div
                    key={index}
                    onClick={() => router.push(item?.redirect)}
                    className={`aspect-[4/5] bg-gradient-to-br ${item.colors} rounded-2xl border border-border cursor-pointer p-4`}
                    data-testid={`portfolio-item-${index}`}
                  >
                    <div className="h-full bg-[#14161a] rounded-xl">
                      <Image
                        className="rounded-xl md:w-56 w-auto md:h-[275px] h-full"
                        src={item.image}
                        alt="tech-image"
                        width="565"
                        height="900"
                        priority
                      />
                      {/* <div className="space-y-2">
                        <div
                          className={`h-2 ${item.accent} rounded w-1/2`}
                        ></div>
                        <div className={`h-8 ${item.secondary} rounded`}></div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-6 bg-muted/50 rounded"></div>
                          <div className="h-6 bg-muted/50 rounded"></div>
                        </div>
                      </div> */}
                    </div>
                    <div className="text-center mt-2">
                      <p className="text-xs text-[#94a3b8]">{item.name}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-6 pt-8">
                {portfolioItems.slice(2, 4).map((item, index) => (
                  <div
                    key={index + 2}
                    onClick={() => router.push(item?.redirect)}
                    className={`aspect-[4/5] bg-gradient-to-br ${item.colors} rounded-2xl border border-border cursor-pointer p-4`}
                    data-testid={`portfolio-item-${index + 2}`}
                  >
                    <div className="h-full bg-[#14161a] rounded-xl">
                      {/* <div className="space-y-2">
                        <div
                          className={`h-3 ${item.accent} rounded w-1/3`}
                        ></div>
                        <div className={`h-8 ${item.secondary} rounded`}></div>
                        <div className="space-y-1">
                          <div className="h-2 bg-muted/50 rounded"></div>
                          <div className="h-2 bg-muted/50 rounded w-4/5"></div>
                          <div className="h-2 bg-muted/50 rounded w-3/5"></div>
                        </div>
                      </div> */}
                      <Image
                        className="rounded-xl md:w-56 w-auto md:h-[275px] h-full"
                        src={item.image}
                        alt="tech-image"
                        width="565"
                        height="900"
                        priority
                      />
                    </div>
                    <div className="text-center mt-2">
                      <p className="text-xs text-[#94a3b8]">{item.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-8">
              <p
                className="text-sm text-[#94a3b8]"
                data-testid="text-social-proof-stats"
              >
                <span className="text-accent font-semibold">
                  Trusted by 500+ founders
                </span>{" "}
                •
                <span className="text-themeColor font-semibold">
                  {" "}
                  200+ apps shipped
                </span>{" "}
                •
                <span className="text-green-400 font-semibold">
                  {" "}
                  $50M+ raised
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
