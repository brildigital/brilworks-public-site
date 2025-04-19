"use client";
import dynamic from "next/dynamic";
import ServiceHeroSection from "./ServiceHeroSection";
import CTASection from "../Common/CTASection";

const UseCases = dynamic(() => import("./UseCases"));
const Honors = dynamic(() => import("../Homepage/Honors"));
const IndustriesWeServe = dynamic(() =>
  import("../Homepage/IndustriesWeServe")
);
const ServicesSection = dynamic(() => import("../Common/ServicesSection"));
const MultipleCardWithIconBG = dynamic(() =>
  import("../Common/MultipleCardWithIconBG")
);
const IndustryUseCasesSuggestion = dynamic(() =>
  import("./IndustryUseCasesSuggestion")
);
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const GenerativeAIDevService = () => {
  const generativeAIServices = {
    title: "Our Generative AI Development Services",
    servicesList: [
      {
        title: "Generative AI Consulting",
        value: "gen-ai-service-1",
        description:
          "Feeling overwhelmed by the possibilities of generative AI? Our team of experts can help. We will guide you through a strategic assesment, identifying areas where generative AI can deliver most significant impact for your business.",
        imageSrc: "/images/v2/gen-ai-consulting.webp",
        imageAlt: "Generative ai img",
      },
      {
        title: "Generative AI Model Development",
        value: "gen-ai-service-2",
        description:
          "Don't settle for generic solutions.  Our team of engineers and data scientists builds custom generative AI models designed to address your unique challenges.",
        imageSrc: "/images/v2/generative-ai-model-development.webp",
        imageAlt: "Mobile Application dev img",
      },
      {
        title: "Generative AI Integration",
        value: "gen-ai-service-3",
        description:
          "Get the most out of your AI investment with seamless integration.  Our team takes care of the technical complexities, ensuring your custom generative AI model integrates smoothly into your existing workflows and systems.",
        imageSrc: "/images/v2/generative-ai-integration.webp",
        imageAlt: "Generative AI Integration img",
      },
      {
        title: "Upgrade and maintenance",
        value: "gen-ai-service-4",
        description:
          "Your generative AI model is an investment that needs nurturing.  Our team provides ongoing support and maintenance to ensure your model continues to function at peak performance.",
        imageSrc: "/images/v2/upgrade-and-maintenance.webp",
        imageAlt: "Upgrade and maintenance img",
      },
      {
        title: "AI Model fine tuning",
        value: "gen-ai-service-5",
        description:
          "As your business evolves, so should your AI model.  Our experts offer AI model fine-tuning services, meticulously adjusting the model to adapt to new data, user feedback, or changing business objectives.",
        imageSrc: "/images/v2/ai-model-fine-tuning.webp",
        imageAlt: "Saas application dev img",
      },
      {
        title: "Generative AI model replication ",
        value: "gen-ai-service-6",
        description:
          "Need your groundbreaking AI model in multiple locations or applications?  Our team can handle generative AI model replication, ensuring your custom solution is efficiently deployed across your entire organization. ",
        imageSrc: "/images/v2/gen-ai-model-replication.webp",
        imageAlt: "Generative replication img",
      },
    ],
  };

  const whatSetAsApartData = {
    title: "Here's what sets us apart",
    benefits: [
      {
        title: "Beyond Automation, Embrace Innovation",
        icon: "/images/v2/fi_8365133.svg",
        description:
          "We don't just automate tasks; we empower your AI to generate entirely new content, concepts, and ideas. ",
      },
      {
        title: "Scalable AI solutions",
        icon: "/images/v2/scale-project.svg",
        description:
          "The world is constantly evolving, and your AI shouldn't be left behind. Our solutions are built to scale and adapt alongside your business.",
      },
      {
        title: "We Speak Your Language, and AI's",
        icon: "/images/v2/fi_5403606.svg",
        description:
          "Our team of AI experts bridge the gap between your domain knowledge and the complex world of generative models.",
      },
      {
        title: "AI for Everyone",
        icon: "/images/v2/fi_10644631.svg",
        description:
          "We're not just developers; we're your partners in success. Clear communication and collaboration ensure your vision becomes a reality.",
      },
      {
        title: "Agility at the Core",
        icon: "/images/v2/fi_9608845.svg",
        description:
          "We stay ahead of the curve, continuously refining our techniques and integrating the latest advancements.  Your project benefits from cutting-edge technology without the learning curve.",
      },
    ],
  };
  return (
    <>
      <ServiceHeroSection
        title="Generative AI Development Services"
        description="We are pioneering the future of AI with our generative AI solutions. We are not just another AI company; we are a team of passionate experts who craft bespoke AI applications tailored to your unique needs."
        buttonText="Let's Build"
        imageSrc="/images/v2/generative-ai-banner.webp"
      />
      <CTASection
        titleClass="md:w-[70%]"
        descriptionClass="md:w-4/5"
        title="Transform Your Business with Generative AI"
        description="Unlock the vast potential of generative AI to creatively revolutionize how your business operates. Whether it's generating original content, designing innovative applications, or creating novel customer experiences, generative AI serves as a catalyst for significant productivity improvements and operational transformation. Utilize Amazon's Bedrock and Foundation Models, available through SageMaker Jumpstart, to train your models using your own internal data while maintaining its confidentiality. At Brilworks, we offer the depth of experience and technical expertise needed to launch or scale your generative AI initiatives effectively. Whether you are beginning your AI journey or seeking to enhance your existing model's infrastructure, our team is equipped to guide you through every step of the process, ensuring tailored solutions that drive real results."
        buttonText="Let’s Discuss"
        darkBackground={false}
      />
      <ServicesSection
        bgClass="bg-themeLight"
        sectionId="gen-ai-service"
        serviceData={generativeAIServices}
      />
      <MultipleCardWithIconBG data={whatSetAsApartData} />
      <UseCases />
      <IndustryUseCasesSuggestion />
      <Honors />
      <CTASection
        title="Data is the new oil, but AI is the refinery. Extract valuable insights from your data and make smarter business decisions with AI."
        description="Tell us your project idea and get a free consultation to create an outstanding digital product."
        buttonText="Schedule a free AI consultation"
      />
      <IndustriesWeServe darkBackground={false} />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </>
  );
};

export default GenerativeAIDevService;
