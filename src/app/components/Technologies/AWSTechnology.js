import Link from "next/link";
import FAQsTechnology from "./FAQsTechnology";
import TechnologyContactForm from "./TechnologyContactForm";
import BenefitOfHiringDevelopers from "./BenefitOfHiringDevelopers";
import ThreeStepstoHireDeveloper from "./ThreeStepstoHireDeveloper";
import WhyShouldHireDevelopers from "./WhyShouldHireDevelopers";
import AWSDevelopers from "./AWSDevelopers";

const AWSTechnology = () => {
  return (
    <>
      <section className="portfolio mt-[6rem]">
        <div className="mx-auto service_width">
          <div className="relative">
            <p>
              <img
                className="h-[46vh] rounded-[20px]"
                src="images/AWS.webp"
                alt="AWS banner"
              />
            </p>
            <div className="service_sec1_position">
              <div className="flex self-end justify-between w-[96%] mx-auto">
                <div className="txt">
                  <div className="how-we flex items-center gap-[1rem]">
                    <div>
                      <img
                        decoding="async"
                        loading="lazy"
                        class="alignnone wp-image-258 "
                        src="/images/1.png"
                        alt="curly bracket"
                        width="24"
                        height="94"
                      />
                    </div>
                    <div>
                      <p className="uppercase xl:text-[4.5rem] lg:text-[66px] md:text-[50px] sm:text-[55px] text-[30px]">
                        AWS
                      </p>
                    </div>
                    <div>
                      <img
                        decoding="async"
                        loading="lazy"
                        class="alignnone wp-image-258 "
                        src="/images/2.png"
                        alt="curly bracket"
                        width="24"
                        height="94"
                      />
                    </div>
                  </div>
                  <div className="how-we flex items-center gap-[1rem]">
                    <p className="uppercase xl:text-[4rem] lg:text-[60px] md:text-[50px] sm:text-[55px] text-[30px] !leading-none">
                      DEVELOPMENT <br />
                      COMPANY
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto service_width lg:py-[6rem] py-[4rem]">
          <div className="flex !flex-col lg:!flex-row gap-[3.5rem]">
            <div className="basis-[45%]">
              <div className="home_sec2_txt3 like_text">
                <Link href="#section10_service">
                  <p className="p-0 !ml-[0] !w-full">
                    Hire AWS Developers for Your Cloud-Adoption Needs
                  </p>
                </Link>
              </div>
            </div>
            <div className="basis-[55%]">
              <div className="home_sec2_txt4">
                <p className="!text-left !text-[1.2rem]">
                  Our expertise in AWS development services has empowered us to
                  bring the best cloud solutions to your organization’s
                  infrastructure without the cost and hassle of having to build
                  it yourself.
                </p>

                <div className="flex md:gap-8 md:mt-[50px] flex-wrap">
                  <div className="btn_paddinng contact_btn btn_flex !m-[0px]">
                    <div className="formBtn_icon">
                      <Link href="#pricing">
                        <p>
                          <img src="/images/right_arrow.png" alt="arrow" />
                        </p>
                      </Link>
                    </div>
                    <Link href="#pricing">
                      <p className="xl:!text-[21px] lg:!text-[18px]">
                        Plan & Pricing
                      </p>
                    </Link>
                  </div>

                  <div className="btn_paddinng contact_btn btn_flex !m-[0px]">
                    <div className="formBtn_icon">
                      <Link href="#section10_service">
                        <p>
                          <img src="/images/right_arrow.png" alt="arrow" />
                        </p>
                      </Link>
                    </div>
                    <Link href="#section10_service">
                      <p className="xl:!text-[21px] lg:!text-[18px]">
                        Hire AWS Developers
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto service_width md:pt-[6rem] pt-[4rem] workpadd_borderTop end-to-end">
          <div className="end-To-end">
            <div className="endTO_text home_sec2_txt3">
              <p className="!w-full p-0">
                Seamlessly Transition to the Cloud with Our AWS Development
                Services
              </p>
            </div>
          </div>

          <div className="service_grid_img">
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[50px] gap-[40px]">
              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    loading="lazy"
                    src="/images/AWS-Development-Consulting.png"
                    alt="AWS Development Consulting"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 01.</div>
                  <div className="service_title">
                    <p>AWS Development Consulting</p>
                  </div>
                  <div className="service_description">
                    <p>
                      Our team of AWS consultants helps your business to
                      establish and maintain a high-performance cloud
                      environment. Our consulting services include development,
                      deployment, migration & optimization.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    loading="lazy"
                    src="/images/AWS-App-Development-Services.png"
                    alt="AWS App Development Services"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 02.</div>
                  <div className="service_title">
                    <p>AWS App Development Services</p>
                  </div>
                  <div className="service_description">
                    <p>
                      The AWS development experts at Brilworks build
                      cutting-edge web and mobile applications, with custom
                      features that are needed to gain a competitive advantage.
                      Whether it is developing them from scratch or modernizing
                      your legacy applications with AWS, our team can assist you
                      with it all.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className=""
                    src="/images/AWS-Cloud-Migration-Services.png"
                    alt="AWS Cloud Migration Services"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 03.</div>
                  <div className="service_title">
                    <p>AWS Cloud Migration Services</p>
                  </div>
                  <div className="service_description">
                    <p>
                      We know that a successful migration to the cloud is about
                      more than just moving your workloads from on-premise
                      applications to public cloud platforms. This is why we
                      take the time to understand your application needs,
                      business objectives, and migration requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className="alignnone wp-image-285 size-full"
                    src="/images/DevOps-AWS-Services.png"
                    alt="DevOps AWS Services"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 04.</div>
                  <div className="service_title">
                    <p>DevOps AWS Services</p>
                  </div>
                  <div className="service_description">
                    <p>
                      DevOps on AWS is an end-to-end automation framework that
                      uses AWS services like CodePipeline, AWS CodeBuild &
                      AWSCodeDeploy to develop, test and deploy your
                      applications in AWS. Our experts help you use services
                      like these so that you can easily build and deploy
                      compound cloud architectures on AWS.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className="alignnone wp-image-285 size-full"
                    src="/images/AWS-Managed-Services.png"
                    alt="AWS Managed Services"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 05.</div>
                  <div className="service_title">
                    <p>AWS Managed Services</p>
                  </div>

                  <div className="service_description">
                    <p>
                      We offer cost-optimized, seamless managed services that
                      are built for the modern world of IT. Our goal is to help
                      you make more informed decisions about your infrastructure
                      and get more out of what you have.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:my-[60px] my-[40px]">
            <div className="btn_paddinng btn_flex !mx-auto">
              <div className="formBtn_icon">
                <Link href="#section10_service">
                  <p>
                    <img src="/images/icons-05.png" alt="call" />
                  </p>
                </Link>
              </div>
              <Link href="#section10_service">
                <p className="xl:!text-[21px] lg:!text-[18px]">
                  Get A Quote For Your Project
                </p>
              </Link>
            </div>
          </div>
        </div>

        <AWSDevelopers />

        <BenefitOfHiringDevelopers />
      </section>

      <ThreeStepstoHireDeveloper />

      <WhyShouldHireDevelopers />

      <TechnologyContactForm />
      <FAQsTechnology />
    </>
  );
};

export default AWSTechnology;
