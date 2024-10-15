"use client";
import { useMediaQuery } from "react-responsive";
import { usePathname } from "next/navigation";

const WhyShouldHireDevelopers = () => {
  const pathname = usePathname();

  const getDeveloperContent = () => {
    switch (pathname) {
      case "/hire-reactjs-developer/":
        return {
          title: "WHY SHOULD YOU HIRE REACT JS DEVELOPERS FROM BRILWORKS?",
          description: `Just as React is the hottest framework for frontend today, we’re the hottest React JS Development Company that can help you develop quality React applications in no time. Our Reactjs developers deliver bespoke solutions to all your needs with the right tools, expertise, and infrastructure.`,
          gridData: [
            {
              value: "65+",
              desc: (
                <>
                  React.js <br />
                  Projects Completed
                </>
              ),
            },
            {
              value: "30+",
              desc: (
                <>
                  React.js <br />
                  Experts Onboard
                </>
              ),
            },
            {
              value: "60%",
              desc: <>Saving In Salaries</>,
            },
            {
              value: "+4/-4",
              desc: (
                <>
                  Available to Work <br /> in Your Timezone
                </>
              ),
            },
            {
              value: "48-72",
              desc: (
                <>
                  Hours to Fill Most <br /> Roles
                </>
              ),
            },
            {
              value: "98%",
              desc: (
                <>
                  Project Success <br />
                  Rate
                </>
              ),
            },
          ],
        };
      case "/hire-java-developer/":
        return {
          title: "WHY SHOULD YOU HIRE JAVA DEVELOPERS FROM BRILWORKS?",
          description: `Whether you are looking for enterprise-level business solutions or just to build a compelling product, our java developers can help you get unstuck and stay on track. From developing your vision to the actual delivery of an innovative solution, our team has built over 50 enterprise-level applications and services in Java ranging across the education, financial services, healthcare, and data analytics sectors.`,
          gridData: [
            {
              value: "50+",
              desc: (
                <>
                  Java <br />
                  Projects Completed
                </>
              ),
            },
            {
              value: "30+",
              desc: (
                <>
                  Java <br />
                  Experts Onboard
                </>
              ),
            },
          ],
        };
      case "/hire-nodejs-developer/":
        return {
          title: "WHY SHOULD YOU HIRE NODE.JS DEVELOPERS FROM BRILWORKS?",
          description: `Node.js development is a very exciting field and we take pride in being Node experts. Our talent helps companies who have not had the experience yet of benefiting from this workhorse technology.`,
          gridData: [
            {
              value: "50+",
              desc: (
                <>
                  Node.js <br />
                  Projects Completed
                </>
              ),
            },
            {
              value: "30+",
              desc: (
                <>
                  Node.js <br />
                  Experts Onboard
                </>
              ),
            },
          ],
        };
      case "/hire-react-native-developer/":
        return {
          title: "WHY SHOULD YOU HIRE REACT NATIVE DEVELOPERS FROM BRILWORKS?",
          description: `React Native has taken the world by storm and rightly so. It’s fast, flexible, and cost-effective. We leverage React Native to deliver brilliant & unforgettable user experience to our clients. Our React Native developers focus on delivering flawless solutions with clear insights to meet all your business needs.`,
          gridData: [
            {
              value: "30+",
              desc: (
                <>
                  React Native <br />
                  Projects Completed
                </>
              ),
            },
            {
              value: "20+",
              desc: (
                <>
                  React Native <br />
                  Experts Onboard
                </>
              ),
            },
          ],
        };
      case "/hire-aws-developer/":
        return {
          title: "WHY SHOULD YOU HIRE AWS DEVELOPERS FROM BRILWORKS?",
          description: `We truly understand how important it is to have a stable, predictable, and cost-effective technology infrastructure. Our AWS experts possess in-depth knowledge & experience in cloud development & cloud deployment and can help you create an end-to-end solution that sets your business up for significant growth and innovation.`,
          gridData: [
            {
              value: "50+",
              desc: (
                <>
                  AWS <br />
                  Projects Completed
                </>
              ),
            },
            {
              value: "10+",
              desc: (
                <>
                  AWS Experts <br />
                  Onboard
                </>
              ),
            },
          ],
        };
      case "/hire-flutterflow-developer/":
        return {
          title: "What Makes a Top-Rated Flutterflow Company?",
          description: `We house expert Flutterflow developers with a deep understanding and mastery of the Flutterflow platform. They have extensive experience working with Flutterflow's tools and features, allowing them to create high-quality mobile applications efficiently.`,
          gridData: [
            {
              value: "20+",
              desc: (
                <>
                  Flutterflow <br />
                  Projects Completed
                </>
              ),
            },
            {
              value: "10+",
              desc: (
                <>
                  Flutterflow <br />
                  Experts
                </>
              ),
            },

            {
              value: "+4/-4",
              desc: (
                <>
                  Available to Work <br /> in Your Timezone
                </>
              ),
            },
            {
              value: "48-72",
              desc: (
                <>
                  Hours to Fill Most <br /> Roles
                </>
              ),
            },
            {
              value: "98%",
              desc: (
                <>
                  Project Success <br />
                  Rate
                </>
              ),
            },
            {
              value: "100%",
              desc: (
                <>
                  100% client <br />
                  satisfaction guarantee
                </>
              ),
            },
          ],
        };
      case "/hire-bubble-developer/":
        return {
          title: "Why Brilworks is Your Top Choice for Bubble Development?",
          description: `At Brilworks, we specialize in delivering top-tier custom applications built with Bubble. Our Bubble developers have a proven track record of success.`,
          gridData: [
            {
              value: "30+",
              desc: (
                <>
                  Experienced <br />
                  Bubble developers
                </>
              ),
            },
            {
              value: "20+",
              desc: (
                <>
                  Enterprise-level <br />
                  Applications
                </>
              ),
            },
            {
              value: "98%",
              desc: (
                <>
                  Project Success <br />
                  Rate
                </>
              ),
            },
            {
              value: "48-72",
              desc: (
                <>
                  Hours to Fill Most <br /> Roles
                </>
              ),
            },
            {
              value: "100%",
              desc: (
                <>
                  100% On-time <br />
                  Delivery
                </>
              ),
            },
            {
              value: "+4/-4",
              desc: (
                <>
                  Available to Work <br /> in Your Timezone
                </>
              ),
            },
          ],
        };
      case "/hire-adalo-developer/":
        return {
          title: "Why We're the Top Choice for Adalo App Development?",
          description: `At Brilworks, we specialize in delivering top-tier custom applications built with Bubble. Our Bubble developers have a proven track record of success.`,
          gridData: [
            {
              value: "98%",
              desc: (
                <>
                  Client <br />
                  Satisfaction Rate
                </>
              ),
            },
            {
              value: "30",
              desc: (
                <>
                  Successful Adalo <br />
                  Project Completed
                </>
              ),
            },
            {
              value: "10",
              desc: (
                <>
                  Team Member <br />
                  With Adalo Certification
                </>
              ),
            },
            {
              value: "10+",
              desc: (
                <>
                  Industries Served <br />
                  with Adalo Solution
                </>
              ),
            },
            {
              value: "+4/-4",
              desc: (
                <>
                  Available to Work <br /> in Your Timezone
                </>
              ),
            },
            {
              value: "48-72",
              desc: (
                <>
                  Hours to Fill Most <br /> Roles
                </>
              ),
            },
          ],
        };
      case "/hire-low-code-no-code-developer/":
        return {
          title: "No Code Low Code Development That Exceeds Expectations",
          description: `Partnering with you every step of the way; we are here to support you throughout the development process.`,
          gridData: [
            {
              value: "15+",
              desc: (
                <>
                  Certified <br />
                  Developers
                </>
              ),
            },
            {
              value: "50+",
              desc: <>Project Completed</>,
            },
            {
              value: "60%",
              desc: <>Saving In Salaries</>,
            },
            {
              value: "+4/-4",
              desc: (
                <>
                  Available to Work <br /> in Your Timezone
                </>
              ),
            },
            {
              value: "48-72",
              desc: (
                <>
                  Hours to Fill Most <br /> Roles
                </>
              ),
            },
          ],
        };
      case "/hire-mobile-app-developer/":
        return {
          title: "WHY SHOULD YOU HIRE MOBILE APP DEVELOPERS FROM BRILWORKS?",
          description: `MOobile Appe has taken the world by storm and rightly so. It’s fast, flexible, and cost-effective. We leverage React Native to deliver brilliant & unforgettable user experience to our clients. Our Mobile App developers focus on delivering flawless solutions with clear insights to meet all your business needs.`,
          gridData: [
            {
              value: "30+",
              desc: (
                <>
                  Mobile App <br />
                  Projects Completed
                </>
              ),
            },
            {
              value: "20+",
              desc: (
                <>
                  Mobile App <br />
                  Experts Onboard
                </>
              ),
            },
          ],
        };
      case "/hire-ui-ux-designer/":
        return {
          title: "WHY SHOULD YOU HIRE UI UX DEVELOPERS FROM BRILWORKS?",
          description: `We leverage our expertise to help you achieve a dazzling presence and superior brand value. Our top-notch designers can help you develop beautiful mobile apps or websites that engage your customers in ways no other product has done before.`,
          gridData: [
            {
              value: "45+",
              desc: (
                <>
                  UI UX Design <br />
                  Projects Completed
                </>
              ),
            },
            {
              value: "10+",
              desc: (
                <>
                  UI UX <br />
                  Experts Onboard
                </>
              ),
            },
          ],
        };
      default:
        return {
          title: "WHY SHOULD YOU HIRE BLOCKCHAIN DEVELOPERS FROM BRILWORKS?",
          description: `As a leading blockchain development company, our solutions help you focus on creating exceptional platforms that are scalable, secure, and run efficiently. Our team of blockchain application developers understands the importance of building platforms for greater adoption and integration while our ultimate goal remains to create custom innovative solutions to help you take your business to the next level.`,
          gridData: [
            {
              value: "40+",
              desc: (
                <>
                  Blockchain <br />
                  Projects Completed
                </>
              ),
            },
            {
              value: "15+",
              desc: (
                <>
                  Blockchain <br />
                  Experts Onboard
                </>
              ),
            },
          ],
        };
    }
  };

  return (
    <section className="container max-w-[1440px] mx-auto linear-gradient-bg reveal">
      <div className="px-4">
        <div className="sec9_service_style sm:px-[4rem] px-[1rem]">
          <div className="end-To-end">
            <div className="endTO_text solutions mt-[4rem] !mb-2 md:pt-[3rem]">
              <h2 className="!w-full md:p-0 p-3 !text-colorWhite uppercase">
                {getDeveloperContent()?.title}
              </h2>
            </div>
          </div>

          <p className="text-colorWhite text-lg md:text-center text-left md:my-[2rem] mt-[2rem] pl-3 md:w-[90%] mx-auto">
            {getDeveloperContent()?.description}
          </p>

          <div className="grid lg:grid-cols-3 grid-cols-2 xl:gap-[3.5rem] gap-[2rem] p-4">
            {[...Array(6)].map((_, index) => {
              const gridData = getDeveloperContent()?.gridData || [];
              const { value, desc } = gridData[index] || {}; // Get the data if available, otherwise an empty object

              return (
                <div key={index}>
                  {index === 0 && (
                    <div>
                      <div className="number xl:text-[70px] md:!text-[57px] text-[33px]">
                        {value}
                      </div>
                      <p className="year !border-0 py-[1rem]">{desc}</p>
                    </div>
                  )}
                  {index === 1 && (
                    <div>
                      <div className="number xl:text-[70px] md:!text-[57px] text-[33px]">
                        {value}
                      </div>
                      <p className="year !border-0 py-[1rem]">{desc}</p>
                    </div>
                  )}
                  {index === 2 && (
                    <div>
                      <div className="number xl:text-[70px] md:!text-[57px] text-[33px]">
                        {value || "60%"}
                      </div>
                      <p className="year !border-0 py-[1rem]">
                        {desc || "Savings In Salaries"}
                      </p>
                    </div>
                  )}
                  {index === 3 && (
                    <div>
                      <div className="number xl:text-[70px] md:!text-[57px] text-[33px]">
                        {value || "+4/-4"}
                      </div>
                      <p className="year !border-0 py-[1rem]">
                        {desc || (
                          <>
                            Available to Work
                            <br />
                            in Your Timezone
                          </>
                        )}
                      </p>
                    </div>
                  )}
                  {index === 4 && (
                    <div>
                      <div className="number xl:text-[70px] md:!text-[57px] text-[33px]">
                        {value || "48-72"}
                      </div>
                      <p className="year !border-0 py-[1rem]">
                        {desc || (
                          <>
                            Hours to Fill Most
                            <br />
                            Roles
                          </>
                        )}
                      </p>
                    </div>
                  )}
                  {index === 5 && (
                    <div>
                      <div className="number xl:text-[70px] md:!text-[57px] text-[33px]">
                        {value || "98%"}
                      </div>
                      <p className="year !border-0 py-[1rem]">
                        {desc || (
                          <>
                            Project Success
                            <br />
                            Rate
                          </>
                        )}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyShouldHireDevelopers;
