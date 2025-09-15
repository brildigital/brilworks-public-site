import Link from "next/link";
import React from "react";
import { Lightbulb, Layout, Share2 } from "lucide-react";

const ExamplesOfFreeMockup = () => {
  const templates = [
    {
      title: "BNPL Mobile App",
      category: "Fintech / Buy Now Pay Later",
      description:
        "Shop now, pay later—your flexible finance partner for every purchase.",
      image: "/images/v2/free_ui_3.webp",
      link: "https://www.figma.com/proto/eEYqwCvskeu8QFUgrONQTh/Loan-Mobile-App?page-id=0%3A1&node-id=1-245&viewport=209%2C168%2C0.25&t=DBVjmX5VJg6R2AKe-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A245",
    },
    {
      title: "Shoplynx",
      category: "E-commerce / Shopping App",
      description:
        "A sleek, intuitive shopping experience powered by smart discovery and seamless checkout.",
      image: "/images/v2/free_ui_2.webp",
      link: "https://www.figma.com/proto/XmFrwohyMuTYYVPGMCGC1n/Shoplynx---Ecommerce?page-id=0%3A1&node-id=1-845&viewport=399%2C101%2C0.19&t=rwwxbSarzGRjUUeo-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A845",
    },
    {
      title: "NutriTrackr",
      category: "Health & Fitness / Calorie Tracker",
      description:
        "Track your calories, reach your goals—nutrition made effortless.",
      image: "/images/v2/free_ui_5.webp",
      link: "https://www.figma.com/proto/v1Pb54GPr5OA07O6cXUQrg/NutriTrackr--Mobile-App?page-id=0%3A1&node-id=1-61&viewport=268%2C169%2C0.26&t=3fIpb1zW7rDHEsTw-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A61",
    },
    {
      title: "CreAItive",
      category: "AI Tools / Social Media Assistant",
      description:
        "Create scroll-stopping social media posts and chat with your AI creative partner.",
      image: "/images/v2/free_ui_7.webp",
      link: "https://www.figma.com/proto/6smftAOB4XxlfvvzY9SFe4/CreAItive?page-id=0%3A1&node-id=[…]&t=A9t4VnfWY7a0AJoe-1&scaling=scale-down&content-scaling=fixed",
    },

    // {
    //   title: "EduMentor",
    //   category: "Educational / AI Tutor App",
    //   description:
    //     "Your AI-powered learning companion for personalized education and growth.",
    //   image: "/images/v2/free_ui_1.webp",
    //   link: "https://www.figma.com/proto/KylXJaBcjcicaHe7aE1XxF/EduMentor?page-id=0%3A1&node-id=1-220&viewport=305%2C215%2C0.19&t=oIQk1txbZ4OTllSN-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A220",
    // },
    // {
    //   title: "Novawallet",
    //   category: "Finance / Crypto Wallet",
    //   description:
    //     "Secure, sleek, and future-ready—your smart gateway to crypto and digital finance.",
    //   image: "/images/v2/free_ui_4.webp",
    //   link: "https://www.figma.com/proto/n0uZGkjqwHvK1CdpGIxW0r/Novawallet-Mobile-App?page-id=0%3A1&node-id=1-471&viewport=292%2C192%2C0.18&t=2Y630cqgonOxU2X3-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A471",
    // },
    // {
    //   title: "Event Management App",
    //   category: "Events / Lifestyle",
    //   description: "Plan, discover, and experience events with ease and style.",
    //   image: "/images/v2/free_ui_6.webp",
    //   link: "https://www.figma.com/proto/a6bNy5RqybAi7ecw0DbJ0e/Event-Management-Mobile-App?page-id=0%3A1&node-id=1-2&viewport=287%2C208%2C0.24&t=pNVg73ezv2O0Nvex-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
    // },

    // {
    //   title: "BookRide",
    //   category: "Transportation / Ride-Hailing App",
    //   description:
    //     "Effortless taxi booking with real-time tracking and secure payments.",
    //   image: "/images/v2/free_ui_8.webp",
    //   link: "https://www.figma.com/proto/gHOHR5UV39J9PLKkX8WfPi/Book-Ride-Mobile-App?page-id=0%3A1&node-id=1-4110&viewport=152%2C233%2C0.28&t=UJ3EyvyarnacPYwT-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A4110",
    // },
    // {
    //   title: "Vibe (Dating App)",
    //   category: "Dating / Lifestyle App",
    //   description:
    //     "Meaningful matches through emotional profiles, intention-first discovery, and gamified chats.",
    //   image: "/images/v2/free_ui_9.webp",
    //   link: "https://www.figma.com/proto/TyA9wGOuDKbEHGauALFv7t/Vibe?page-id=0%3A1&node-id=1-285&viewport=99%2C-106%2C0.36&t=VZuyDD1GkFKNGwVW-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A285",
    // },
  ];

  const howProcessWorks = [
    {
      icon: Lightbulb,
      title: "Share Your Idea",
      description:
        "Whether it’s a sketch, a concept, or just notes, send us what you’ve got.",
    },
    {
      icon: Layout,
      title: "Mockup Creation",
      description:
        "We design your mockups using modern UI/UX tools and best practices - wireframes → visual mockups → clickable prototype.",
    },
    {
      icon: Share2,
      title: "Delivery & Share-Ready Files",
      description:
        "You get the mockups along with design files you can share, export, or build upon.",
    },
  ];
  return (
    <section
      id="ui-portfolio"
      className="container max-w-[1280px] main-section-padding-top mx-auto"
    >
      <h2
        className="text-center text-3xl md:text-4xl lg:text-5xl font-bold !mb-6"
        data-testid="text-authority-headline"
      >
        How it <span className="gradient-text">Works / Process</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-10 mb-10 md:mb-20">
        {howProcessWorks.map((step, i) => (
          <div
            key={i}
            className="glass-effect p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-themeColor mb-4">
              <step.icon size={28} />
            </div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="mt-1 text-sm text-[#94a3b8] leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center lg:mb-7.5 mb-5">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold !mb-6"
          data-testid="text-authority-headline"
        >
          Explore Free <span className="gradient-text">Design Templates</span>
        </h2>

        <p className="text-lg md:text-xl text-[#94a3b8] max-w-2xl mx-auto">
          Browse our collection of premium UI/UX templates. Click any template
          to view and download.
        </p>
      </div>

      <div className="grid md:gap-4 gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {templates.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-effect rounded-xl shadow group hover:shadow-lg transition duration-300 overflow-hidden"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="view-template text-white text-sm font-semibold border border-white px-4 py-2 rounded-md">
                  View Template
                </span>
              </div>
            </div>
            <div className="p-5">
              <span className="text-xs font-semibold text-themeColor bg-blue-100 px-3 py-1 rounded-full">
                {item.category}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-[#94a3b8]">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ExamplesOfFreeMockup;
