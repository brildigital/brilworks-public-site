import DownloadCaseStudy from "@/app/components/PortfolioGradient/DownloadCaseStudy";
import MoreSuccessStory from "@/app/components/PortfolioGradient/MoreSuccessStory";
import PortfolioGradientHero from "@/app/components/PortfolioGradient/PortfolioGradientHero";
import PortfolioSection2 from "@/app/components/PortfolioGradient/PortfolioSection2";
import ProjectChallengesSection from "@/app/components/PortfolioGradient/ProjectChallengesSection";
import ProjectOverviewSection from "@/app/components/PortfolioGradient/ProjectOverviewSection";

const page = () => {
  return (
    <>
      <PortfolioGradientHero />
      <PortfolioSection2 />
      <ProjectOverviewSection />
      <ProjectChallengesSection />
      <DownloadCaseStudy />
      <MoreSuccessStory />
    </>
  );
};

export default page;
