/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';
import { BestAdvocateText } from '../Homepage/BigText';
import ClientReviews from '../Homepage/ClientReviews';
import HomepageContactForm from '../Homepage/HomepageContactForm';
import { useEffect } from 'react';
import { scrollEffect } from '../lib/commonFunction';
import Image from 'next/image';
import WhatMakeUsBrilliant from './WhatMakeUsBrilliant';

const PortfolioInnerEccocar = () => {
  useEffect(() => {
    scrollEffect();
    window.addEventListener('scroll', scrollEffect);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', scrollEffect);
    };
  }, []);

  return (
    <section className='portfolio'>
      <div className='service_width'>
        <div className='sec6_title text-center'>
          <h1 className='!text-[2.5rem] fontfamily-ebold '>
            See How Team Brilliant Built A Payment
            <br />
            Gateway for Eccocar
          </h1>
        </div>
        <div className='mb-[64px]'>
          <img
            decoding='async'
            loading='lazy'
            className='alignnone'
            src='/images/Eccocar.jpg'
            alt='vugo'
          />
        </div>

        <div className='porfolio_inner '>
          <p className='md:!w-3/4'>
            Eccocar is a SaaS Company that provides technology for rental cars
            to adapt to new mobility trends and offers a mobility service on
            demand. Eccocar digitizes rent-a-car and new on-demand mobility
            providers, such as ride-hailing and ride-sharing operators, and
            generates white-label APPs for them to launch their service.
          </p>
        </div>

        <div className='md:pt-[4rem] md:pb-[6rem] pt-[3rem] pb-[3rem]'>
          <Link
            href='https://eccocar.com'
            className='portfolio_know_more md:mx-auto ml-0'
          >
            <div className='get_icon'>
              <img
                decoding='async'
                loading='lazy'
                className='alignnone'
                src='/images/right_arrow.png'
                alt='right arrow'
              />
            </div>
            <div className='portfolio_know_more_txt'>
              <p>Visit Website</p>
            </div>
          </Link>
        </div>

        <div className='mx-auto reveal'>
          <div className='flex flex-wrap identifying-understanding'>
            <div className='lg:w-6/12 w-full lg:px-[10px] px-[0px] lg:pb-[0px] pb-[30px]'>
              <div>
                <div className='our_img'>
                  <Image
                    className='border_redius20 alignnone'
                    src='/images/Identifying-the-Business-Needs-2.jpg'
                    alt='Identifying the Business Needs'
                    width='691'
                    height='361'
                  />
                </div>
              </div>
              <div className='w-[85%] text-left'>
                <div className='service_title'>
                  <p className='!border-0 pt-[2rem]'>
                    Identifying the Business Needs
                  </p>
                </div>
                <div className='home_sec2_txt4'>
                  <p className='!leading-snug !text-left'>
                    The client Eccocar reached out to Brilworks to develop a web
                    application and add a Stripe payment module to collect
                    payments from customers on behalf of the fleet owner.
                  </p>
                </div>
              </div>
            </div>
            <div className='lg:w-6/12 w-full lg:px-[10px] px-[0px] lg:pb-[0px] pb-[30px]'>
              <div>
                <div className='our_img'>
                  <Image
                    className='border_redius20 alignnone'
                    src='/images/Understanding-the-Requirement-2.jpg'
                    alt='Understanding the Requirement'
                    width='691'
                    height='361'
                  />
                </div>
              </div>
              <div className='w-[85%] text-left'>
                <div className='service_title'>
                  <p className='!border-0 pt-[2rem]'>
                    Understanding the Requirement
                  </p>
                </div>
                <div className='home_sec2_txt4'>
                  <p className='!leading-snug !text-left !w-fit'>
                    Brilworks was tasked with building an online payment gateway
                    for the client’s fleet management system. Eccocar wanted us
                    to integrate their platform with Stripe to collect payments
                    from customers and securely pass them on to the fleet owner.
                    Another important requirement was the enablement of
                    geolocation services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='workpadd_borderTop xl:my-[8rem] lg:my-[6rem] md:my-[4rem] my-[2rem]'></div>

        <div className='sec6_title text-center !p-0 md:w-[68%] w-[100%] mx-auto md:mb-[80px] mb-[80px]'>
          <p>HOW BRILWORKS HELPED ECCOCAR ACHIEVE ITS OBJECTIVES?</p>
        </div>

        <div className='service_grid_img reveal'>
          <div className='grid md:grid-cols-2 grid-cols-1 md:gap-[40px]'>
            <div className='flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]'>
              <div className='basis-[15%]'>
                <img
                  decoding='async'
                  loading='lazy'
                  src='/images/Stripe-Integration.png'
                  alt='Feature-rich Application'
                />
              </div>

              <div className='service_txt basis-[85%]'>
                <div className='service_num'>&lt; 01.</div>
                <div className='service_title'>
                  <p>Stripe Integration</p>
                </div>
                <div className='service_description'>
                  <p>
                    Brilworks used Stripe Connect for payment processing and
                    distributing payments between Eccocar and fleet owners so
                    that they could run smooth operations without worrying about
                    payment.
                  </p>
                </div>
              </div>
            </div>

            <div className='flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]'>
              <div className='basis-[15%]'>
                <img
                  decoding='async'
                  loading='lazy'
                  src='/images/Geo-locations.png'
                  alt='Assured On-time Delivery'
                />
              </div>

              <div className='service_txt basis-[85%]'>
                <div className='service_num'>&lt; 02.</div>
                <div className='service_title'>
                  <p>Geo-locations</p>
                </div>
                <div className='service_description'>
                  <p>
                    We built other modules to manage fleets so that the fleet
                    owner could have up-to-date details about their vehicles
                    without doing any manual tracking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='workpadd_borderTop xl:my-[6rem] md:my-[4rem] my-[2rem]'></div>

        <div className='sec6_title text-center !p-0 mx-auto mb-[32px]'>
          <p>THE RESULT</p>
        </div>

        <div className='md:w-[73%] w-[100%] mx-auto text-center home_sec2_txt4'>
          <p className='!pt-0 md:!text-[1.5rem] !text-left md:!text-center'>
            Thanks to our expertise in fleet management software development, we
            were able to solve the complex problem of connecting fleets to
            suppliers and clients.
          </p>
        </div>

        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-[32px] md:mt-[64px] mt-[32px] the-result reveal'>
          <div className='text-center'>
            <div className='w-[22%] mx-auto'>
              <img
                decoding='async'
                loading='lazy'
                className='alignnone'
                src='/images/eccocar-1.png'
                alt='2x'
              />
            </div>
            <div className='service_description txt_center'>
              <p>
                Smooth payments flow between
                <br />
                customers and fleet owner
              </p>
            </div>
          </div>
          <div className='text-center'>
            <div className='w-[22%] mx-auto'>
              <img
                decoding='async'
                loading='lazy'
                className='alignnone'
                src='/images/eccocar-2.png'
                alt='advertiser queries'
              />
            </div>
            <div className='service_description txt_center'>
              <p>
                Fleet owners can see
                <br />
                detail about their vehicles
                <br />
                and can manage inventory accordingly.
              </p>
            </div>
          </div>
        </div>

        <WhatMakeUsBrilliant />

        <div className='workpadd_borderTop xl:my-[6rem] md:my-[4rem] my-[2rem]'></div>

        <div className='container mx-auto'>
          <BestAdvocateText />
          <ClientReviews />
        </div>

        <div className='blog-home xl:pb-[128px] pb-[40px] mx-auto md:pt-[128px] pt-[32px] reveal'>
          <HomepageContactForm />
        </div>
      </div>
    </section>
  );
};

export default PortfolioInnerEccocar;
