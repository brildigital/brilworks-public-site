'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import BlockChainFAQs from './TechnologyFAQ';
import TechnologyDevelopers from './TechnologyDevelopers';
import WhyShouldHireDevelopers from './WhyShouldHireDevelopers';
import SolutionContactForm from '../Solution/SolutionContactForm';
import BenefitOfHiringDevelopers from './BenefitOfHiringDevelopers';
import ThreeStepstoHireDeveloper from './ThreeStepstoHireDeveloper';
import { scrollEffect, scrollToSection } from '../lib/commonFunction';

const BlockchainTechnology = () => {
  useEffect(() => {
    scrollEffect();
    window.addEventListener('scroll', scrollEffect);
    return () => {
      window.removeEventListener('scroll', scrollEffect);
    };
  }, []);

  return (
    <>
      <section className='portfolio mt-[6rem]'>
        <div className='mx-auto service_width'>
          <div className='relative'>
            <p>
              <img
                decoding='async'
                loading='lazy'
                className='h-[46vh] rounded-[20px]'
                src='https://a.storyblok.com/f/219851/1398x780/7ccfffe9b5/block-chain.webp'
                alt='Blockchain banner'
              />
            </p>
            <div className='service_sec1_position'>
              <div className='flex self-end justify-between w-[96%] mx-auto'>
                <div className='txt'>
                  <div className='how-we flex items-center gap-[1rem]'>
                    <h1 className='font-style-solution-head line-height-normal uppercase xl:text-[4.5rem] lg:text-[66px] md:text-[50px] sm:text-[55px] text-[30px]'>
                      HIRE
                      <div className='flex items-center gap-1'>
                        <Image
                          className='w-[auto]'
                          src='/images/1.png'
                          alt='curly bracket'
                          width='24'
                          height='94'
                        />
                        BLOCKCHAIN
                        <Image
                          className='w-[auto]'
                          src='/images/2.png'
                          alt='curly bracket'
                          width='24'
                          height='94'
                        />
                      </div>
                      DEVELOPERS
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mx-auto service_width lg:py-[6rem] sm:py-[4rem] py-[2rem]'>
          <div className='flex !flex-col lg:!flex-row gap-[1.5rem]'>
            <div className='basis-[45%]'>
              <div className='home_sec2_txt3 like_text'>
                <Link
                  href='#section10_service'
                  onClick={(e) => scrollToSection(e, 'section10_service')}
                >
                  <p className='!p-0 !ml-[0] !w-full'>
                    Hire Blockchain Developers to Build Next-Gen Decentralized
                    Applications
                  </p>
                </Link>
              </div>
            </div>
            <div className='basis-[55%]'>
              <div className='home_sec2_txt4'>
                <p className='!text-left !text-[1.2rem]'>
                  Our developers have a thorough understanding of blockchain
                  technology and are competent in building specialized
                  blockchains. We use our expertise to custom-design blockchain
                  tools and services for organizations like yours. Try our
                  custom blockchain development services today!
                </p>

                <div className='flex md:gap-8 md:mt-[50px] flex-wrap'>
                  <Link
                    href='#pricing'
                    onClick={(e) => scrollToSection(e, 'pricing')}
                  >
                    <div className='btn_paddinng contact_btn btn_flex !m-[0px]'>
                      <div className='formBtn_icon'>
                        <p>
                          <img
                            decoding='async'
                            loading='lazy'
                            src='/images/right_arrow.png'
                            alt='arrow'
                          />
                        </p>
                      </div>

                      <p className='xl:!text-[20px] lg:!text-[18px]'>
                        Plan & Pricing
                      </p>
                    </div>
                  </Link>

                  <Link
                    href='#section10_service'
                    onClick={(e) => scrollToSection(e, 'section10_service')}
                  >
                    <div className='btn_paddinng contact_btn btn_flex !m-[0px]'>
                      <div className='formBtn_icon'>
                        <p>
                          <img
                            decoding='async'
                            loading='lazy'
                            src='/images/right_arrow.png'
                            alt='arrow'
                          />
                        </p>
                      </div>

                      <p className='xl:!text-[20px] lg:!text-[18px]'>
                        Hire Blockchain Developers
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mx-auto service_width md:pt-[6rem] pt-[4rem] workpadd_borderTop end-to-end'>
          <div className='end-To-end'>
            <div className='endTO_text solutions'>
              <h2 className='!w-full p-0'>
                Enhance Your Application With Our Blockchain
                <br /> Development Services
              </h2>
            </div>
          </div>

          <div className='service_grid_img reveal'>
            <div className='grid md:grid-cols-2 grid-cols-1 md:gap-[40px] gap-[10px]'>
              <div className='flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]'>
                <div className='basis-[15%]'>
                  <img
                    decoding='async'
                    loading='lazy'
                    src='/images/blockchain-app-consultation.png'
                    alt='Blockchain App Consultation'
                  />
                </div>

                <div className='service_txt basis-[85%]'>
                  <div className='service_num'>&lt; 01.</div>
                  <div className='service_title'>
                    <h3>Blockchain App Consultation</h3>
                  </div>
                  <div className='service_description'>
                    <p>
                      Our experts help businesses get their apps developed on
                      the most robust platforms that are specifically suited for
                      business applications including but not limited to
                      Solidity, Hyperledger, EOS, and Stellar.
                    </p>
                  </div>
                </div>
              </div>

              <div className='flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]'>
                <div className='basis-[15%]'>
                  <img
                    decoding='async'
                    loading='lazy'
                    src='/images/mvp-devlopment.png'
                    alt='MVP Development'
                  />
                </div>

                <div className='service_txt basis-[85%]'>
                  <div className='service_num'>&lt; 02.</div>
                  <div className='service_title'>
                    <h3>MVP Development</h3>
                  </div>
                  <div className='service_description'>
                    <p>
                      Because it’s important to test early on whether your idea
                      is truly viable or not, our developers start by building
                      and launching a DApp MVP before moving on to the
                      full-fledged development of DApp.
                    </p>
                  </div>
                </div>
              </div>

              <div className='flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]'>
                <div className='basis-[15%]'>
                  <img
                    decoding='async'
                    loading='lazy'
                    className=''
                    src='/images/dapp-devlopment.png'
                    alt='DApp Development'
                  />
                </div>

                <div className='service_txt basis-[85%]'>
                  <div className='service_num'>&lt; 03.</div>
                  <div className='service_title'>
                    <h3>DApp Development</h3>
                  </div>
                  <div className='service_description'>
                    <p>
                      Once you have your DApp concept tested and validated
                      through MVP, it’s time to launch the real thing. We offer
                      a range of solutions for launching a new product or
                      service on blockchain from technical architecture and
                      development to testing and release.
                    </p>
                  </div>
                </div>
              </div>

              <div className='flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]'>
                <div className='basis-[15%]'>
                  <img
                    decoding='async'
                    loading='lazy'
                    className='alignnone wp-image-285 size-full'
                    src='/images/smart-contracts-devlopment.png'
                    alt='Smart Contracts Development'
                  />
                </div>

                <div className='service_txt basis-[85%]'>
                  <div className='service_num'>&lt; 04.</div>
                  <div className='service_title'>
                    <h3>Smart Contracts Development</h3>
                  </div>
                  <div className='service_description'>
                    <p>
                      Smart contract development for public and private
                      blockchains is our specialty. Our developers are experts
                      at building smart contracts for fundraising, supply chain
                      management, NFT projects, and much more.
                    </p>
                  </div>
                </div>
              </div>

              <div className='flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]'>
                <div className='basis-[15%]'>
                  <img
                    decoding='async'
                    loading='lazy'
                    className='alignnone wp-image-285 size-full'
                    src='/images/custom-blockchain-solutions.png'
                    alt='Custom Blockchain Solutions'
                  />
                </div>

                <div className='service_txt basis-[85%]'>
                  <div className='service_num'>&lt; 05.</div>
                  <div className='service_title'>
                    <h3>Custom Blockchain Solutions</h3>
                  </div>

                  <div className='service_description'>
                    <p>
                      We can integrate custom applications with the most popular
                      Blockchain networks. Our engineers are familiar with
                      designing applications for the latest Blockchain platforms
                      and will work hand-in-hand with clients to design
                      solutions that leverage blockchain technology to digitize
                      business processes.
                    </p>
                  </div>
                </div>
              </div>

              <div className='flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]'>
                <div className='basis-[15%]'>
                  <img
                    decoding='async'
                    loading='lazy'
                    className='alignnone wp-image-285 size-full'
                    src='/images/nft-marketplace-devlpment.png'
                    alt='NFT Marketplace Development'
                  />
                </div>

                <div className='service_txt basis-[85%]'>
                  <div className='service_num'>&lt; 06.</div>
                  <div className='service_title'>
                    <h3>NFT Marketplace Development</h3>
                  </div>
                  <div className='service_description'>
                    <p>
                      You can also use our blockchain development services to
                      develop decentralized NFT marketplaces, each of which can
                      manage NFT trading, from token creation to platform
                      building, software development, and coin exchanges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full md:my-[60px] my-[40px]'>
            <Link
              href='#section10_service'
              onClick={(e) => scrollToSection(e, 'section10_service')}
            >
              <div className='btn_paddinng btn_flex !mx-auto'>
                <div className='formBtn_icon'>
                  <p>
                    <img
                      decoding='async'
                      loading='lazy'
                      src='/images/icons-05.png'
                      alt='call'
                    />
                  </p>
                </div>

                <p className='xl:!text-[20px] lg:!text-[18px]'>
                  Get A Quote For Your Project
                </p>
              </div>
            </Link>
          </div>
        </div>

        <TechnologyDevelopers />

        <BenefitOfHiringDevelopers />
      </section>

      <ThreeStepstoHireDeveloper />

      <WhyShouldHireDevelopers />

      <SolutionContactForm />
      <BlockChainFAQs />
    </>
  );
};

export default BlockchainTechnology;
